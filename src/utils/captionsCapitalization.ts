import { TABLE_TYPE } from './constants';

type capitalizationFn = (list: string[], type: string) => string[];

const captionsCapitalization:capitalizationFn = (captionList, tableType) => {
  if (!captionList) {
    return [];
  }

  return captionList.map(caption => {
    if (tableType === TABLE_TYPE.SUMMARY && caption === 'category') {
      caption = 'note category';
    }

    const capitalizedCaptionList = caption
      .split(' ')
      .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(' ');

    return capitalizedCaptionList;
  });
 }

export default captionsCapitalization;