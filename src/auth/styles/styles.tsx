import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme';

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color_200,
  },
  bottomContainer: {
    top: 10,
    marginHorizontal: 10,
  },
  bottomInnerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  doYouHaveAccount: {
    color: colors.color_600,
  },
  input: {
    color: colors.color_600,
    paddingLeft: 10,
 },
  logContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    backgroundColor: colors.color_100,
    borderRadius: 50,
    marginTop: height * 0.1,
    height: 100,
    width: 100,

    marginBottom: 30,
  },
});

export default styles;
