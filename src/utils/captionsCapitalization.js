import { TABLE_TYPE } from './constants';

export default function captionsCapitalization(captionList, tableType) {
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
