import React, {PropsWithChildren} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Shift} from '../../lib/types';
import importedStyles from './styles';
import {getFormattedTime} from '../../lib/utils';
import {colors} from '../../lib/colors';

type AvailableShiftItemProps = {
  shift: Shift;
  height: number;
  width: number;
  onBookingClick: (id: string) => void;
  onCancelClick: (id: string) => void;
  overlapping: boolean;
};

const AvailableShiftItem: React.FC<PropsWithChildren<AvailableShiftItemProps>> = React.memo(
  ({
    height,
    width,
    shift,
    onBookingClick,
    onCancelClick,
    overlapping,
  }: PropsWithChildren<AvailableShiftItemProps>) => {
    const styles = importedStyles(height, width, shift.booked);
    const disabled = shift.booked
      ? shift.startTime < Date.now()
      : overlapping || shift.startTime < Date.now();
    return (
      <View style={styles.parent}>
        <View style={styles.detailsContainer}>
          <Text style={styles.timeSloteText}>
            {getFormattedTime(shift.startTime)}-{getFormattedTime(shift.endTime)}
          </Text>
        </View>
        <View>
          {shift.booked ? (
            <Text style={styles.timeSloteText}>Booked</Text>
          ) : overlapping ? (
            <Text style={[styles.timeSloteText, {color: colors.text2}]}>Overlapping</Text>
          ) : null}
        </View>
        <View style={styles.actionItemContainer}>
          <TouchableOpacity
            style={[styles.button, disabled && {borderColor: colors.gray}]}
            disabled={disabled}
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

export default AvailableShiftItem;
