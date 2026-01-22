import {
  Background,
  MarkerType,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
} from "@xyflow/react";
import React from "react";
import "@xyflow/react/dist/style.css";
import CustomNode from "@/components/node-graphs/CustomNode";
import type { Curriculum } from "@/types/curriculum";

interface customNode extends Node {
  data: {
    name: string;
    preReq: string[];
    step: number;
    isSelected?: boolean;
    isClicked?: boolean;
    hasActiveSelection?: boolean;
  };
  position: {
    x: number;
    y: number;
  };
}

const nodeTypes = {
  customNode: CustomNode,
};

const generateFlow = (grade: Curriculum) => {
  const nodes: customNode[] = [];
  const edges: Edge[] = [];

  grade.steps.forEach((etapa) => {
    etapa.subjects.forEach((cadeira, cadeiraIndex) => {
      const nodeId = cadeira.name;
      nodes.push({
        id: nodeId,
        type: "customNode",
        data: {
          name: cadeira.name,
          preReq: cadeira.prerequisites,
          step: etapa.number,
        },
        position: {
          x: (etapa.number - 1) * 250 + cadeiraIndex * 10,
          y: 200 * cadeiraIndex,
        },
      });
    });
  });

  grade.steps.forEach((etapa) => {
    etapa.subjects.forEach((cadeira) => {
      if (cadeira.prerequisites && cadeira.prerequisites.length > 0) {
        cadeira.prerequisites.forEach((preReq) => {
          const sourceExist = nodes.find((node) => node.id === preReq);
          if (!sourceExist) return;
          edges.push({
            id: `e-${preReq}-${cadeira.name}`,
            source: preReq,
            target: cadeira.name,
            type: "smoothstep",
            markerEnd: MarkerType.ArrowClosed,
            animated: false,
            style: { strokeWidth: 0.4 },
          });
        });
      }
    });
  });

  return { initialNodes: nodes, initialEdges: edges };
};

interface NodeGraphVisualizationProps {
  grade: Curriculum;
}

const NodeGraphVisualization = ({ grade }: NodeGraphVisualizationProps) => {
  const flow = React.useMemo(() => generateFlow(grade), [grade]);
  const [nodes, setNodes, onNodesChange] = useNodesState(flow.initialNodes);
  const [edges, setEdges] = useEdgesState(flow.initialEdges);

  React.useEffect(() => {
    setNodes(flow.initialNodes);
    setEdges(flow.initialEdges);
  }, [flow, setEdges, setNodes]);

  const fitViewOptions = {
    padding: 0.2,
    maxZoom: 0.8,
    minZoom: 0.5,
  };

  const onNodeClick = (_event: React.MouseEvent, selectedNode: customNode) => {
    console.log("Node clicked:", selectedNode);
    if (!selectedNode) return;

    const connectedNodesId = new Set<string>();
    edges.forEach((edge) => {
      if (edge.source === selectedNode.id) {
        connectedNodesId.add(edge.target);
      } else if (edge.target === selectedNode.id) {
        connectedNodesId.add(edge.source);
      }
    });

    console.log("Connected nodes to highlight:", Array.from(connectedNodesId));

    setEdges((eds) =>
      eds.map((edge) => {
        const isConnected =
          edge.source === selectedNode.id || edge.target === selectedNode.id;
        return {
          ...edge,
          animated: isConnected,
          style: {
            stroke: isConnected ? "#FF5733" : "",
            strokeWidth: isConnected ? 3 : 0.4,
          },
        };
      }),
    );

    setNodes((nds) =>
      nds.map((node) => {
        return {
          ...node,
          data: {
            ...node.data,
            isClicked: node.id === selectedNode.id,
            isSelected: connectedNodesId.has(node.id),
            hasActiveSelection: true,
          },
        };
      }),
    );
  };

  const onPaneClick = () => {
    setEdges((eds) =>
      eds.map((edge) => ({
        ...edge,
        animated: false,
        style: { strokeWidth: 0.4, stroke: "" },
      })),
    );

    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data: {
          ...node.data,
          isSelected: false,
          isClicked: false,
          hasActiveSelection: false,
        },
      })),
    );
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        minZoom={0.2}
        maxZoom={1}
        fitView
        fitViewOptions={fitViewOptions}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default NodeGraphVisualization;
