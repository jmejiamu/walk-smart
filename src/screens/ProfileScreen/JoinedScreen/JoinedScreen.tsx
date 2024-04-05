import React, {useContext, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {EventCtx} from '../../../Context/EventContext';
import Card from '../Card/Card';
import {styles} from './styles';

const JoinedScreen = () => {
  const {auth, joinedEvents, getJoinedEvents} = useContext(EventCtx);

  useEffect(() => {
    getJoinedEvents(auth.record.user_id);
  }, []);

  if (joinedEvents?.events?.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          You have not joined an event yet 😊
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.listContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatListStyle}
        data={joinedEvents?.events}
        renderItem={({item}) => <Card data={item} />}
        keyExtractor={item => item.event_id ?? 'unknow'}
      />
    </View>
  );
};

export default JoinedScreen;
