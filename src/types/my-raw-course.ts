export default interface MyRawCourse {
  [courseSlug: string]: {
    [stepNumber: number]: {
      [subjectNumber: number]: number[];
    };
  };
}
