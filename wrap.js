const wrap = (line, maxLen) => {
  let endingIndex = maxLen;
  let firstLine = line.slice(0, endingIndex);
  if (line.length < maxLen) {
    return line;
  }
  if (line[maxLen] !== " ") {
    if (firstLine.lastIndexOf(" ") === -1) {
      throw "MaxLen must be longer than each word in line"
    }
    endingIndex = firstLine.lastIndexOf(" ");
    firstLine = line.slice(0, endingIndex) + "\n";
  }
  const restOfLine = line.slice(endingIndex + 1);
  return firstLine + wrap(restOfLine, maxLen);
};

module.exports = wrap;
