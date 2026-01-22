export function formatSecondsToMinutes(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  return `${minutes} min`;
}
