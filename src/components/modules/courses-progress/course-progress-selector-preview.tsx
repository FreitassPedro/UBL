import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface CourseProgressSelectorPreviewProps {
  course: {
    slug: string;
    name: string;
    description: string;
    icon: LucideIcon;
    accentText: string;
    accentBorder: string;
    accentBackground: string;
    accentGlow: string;
  };
}

export const CourseProgressSelectorPreview = ({ course }: CourseProgressSelectorPreviewProps) => {
  return (
    <Link
      href={`/meu-curso/${course.slug}`}
      className={cn(
        "group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border bg-zinc-900 p-5 transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 group-hover:scale-[1.02]",
        course.accentBorder
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-br opacity-60 transition-opacity duration-300 group-hover:opacity-80",
          course.accentGlow
        )}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-zinc-100 md:text-xl">
            {course.name}
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
            {course.description}
          </p>
        </div>

        <div
          className={cn(
            "shrink-0 rounded-lg border p-3",
            course.accentBorder,
            course.accentBackground
          )}
        >
          <course.icon className={cn("h-6 w-6", course.accentText)} />
        </div>
      </div>

      <div className="relative mt-auto flex items-center justify-end text-xs font-medium text-zinc-500">
        <span className={cn("inline-flex items-center gap-2", course.accentText)}>
          <span>Selecionar</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};

export default CourseProgressSelectorPreview;
