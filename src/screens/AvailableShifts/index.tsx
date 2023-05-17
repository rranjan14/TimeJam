import React, {useState} from 'react';
import {View, useWindowDimensions, FlatList, SectionList, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppSelector} from '../../store';
import useShifts from '../../hooks/useShifts';
import importedStyles from './styles';
import FilterChip from '../../components/FilterChip';
import {selectBookedShifts} from '../../store/shifts';
import AvailableShiftItem from '../../components/AvailableShiftItem';
import {checkOverlap} from '../../lib/utils';

function AvailableShifts() {
  const insets = useSafeAreaInsets();
  const {height, width} = useWindowDimensions();
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const availableShifts = useAppSelector((state) => state.shifts.shifts);
  const bookedShifts = useAppSelector(selectBookedShifts);
  const {groupedShifts, bookShift, cancelShift, shiftsGroupedByArea} = useShifts({
    shifts: availableShifts,
    selectedArea,
  });

  const styles = importedStyles(height, width, insets);

  const onFilterChipPress = (area: string) => {
    setSelectedArea(area);
  };

  return (
    <View style={styles.parent}>
      <View style={styles.filterContainer}>
        <FlatList
          data={shiftsGroupedByArea}
          horizontal
          contentContainerStyle={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <FilterChip
              title={item.title}
              count={item.count}
              height={height}
              width={width}
              selected={selectedArea === item.title}
              onPress={onFilterChipPress}
            />
          )}
        />
      </View>
      <View style={styles.listContainer}>
        <SectionList
          sections={groupedShifts}
          keyExtractor={(item) => item.id}
          style={styles.sectionList}
          renderItem={({item}) => (
            <AvailableShiftItem
              height={height}
              width={width}
              shift={item}
              onBookingClick={bookShift}
              onCancelClick={cancelShift}
              overlapping={checkOverlap(bookedShifts, item)}
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
    </View>
  );
}

export default AvailableShifts;
