export default interface CourseProgressStore {
  [courseSlug: string]: {
    [semesterNumber: number]: {
      [subjectNumber: number]: number[];
    };
  };
}
