import { Handle, Position } from "@xyflow/react";

interface CustomNodeProps {
  data: {
    name: string;
    preReq: string[];
    etapa: number;
    isSelected?: boolean;
    isClicked?: boolean;
    hasActiveSelection?: boolean;
  };
}

const getEtapaColor = (etapa: number) => {
  switch (etapa) {
    case 1:
      return "bg-blue-200";
    case 2:
      return "bg-green-200";
    case 3:
      return "bg-yellow-200";
    case 4:
      return "bg-red-200";
    case 5:
      return "bg-purple-200";
    case 6:
      return "bg-pink-200";
    case 7:
      return "bg-indigo-200";
    default:
      return "bg-gray-200";
  }
};

const CustomNode = ({ data }: CustomNodeProps) => {
  const isClicked = data.isClicked;
  const isDark = data.isSelected || isClicked;
  const background = isClicked
    ? "bg-gray-800"
    : data.isSelected
      ? "bg-gray-700"
      : getEtapaColor(data.etapa);

  const textColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-600";

  // Se existe seleção ativa e ESTE nó não está selecionado/clicado, ele fica “menos focado”
  const dimmed = data.hasActiveSelection && !data.isSelected && !data.isClicked;

  console.log(
    "Rendering CustomNode:",
    data.name,
    "isSelected:",
    data.isSelected,
  );

  return (
    <div
      className={`px-4 py-3 shadow-md rounded-lg border-2 border-stone-400 transition-colors ${background}
             ${dimmed ? "opacity-40 grayscale" : "scale-105 hover:scale-110"} transition-all duration-400 ease-in`}
    >
      <div className="flex flex-col space-y-2 w-48">
        <div className={`text-lg font-semibold text-wrap ${textColor}`}>
          {data.name}
        </div>
        <div className={`text-sm ${subTextColor}`}>Etapa {data.etapa}</div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 bg-teal-500!"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 bg-teal-500!"
      />
    </div>
  );
};

export default CustomNode;
