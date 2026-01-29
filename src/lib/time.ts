export function formatSecondsToMinutes(seconds: number): string {
  const minutes: number = Math.round(seconds / 60);
  return `${minutes}min`;
}

export function formatSecondsToHours(seconds: number): string {
  const hours: number = Math.round(seconds / 3600);
  return `${hours}h`;
}
