import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {colors, spacing} from '../../../src/theme';

interface Props {
  title: string;
  containerStyle?: ViewStyle;
  joinedDate: any;
  joined: number;
  likes: number;
  footerStyle?: ViewStyle;
}

const JoinCard = (props: Props) => {
  const {
    title = 'Event Name',
    containerStyle,
    joinedDate,
    likes = 0,
    joined = 0,
    footerStyle,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.footerContainer, footerStyle]}>
        <Text style={styles.footerText}>
          Joined {joined} • Likes {likes}
        </Text>
        <Text style={styles.footerText}>{joinedDate}</Text>
      </View>
    </View>
  );
};

export default JoinCard;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  container: {
    borderWidth: 1,
    borderColor: colors.color_400,
    padding: spacing.size_medium,
    borderRadius: 20,
  },
  title: {
    fontSize: 36,
    color: colors.color_200,
  },
  footerText: {
    fontSize: 17,
    color: colors.color_400,
    fontWeight: 'bold',
  },
});
