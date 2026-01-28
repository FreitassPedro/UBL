export default interface Curriculum {
  id: number;
  acronym: string;
  name: string;
  steps: {
    id: number;
    number: number,
    subjects: {
      id: number;
      name: string;
      url: string;
      prerequisites: string[];
      duration?: number;
      books: {
        name: string;
        url: string;
      }[];
    }[];
  }[];
}
