import { Background, MarkerType, ReactFlow, useEdgesState, useNodesState, type Edge, type Node } from '@xyflow/react';
import React from 'react';
import '@xyflow/react/dist/style.css';
import { CurriculoCC } from '../../data/gradeCurricular';
import CustomNode from '../../components/CurriculoNode/CustomNode';
import { data } from 'react-router-dom';

interface customNode extends Node {

    data: {
        name: string;
        preReq: string[];
        etapa: number;
    };
    position: {
        x: number;
        y: number;
    };
}



const nodeTypes = {
    customNode: CustomNode,
}

const generateFlow = () => {
    const nodes: customNode[] = [];
    const edges: Edge[] = [];

    CurriculoCC.etapas.forEach((etapa, etapaIndex) => {
        etapa.cadeiras.forEach((cadeira, cadeiraIndex) => {
            const nodeId = cadeira.name;
            nodes.push(
                {
                    id: nodeId,
                    type: 'customNode',
                    data: { name: cadeira.name, preReq: cadeira.prerequisites, etapa: etapa.number },
                    position: { x: etapa.number * 250, y: 200 * cadeiraIndex },
                });
        });
    });

    CurriculoCC.etapas.forEach((etapa) => {
        etapa.cadeiras.forEach((cadeira) => {
            if (cadeira.prerequisites && cadeira.prerequisites.length > 0) {
                cadeira.prerequisites.forEach((preReq) => {
                    const sourceExist = nodes.find(node => node.id === preReq);
                    if (!sourceExist) return;
                    edges.push({
                        id: `e-${preReq}-${cadeira.name}`,
                        source: preReq,
                        target: cadeira.name,
                        type: 'smoothstep',
                        markerEnd: MarkerType.ArrowClosed,
                        animated: false,
                    });
                })
            }
        });
    });

    return { initialNodes: nodes, initialEdges: edges };
};

const initialNodes = generateFlow().initialNodes;
const initialEdges = generateFlow().initialEdges;

const TesteNodeCourse = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges] = useEdgesState(initialEdges);

    const onNodeClick = (event: React.MouseEvent, selectedNode: customNode) => {
        console.log('Node clicked:', selectedNode);
        if (!selectedNode) return;
        setEdges((eds) =>
            eds.map((edge) => {
                const isConnected = edge.source === selectedNode.id || edge.target === selectedNode.id;
                return {
                    ...edge,
                    animated: isConnected,
                    style: {
                        stroke: isConnected ? '#FF5733' : '#222222',
                        strokeWidth: isConnected ? 2 : 0.3
                    },
                }
            })
        );
    };

    const onPaneClick = () => {
        setEdges((eds) =>
            eds.map((edge) => ({
                ...edge,
                animated: false,
                style: { stroke: '#222222', strokeWidth: 0.3 },
            }))
        );
    };

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onNodeClick={onNodeClick}
                onPaneClick={onPaneClick}
                nodeTypes={nodeTypes}
                fitView
            >
                <Background />
            </ReactFlow>
        </div>
    );
}

export default TesteNodeCourse