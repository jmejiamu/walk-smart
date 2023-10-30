import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color_200,
  },
  bottomContainer: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  bottomInnerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  doYouHaveAccount: {
    marginTop: 10,
    color: colors.color_600,
  },
  input: {
    color: colors.color_600,
    paddingLeft: 10,
  },
  logo: {
    marginTop: height * 0.2,
    marginBottom: 60,
    textAlign: 'center',
    fontSize: 40,
  },
});

export default styles;
