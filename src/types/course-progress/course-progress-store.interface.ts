export default interface CourseProgressStore {
  [courseSlug: string]: {
    [stepNumber: number]: {
      [subjectNumber: number]: number[];
    };
  };
}
