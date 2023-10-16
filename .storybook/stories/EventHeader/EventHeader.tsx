import React from 'react';
import {
  View,
  Text,
  ImageBackground,
} from 'react-native';
import { styles } from "./styles";
interface Props {
  eventName: string;
  badge: JSX.Element;
  imageUrl: string;
}

const EventHeader = (props: Props) => {
  const {eventName, badge, imageUrl} = props;
  return (
    <View>
      <ImageBackground
        imageStyle={styles.bckImage}
        style={styles.image}
        source={{uri: imageUrl}}>
        <View style={styles.rightElemContainer}>
          <>{badge}</>
        </View>
        <View style={styles.eventNameContainer}>
          <Text style={styles.eventName}>{eventName}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default EventHeader;
