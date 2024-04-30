const getStudentIdsSum = (studentList) => {
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList.reduce((com, val) => com + val.id, 0);
};
export default getStudentIdsSum;
