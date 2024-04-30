const getListStudentIds = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map((val) => val.id);
};
export default getListStudentIds;
