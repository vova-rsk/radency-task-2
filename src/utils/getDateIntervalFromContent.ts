// const REGEX = /(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}/g; !!!!!!!!!

// const REGEX = /(3[01]|2[0-9]|1[0-9]|0[1-9]|[1-9])\/(1[0-2]|0[1-9]|[1-9])\/[1-9][0-9]{3}/g;

const REGEX =
  /([1-9]|0[1-9]|1[0-9]|2[0-9]|3[01])\/([1-9]|0[1-9]|1[0-2])\/[1-9][0-9]{3}/g;

export default function getDateIntervalFromContent(text:string) {
  const result = text.match(REGEX);

  return result ? [result[0], result[1]] : null;
}
