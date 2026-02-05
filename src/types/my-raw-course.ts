export default interface MyRawCourse {
  [courseSlug: string]: {
    [stepNumber: number]: {
      [subjectId: number]: number[];
    };
  };
}
