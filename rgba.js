module.exports = (hexColor, alpha) => {
  let hexData = hexColor.split("");
  if (hexData.length === 4) {
    hexData = hexData.reduce((acc, cur) => {
      if (cur === "#") {
        return [...acc, cur];
      } else {
        return [...acc, cur, cur];
      }
    }, []);
  }
  const rgbData = [];
  let i = 1;
  while (i < hexData.length) {
    const num = parseInt(`0x${hexData[i]}${hexData[i + 1]}`);
    rgbData.push(num);
    i = i + 2;
  }

  if (alpha) {
    return `rgba(${rgbData[0]}, ${rgbData[1]}, ${rgbData[2]}, ${alpha})`;
  }
  return `rgb(${rgbData[0]}, ${rgbData[1]}, ${rgbData[2]})`;
};
