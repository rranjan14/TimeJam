import {useCallback, useMemo} from 'react';
import {Shift} from '../lib/types';
import {useAppDispatch} from '../store';
import * as shiftActions from '../store/shifts';

type UseShiftProps = {
  shifts: Shift[];
  selectedArea: string;
};

export default function useShifts({shifts, selectedArea}: UseShiftProps) {
  const dispatch = useAppDispatch();

  const groupedShifts = useMemo(() => {
    const groups: Record<string, Shift[]> = {};
    const finalArray: {title: string; data: Shift[]}[] = [];
    let shiftsToGroup;
    if (selectedArea === 'All') {
      shiftsToGroup = shifts;
    } else {
      shiftsToGroup = shifts.filter((shift) => shift.area === selectedArea);
    }
    shiftsToGroup.forEach((shift) => {
      const date = new Date(shift.startTime).toDateString();
      if (date in groups) {
        groups[date].push(shift);
      } else {
        groups[date] = new Array(shift);
      }
    });
    Object.keys(groups).forEach((group) => {
      finalArray.push({title: group, data: groups[group]});
    });
    return finalArray;
  }, [shifts, selectedArea]);

  const bookShift = useCallback(
    (shiftId: string) => {
      dispatch(shiftActions.bookShift(shiftId));
    },
    [dispatch],
  );

  const cancelShift = useCallback(
    (shiftId: string) => {
      dispatch(shiftActions.cancelShift(shiftId));
    },
    [dispatch],
  );

  const shiftsGroupedByArea = useMemo(() => {
    const areaMap = shifts.reduce((map, shift) => {
      map.set(shift.area, (map.get(shift.area) || 0) + 1);
      return map;
    }, new Map<string, number>());
    const areaArray = Array.from(areaMap, ([title, count]) => ({
      title,
      count,
    }));
    areaArray.unshift({
      count: areaArray.reduce((sum, item) => sum + item.count, 0),
      title: 'All',
    });
    return areaArray;
  }, [shifts]);

  return {
    groupedShifts,
    bookShift,
    cancelShift,
    shiftsGroupedByArea,
  };
}
