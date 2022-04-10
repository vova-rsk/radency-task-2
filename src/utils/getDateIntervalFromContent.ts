const REGEX =
  /([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1]?)\/([1-9]|0[1-9]|1[0-2]?)\/[1-9][0-9]{3}/g;

const getDateIntervalFromContent = (text:string) => {
  const result = text.match(REGEX);

  return result ? [result[0], result[1]] : null;
};

export default getDateIntervalFromContent;