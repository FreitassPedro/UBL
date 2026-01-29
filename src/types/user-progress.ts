export default interface UserProgress {
  [curriculumAcronmy: string]: {
    [stepNumber: number]: {
      [subjectName: string]: number[];
    };
  };
}
