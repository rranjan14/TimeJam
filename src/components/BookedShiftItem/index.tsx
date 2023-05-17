import React, {PropsWithChildren} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Shift} from '../../lib/types';
import importedStyles from './styles';
import {getFormattedTime} from '../../lib/utils';
import {colors} from '../../lib/colors';

type BookedShiftItemProps = {
  shift: Shift;
  height: number;
  width: number;
  onBookingClick: (id: string) => void;
  onCancelClick: (id: string) => void;
};

const BookedShiftItem: React.FC<PropsWithChildren<BookedShiftItemProps>> = React.memo(
  ({
    height,
    width,
    shift,
    onBookingClick,
    onCancelClick,
  }: PropsWithChildren<BookedShiftItemProps>) => {
    const styles = importedStyles(height, width, shift.booked);
    const disabled = shift.startTime <= Date.now();
    return (
      <View style={styles.parent}>
        <View style={styles.detailsContainer}>
          <Text style={styles.timeSloteText}>
            {getFormattedTime(shift.startTime)}-{getFormattedTime(shift.endTime)}
          </Text>
          <Text style={styles.areaText}>{shift.area}</Text>
        </View>
        <View style={styles.actionItemContainer}>
          <TouchableOpacity
            disabled={disabled}
            style={[styles.button, disabled && {borderColor: colors.gray}]}
            onPress={() => (shift.booked ? onCancelClick(shift.id) : onBookingClick(shift.id))}
          >
            <Text style={[styles.buttonText, disabled && {color: colors.gray}]}>
              {shift.booked ? 'Cancel' : 'Book'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

export default BookedShiftItem;
