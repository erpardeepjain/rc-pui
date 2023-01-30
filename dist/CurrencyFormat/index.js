import React from 'react';
const CurrencyFormat = ({
  value,
  prefix,
  zeroAllowed = true,
  noSpan,
  onlyComma,
  eleClass
}) => {
  const commaSeprator = num => zeroAllowed ? num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : num ? num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : "N/A";
  const commaSepratorWithRoundOff = num => zeroAllowed ? Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : Number(num).toFixed(2) ? Number(num).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : "N/A";
  const returnValue = noSpan ? `${prefix || ""}${onlyComma ? commaSeprator(value) : commaSepratorWithRoundOff(value)}` : /*#__PURE__*/React.createElement("span", {
    className: eleClass
  }, prefix || "", onlyComma ? commaSeprator(value) : commaSepratorWithRoundOff(value));
  return returnValue;
};
export default CurrencyFormat;