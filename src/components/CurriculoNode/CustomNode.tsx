import { Handle, Position } from "@xyflow/react";
import { data } from "react-router-dom";

interface CustomNodeProps {
    data: {
        name: string;
        preReq: string[];
        etapa: number;
    };
}
const CustomNode = ({ data }: CustomNodeProps) => {
    const getColor = (etapa: number) => {
        switch (etapa) {
            case 1:
                return 'bg-blue-200';
            case 2:
                return 'bg-green-200';
            case 3:
                return 'bg-yellow-200';
            case 4:
                return 'bg-red-200';
            case 5:
                return 'bg-purple-200';
            case 6:
                return 'bg-pink-200';
            case 7:
                return 'bg-indigo-200';
            default:
                return 'bg-gray-200';
        }
    }
    return (
        <div className={`px-4 py-3 shadow-md rounded-lg ${getColor(data.etapa)} border-2 border-stone-400`}>
            <div className="flex flex-col space-y-2 w-48">
                <div className="text-lg font-semibold text-wrap">{data.name}</div>
                <div className="text-sm text-gray-600">Etapa {data.etapa}</div>
                {/* Pré-requisitos 
                <div className="flex flex-col space-y-1">
                    {data.preReq.length > 0 && data.preReq.map((preq) => (
                        <div key={preq} className="text-gray-500">{preq}</div>
                    ))}
                </div>
                */}
            </div>

            {/* Handles para conexões */}

            <div>
                <Handle
                    type="target"
                    position={Position.Top}
                    className="w-16 !bg-teal-500"
                />
                <Handle
                    type="source"
                    position={Position.Bottom}
                    className="w-16 !bg-teal-500"
                />
            </div>

        </div>
    );
}

export default CustomNode;