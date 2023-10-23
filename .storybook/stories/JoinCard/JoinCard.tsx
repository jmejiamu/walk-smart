import React from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';
import { styles } from "./styles";
interface Props {
  bage?: React.ReactNode;
  isLive?: boolean;
  title: string;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
  joinedDate: any;
  joined: number;
  likes: number;
  footerStyle?: ViewStyle;
}

const JoinCard = (props: Props) => {
  const {
    bage,
    title = 'Event Name',
    titleStyle,
    isLive = false,
    containerStyle,
    joinedDate,
    likes = 0,
    joined = 0,
    footerStyle,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.headerContainer]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        {isLive && bage}
      </View>
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
