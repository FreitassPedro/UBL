import * as ProgressPrimitive from "@radix-ui/react-progress"; 

interface TesteProgressProps {
  value: number; // Valor do progresso (0-100)
}

// Componente antigo de progresso NextJS não funciona bem
export function TesteProgress({ value }: TesteProgressProps) {
  // O essencial ter algum `background-color` para ver o preenchimento.

  return (
    <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden"> {/* Contêiner da barra */}
      <ProgressPrimitive.Root
        className="relative h-full w-full"
        value={value}
      >
        <ProgressPrimitive.Indicator
          className="h-full bg-ubl-blue transition-transform duration-500 ease-in-out" // Estilo da barra de preenchimento
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
      <div className="text-center mt-2 text-sm text-gray-700">
        Progresso: {value}%
      </div>
    </div>
  );
}