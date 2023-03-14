const objectToStyle = (styleObject) => {
  let styleString = "";
  Object.keys(styleObject).forEach((key) => {
    styleString += key + ": " + styleObject[key] + "; ";
  });
  return styleString;
};

module.exports = objectToStyle;
