import React, {useContext, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {EventCtx} from '../../../Context/EventContext';
import Card from '../Card/Card';
import {styles} from './styles';

const EventScreens = () => {
  const {auth, myEvents, getMyEvents} = useContext(EventCtx);

  useEffect(() => {
    getMyEvents(auth.record.user_id);
  }, []);

  if (myEvents?.myEvents?.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          You have not created an event yet 😊
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatListStyle}
        data={myEvents?.myEvents}
        renderItem={({item}) => <Card data={item} />}
        keyExtractor={item => item.event_id ?? 'unknow'}
      />
    </View>
  );
};

export default EventScreens;
