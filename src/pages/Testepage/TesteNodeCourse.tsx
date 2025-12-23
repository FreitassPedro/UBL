import { Background, MarkerType, ReactFlow, useEdgesState, useNodesState, type Edge, type Node } from '@xyflow/react';
import React from 'react';
import '@xyflow/react/dist/style.css';
import { CurriculoCC } from '../../data/gradeCurricular';
import CustomNode from '../../components/CurriculoNode/CustomNode';

interface customNode extends Node {
    data: {
        name: string;
        preReq: string[];
        etapa: number;
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
}

const generateFlow = () => {
    const nodes: customNode[] = [];
    const edges: Edge[] = [];

    CurriculoCC.etapas.forEach((etapa) => {
        etapa.cadeiras.forEach((cadeira, cadeiraIndex) => {
            const nodeId = cadeira.name;
            nodes.push(
                {
                    id: nodeId,
                    type: 'customNode',
                    data: { name: cadeira.name, preReq: cadeira.prerequisites, etapa: etapa.number },
                    position: { x: etapa.number * 250 + cadeiraIndex * 10, y: 200 * cadeiraIndex },
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
                        style: { strokeWidth: 0.4 },
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

    const onNodeClick = (_event: React.MouseEvent, selectedNode: customNode) => {
        console.log('Node clicked:', selectedNode);
        if (!selectedNode) return;

        const connectedNodesId = new Set<string>();
        edges.forEach((edge) => {
            if (edge.source === selectedNode.id) {
                connectedNodesId.add(edge.target);
            } else if (edge.target === selectedNode.id) {
                connectedNodesId.add(edge.source);
            }
        });

        console.log('Connected nodes to highlight:', Array.from(connectedNodesId));


        setEdges((eds) =>
            eds.map((edge) => {
                const isConnected = edge.source === selectedNode.id || edge.target === selectedNode.id;
                return {
                    ...edge,
                    animated: isConnected,
                    style: {
                        stroke: isConnected ? '#FF5733' : '',
                        strokeWidth: isConnected ? 3 : 0.4,
                    }
                }
            })
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
                    }
                };
            })
        );
    };

    const onPaneClick = () => {
        setEdges((eds) =>
            eds.map((edge) => ({
                ...edge,
                animated: false,
                style: { strokeWidth: 0.4, stroke: '' },
            }))
        );

        setNodes((nds) =>
            nds.map((node) => ({
                ...node,
                data: {
                    ...node.data,
                    isSelected: false,
                    isClicked: false,
                    hasActiveSelection: false,
                }
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