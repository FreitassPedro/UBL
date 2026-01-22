import { CheckCircle2, Circle } from "lucide-react";

export function getTheme(number: number) {
  switch (number) {
    case 1:
      return {
        glow: "from-blue-500/10 via-transparent",
        border: "border-blue-400",
        text: "text-blue-400",
      };
    case 2:
      return {
        glow: "from-emerald-500/10 via-transparent",
        border: "border-emerald-400",
        text: "text-emerald-400",
      };
    case 3:
      return {
        glow: "from-violet-500/10 via-transparent",
        border: "border-violet-400",
        text: "text-violet-400",
      };
    case 4:
      return {
        glow: "from-rose-500/10 via-transparent",
        border: "border-rose-400",
        text: "text-rose-400",
      };
    case 5:
      return {
        glow: "from-amber-500/10 via-transparent",
        border: "border-amber-400",
        text: "text-amber-400",
      };
    case 6:
      return {
        glow: "from-cyan-500/10 via-transparent",
        border: "border-cyan-400",
        text: "text-cyan-400",
      };
    case 7:
      return {
        glow: "from-indigo-500/10 via-transparent",
        border: "border-indigo-400",
        text: "text-indigo-400",
      };
    default:
      return {
        glow: "from-zinc-500/10 via-transparent",
        border: "border-zinc-400",
        text: "text-zinc-400",
      };
  }
}

export function getProgressTheme(progress: number) {
  if (progress === 100)
    return {
      color: "text-emerald-400",
      border: "group-hover:border-emerald-700/30 border-emerald-500/50",
      bg: "bg-linear-to-r from-emerald-900/5 to-emerald-700/60",
      icon: CheckCircle2,
    };
  else if (progress > 0)
    return {
      color: "text-amber-400",
      border: "group-hover:border-blue-700/60  border-blue-500/50",
      bg: "bg-linear-to-r from-blue-900/10 to-blue-700/25",
      icon: CheckCircle2,
    };
  else
    return {
      color: "text-zinc-500",
      border: "group-hover:border-zinc-600",
      icon: Circle,
    };
}
