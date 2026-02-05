export default interface MyCourse {
  steps: {
    subjects: {
      progress: number;
      lessons: number[];
    }[];
  }[];
}
