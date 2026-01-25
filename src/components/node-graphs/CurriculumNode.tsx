import { Handle, Position } from "@xyflow/react";
import { cn } from "@/lib/utils";
import { getNodeTheme } from "@/lib/theme";

interface CurriculumNodeProps {
  data: {
    name: string;
    preReq: string[];
    step: number;
    isSelected?: boolean;
    isClicked?: boolean;
    hasActiveSelection?: boolean;
  };
}

const CurriculumNode = ({ data }: CurriculumNodeProps) => {
  const isClicked = data.isClicked;
  const isDark = data.isSelected || isClicked;
  const background = isClicked
    ? "bg-gray-800"
    : data.isSelected
      ? "bg-gray-700"
      : getNodeTheme(data.step);

  const textColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-600";

  // Se existe seleção ativa e ESTE nó não está selecionado/clicado, ele fica “menos focado”
  const dimmed = data.hasActiveSelection && !data.isSelected && !data.isClicked;

  console.log(
    "Rendering CurriculumNode:",
    data.name,
    "isSelected:",
    data.isSelected,
  );

  return (
    <div
      className={cn(
        "px-4 py-3 shadow-md rounded-lg border-2 border-stone-400 transition-colors duration-400 ease-in",
        background,
        dimmed ? "opacity-40 grayscale" : "scale-105 hover:scale-110",
      )}
    >
      <div className="flex flex-col space-y-2 w-48">
        <div className={cn("text-lg font-semibold text-wrap", textColor)}>
          {data.name}
        </div>
        <div className={cn("text-sm", subTextColor)}>Etapa {data.step}</div>
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

export default CurriculumNode;
