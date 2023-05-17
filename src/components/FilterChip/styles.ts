import {StyleSheet} from 'react-native';
import {colors} from '../../lib/colors';
import {scaleFontSize} from '../../lib/utils';

const styles = (height: number, width: number, selected: boolean) =>
  StyleSheet.create({
    parent: {
      height: 40,
      width: width * 0.3,
      borderWidth: 1,
      borderColor: selected ? colors.text1 : colors.text3,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 3,
      backgroundColor: selected ? colors.text1 : 'white',
    },
    buttonText: {
      color: selected ? 'white' : colors.text1,
      fontSize: scaleFontSize(13),
    },
  });

export default styles;
