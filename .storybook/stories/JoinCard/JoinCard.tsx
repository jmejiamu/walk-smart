import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { styles  } from "./styles";
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
