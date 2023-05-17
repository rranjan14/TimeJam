import {StyleSheet} from 'react-native';
import {colors} from '../../lib/colors';
import {scaleFontSize} from '../../lib/utils';

const styles = (height: number, width: number, booked: boolean) =>
  StyleSheet.create({
    parent: {
      flex: 1,
      height: 100,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: height * 0.01,
      paddingHorizontal: width * 0.01,
      marginBottom: 1,
      borderBottomWidth: 1,
      borderBottomColor: colors.subText2,
    },
    detailsContainer: {
      flex: 0.35,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    statusContainer: {
      flex: 0.3,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionItemContainer: {
      flex: 0.35,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
    },
    timeSloteText: {
      color: colors.text1,
      fontSize: scaleFontSize(13),
      textAlignVertical: 'center',
    },
    areaText: {
      color: colors.subText1,
      fontSize: scaleFontSize(11),
      textAlignVertical: 'center',
    },
    button: {
      borderWidth: 1,
      borderRadius: 25,
      borderColor: booked ? colors.text2 : colors.buttonText2,
      paddingHorizontal: width * 0.08,
      paddingVertical: width * 0.02,
    },
    buttonText: {
      color: booked ? colors.text2 : colors.buttonText2,
      fontSize: scaleFontSize(12),
    },
  });

export default styles;
