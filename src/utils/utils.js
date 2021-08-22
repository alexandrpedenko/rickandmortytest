export function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function createData({ ...args }) {
  return { ...args };
}

export function checkObjectPropLength(object) {
  let lengthFlag = false;
  Object.keys(object).forEach((key) => {
    if (object[key].length > 0) {
      lengthFlag = true;
    }
  });

  return lengthFlag;
}
