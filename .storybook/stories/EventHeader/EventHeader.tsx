import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {colors} from '../../../src/theme';

const {height} = Dimensions.get('screen');

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

const styles = StyleSheet.create({
  rightElemContainer: {
    flexDirection: 'row-reverse',
  },
  bckImage: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  image: {
    height: height * 0.46,
    padding: 20,
  },
  eventNameContainer: {
    marginTop: height * 0.3,
  },
  eventName: {
    fontSize: 45,
    justifyContent: 'flex-end',
    color: colors.color_500,
  },
});
