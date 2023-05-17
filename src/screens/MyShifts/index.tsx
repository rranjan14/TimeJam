import React from 'react';
import {SectionList, View, useWindowDimensions, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppSelector} from '../../store';
import {selectBookedShifts} from '../../store/shifts';
import useShifts from '../../hooks/useShifts';
import importedStyles from './styles';
import BookedShiftItem from '../../components/BookedShiftItem';

function MyShifts() {
  const insets = useSafeAreaInsets();
  const {height, width} = useWindowDimensions();
  const bookedShifts = useAppSelector(selectBookedShifts);
  const {groupedShifts, cancelShift, bookShift} = useShifts({
    shifts: bookedShifts,
    selectedArea: 'All',
  });

  const styles = importedStyles(height, width, insets);

  return (
    <View style={styles.parent}>
      <SectionList
        sections={groupedShifts}
        keyExtractor={(item) => item.id}
        style={styles.sectionList}
        renderItem={({item}) => (
          <BookedShiftItem
            height={height}
            width={width}
            shift={item}
            onBookingClick={bookShift}
            onCancelClick={cancelShift}
          />
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default MyShifts;
