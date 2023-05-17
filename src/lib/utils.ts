import {Dimensions, PixelRatio} from 'react-native';
import {Shift} from './types';

export const getFormattedTime = (timestamp: number) =>
  new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(timestamp);

export const scaleFontSize = (fontSize: number) => {
  const {width, height} = Dimensions.get('window');
  const scaleFactor = width > height ? height / 680 : width / 320;

  const scaledFontSize = fontSize * scaleFactor;
  const scaledPixelFontSize = PixelRatio.roundToNearestPixel(scaledFontSize);

  return scaledPixelFontSize;
};

export const checkOverlap = (bookedShifts: Shift[], shiftToBeChecked: Shift) =>
  bookedShifts.some((shift) => {
    const maxStart = Math.max(shift.startTime, shiftToBeChecked.startTime);
    const minEnd = Math.min(shift.endTime, shiftToBeChecked.endTime);
    if (shiftToBeChecked.area === shift.area && maxStart < minEnd) {
      return true;
    }
    return false;
  });
