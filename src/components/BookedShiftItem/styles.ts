import {StyleSheet} from 'react-native';
import {colors} from '../../lib/colors';
import {scaleFontSize} from '../../lib/utils';

const styles = (height: number, width: number, booked: boolean) =>
  StyleSheet.create({
    parent: {
      height: 100,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: height * 0.01,
      paddingHorizontal: width * 0.05,
      marginBottom: 1,
      borderBottomWidth: 1,
      borderBottomColor: colors.subText2,
    },
    detailsContainer: {
      flex: 0.6,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    actionItemContainer: {
      flex: 0.4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    timeSloteText: {
      color: colors.text1,
      fontSize: scaleFontSize(15),
      textAlignVertical: 'center',
    },
    areaText: {
      color: colors.subText1,
      fontSize: scaleFontSize(13),
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
      fontSize: scaleFontSize(14),
    },
  });

export default styles;
