import { Background, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
import React from 'react';
import '@xyflow/react/dist/style.css';
import { CurriculoCC } from '../../data/gradeCurricular';
import CustomNode from '../../components/CurriculoNode/CustomNode';
import { data } from 'react-router-dom';

const nodeTypes = {
    customNode: CustomNode,
}
const generateFlow = () => {
    const nodes: { id: string; type: string; data: { name: string; preReq: string[], etapa: number }; position: { x: number; y: number; }; }[] = [];
    const edges: { id: string; source: string; target: string; animated: boolean; }[] = [];

    CurriculoCC.etapas.forEach((etapa, etapaIndex) => {
        etapa.cadeiras.forEach((cadeira, cadeiraIndex) => {

            const nodeId = cadeira.name;
            nodes.push(
                {
                    id: nodeId,
                    type: 'customNode',
                    data: { name: cadeira.name, preReq: cadeira.prerequisites, etapa: etapa.number },
                    position: { x: etapa.number * 250, y: 150 * cadeiraIndex },
                });

            if (cadeira.prerequisites && cadeira.prerequisites.length > 0) {
                cadeira.prerequisites.forEach((preReq) => {
                    edges.push({
                        id: `e-${preReq}-${nodeId}`,
                        source: preReq,
                        target: nodeId,
                        animated: true,
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
    const [edges] = useEdgesState(initialEdges);

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                nodeTypes={nodeTypes}
                fitView
            >
                <Background />
            </ReactFlow>
        </div>
    );
}

export default TesteNodeCourse