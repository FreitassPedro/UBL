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
      color: "text-emerald-300",
      iconColor: "text-emerald-400",
      border: "group-hover:border-emerald-500/30 border-emerald-400/40",
      bg: "bg-linear-to-r from-emerald-900/10 to-emerald-700/35",
      icon: CheckCircle2,
    };
  else if (progress > 0)
    return {
      color: "text-blue-100/85",
      iconColor: "text-amber-500",
      border: "group-hover:border-blue-600/45 border-blue-500/45",
      bg: "bg-linear-to-r from-blue-950/35 to-blue-900/40",
      icon: CheckCircle2,
    };
  else
    return {
      color: "text-zinc-400",
      iconColor: "text-zinc-500",
      border: "group-hover:border-zinc-500/70 border-zinc-700/70",
      bg: "bg-zinc-900",
      icon: Circle,
    };
}

export function getNodeTheme(number: number) {
  switch (number) {
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
}
