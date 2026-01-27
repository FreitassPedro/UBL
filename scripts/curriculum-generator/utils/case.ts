export function toPascalCase(text: string): string {
  return text
    .replace(/[()]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[\s-_]+/)
    .filter((word) => {
      const w: string = word.toLowerCase();
      const isRoman: boolean = /^(i|v|x|l|c|d|m)+$/.test(w);
      const isSingleLetterConnector: boolean =
        w.length === 1 && /[a-z]/.test(w);
      return !(isSingleLetterConnector && !isRoman);
    })
    .map((word) => {
      const w: string = word.toLowerCase();
      return /^(i|v|x|l|c|d|m)+$/.test(w)
        ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join("");
}

export function toCamelCase(text: string): string {
  const pascal: string = toPascalCase(text);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}
