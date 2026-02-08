export function formatSeconds(seconds: number): string {
  const totalMinutes: number = Math.max(0, Math.round(seconds / 60));
  const hours: number = Math.floor(totalMinutes / 60);
  const minutes: number = totalMinutes % 60;

  if (hours === 0) return `${minutes}min`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}min`;
}
