function sortByHeight(a) {
  const negOnePos = [];
  const values = [];

  a.forEach((element, index) =>
    element === -1 ? negOnePos.push(index) : values.push(element)
  );

  const sortArr = values.sort((a, b) => a - b);

  negOnePos.forEach((val, index) => sortArr.splice(negOnePos[index], 0, -1));

  return sortArr;
}

const output = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
console.log(output);
