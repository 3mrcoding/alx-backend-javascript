const getStudentsByLocation = (arr, location) => {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.filter((val) => val.location === location);
};
export default getStudentsByLocation;
