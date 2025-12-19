import * as ProgressPrimitive from "@radix-ui/react-progress";

interface TesteProgressProps {
  value: number; // Valor do progresso (0-100)
  color?: string; // Opcional
  height?: string; // Altura opcional da barra de progresso
}

// Componente antigo de progresso NextJS não funciona bem
export function TesteProgress({ value, color, height }: TesteProgressProps) {

  return (
    <div className={`w-full bg-gray-300 rounded-full overflow-hidden ${height ? height : 'h-2'}`}>
      <ProgressPrimitive.Root
        className="relative h-full w-full"
        value={value}
      >

        <ProgressPrimitive.Indicator
          className={`h-full ${color ? color : 'from-ubl-blue to-ubl-green bg-linear-to-r'} transition-transform duration-500 ease-in-out`} // Estilo da barra de preenchimento
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
      <div className="text-center mt-2 text-sm text-gray-700">
        Progresso: {value}%
      </div>
    </div>
  );
}