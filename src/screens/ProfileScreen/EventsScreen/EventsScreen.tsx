import {useContext, useEffect} from 'react';
import {FlatList, Platform, View} from 'react-native';
import Card from '../Card/Card';
import React from 'react';
import {EventCtx} from '../../../Context/EventContext';

const EventScreens = () => {
  const {auth, myEvents, getMyEvents} = useContext(EventCtx);

  useEffect(() => {
    getMyEvents(auth.record.user_id);
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginBottom: Platform.OS === 'android' ? 40 : 50}}
        data={myEvents?.myEvents}
        renderItem={({item}) => <Card data={item} />}
        keyExtractor={item => item.event_id ?? 'unknow'}
      />
    </View>
  );
};

export default EventScreens;
