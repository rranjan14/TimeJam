import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {colors} from '../../lib/colors';
import {scaleFontSize} from '../../lib/utils';

const styles = (_height: number, _width: number, insets: EdgeInsets) =>
  StyleSheet.create({
    parent: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: colors.background,

      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    filterContainer: {
      flex: 0.1,
      width: '100%',
    },
    listContainer: {
      flex: 0.9,
      width: '100%',
    },
    sectionList: {width: '100%'},
    sectionHeader: {
      backgroundColor: colors.darkBackground,
      padding: 10,
    },
    sectionHeaderText: {
      fontSize: scaleFontSize(14),
      fontWeight: '600',
      color: colors.text1,
    },
  });

export default styles;
