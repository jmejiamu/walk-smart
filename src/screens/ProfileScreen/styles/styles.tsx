import {StyleSheet} from 'react-native';
import {spacing} from '../../../theme/spacing';

export const styles = StyleSheet.create({
  buttonProfile: {
    padding: 8,
    marginHorizontal: spacing.size_large,
    borderRadius: 29,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#fff',
  },
  userContainer: {
    alignItems: 'center',
    marginVertical: spacing.size_small,
  },
  userText: {
    padding: 5,
    color: '#000',
  },
});
