export default interface Curriculum {
  acronym: string;
  name: string;
  steps: {
    number: number,
    subjects: {
      name: string;
      url: string;
      prerequisites: string[];
      books: {
        name: string;
        url: string;
      }[];
    }[];
  }[];
}
