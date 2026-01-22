import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageReverse?: boolean;
  children?: ReactNode;
  className?: string;
}

export const HomeSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageReverse = false,
  children,
  className,
}: FeatureSectionProps) => {
  return (
    <section
      className={cn(
        className,
        "relative z-10 flex items-center justify-center",
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full mx-auto",
          imageReverse ? "md:[&>div:first-child]:order-2" : "",
        )}
      >
        <div className="space-y-4">
          <h2 className="mb-6 text-4xl sm:text-5xl md:text-[3.5rem] font-semibold leading-[1.05] tracking-[-0.03em] bg-clip-text text-transparent bg-linear-to-br from-zinc-100 via-zinc-300 to-zinc-400">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-200/90 font-light leading-relaxed">
            {description}
          </p>
          {children}
        </div>
        <div className="flex items-center justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
};
