const wrap = (line, maxLen) => {
  let endingIndex = maxLen;
  let firstLine = line.slice(0, endingIndex);
  if (line.length < maxLen) {
    return line;
  }
  if (line[maxLen] !== " ") {
    endingIndex = firstLine.lastIndexOf(" ");
    firstLine = line.slice(0, endingIndex) + "\n";
  }
  const restOfLine = line.slice(endingIndex + 1);
  console.log(firstLine);
  console.log(restOfLine);
  return firstLine + wrap(restOfLine, maxLen);
};

module.exports = wrap;
