import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
import ListCard from '../../../.storybook/stories/ListCard/ListCard';
import Search from '../../../.storybook/stories/Search/Search';
import { EventCtx } from '../../Context/EventContext';
import { Navigation } from '../../Main/Main';
import useDateFormat from '../../hook/useDateFormat';
import { Event } from '../../interface/models';

interface SearchProps extends Event {
	searchEvent: string;
}

const CardEventRender = ({ event_title, time_stamp = '', event_id = '' }: Event) => {
	const { formater } = useDateFormat()

	const nav = useNavigation<Navigation>()

	return (
		<View>
			<TouchableOpacity activeOpacity={0.7} onPress={() => nav.navigate('Event', { event_id })}>
				<View style={{ marginTop: 10 }} />
				<ListCard key={event_id} EventName={event_title} Date={formater(time_stamp, { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit' })} />
			</TouchableOpacity>
		</View>
	)
}

const SearchEventRender = ({ searchEvent, event_title, time_stamp, event_id }: SearchProps) => {

	if (event_title?.toUpperCase().includes(searchEvent.toUpperCase())) {

		return (
			<>
				<CardEventRender key={event_id} event_title={event_title} time_stamp={time_stamp} />
			</>
		)
	}

}

const EventsScreen = () => {

	const [search, setSearch] = useState("")
	const { events, getAllEvents } = useContext(EventCtx)

	useEffect(() => {
		getAllEvents()
	}, [])

	return (
		<SafeAreaView>
			<View style={{ marginHorizontal: 20, marginTop: 20 }}>
				<Search textValue={search} action={setSearch} container={{ marginBottom: 10 }} />

				{

					search.length > 0 ?
						<FlatList
							data={events.events}
							showsVerticalScrollIndicator={false}
							renderItem={({ item }) => <SearchEventRender
								event_id={item.event_id}
								searchEvent={search}
								event_title={item.event_title}
								time_stamp={item.time_stamp} />}
							keyExtractor={item => item.event_id ?? 'unknown'}
						/>
						:
						<FlatList
							data={events.events}
							showsVerticalScrollIndicator={false}
							renderItem={({ item }) => <CardEventRender
								event_id={item.event_id}
								event_title={item.event_title}
								time_stamp={item.time_stamp}  />}
							keyExtractor={item => item.event_id ?? 'unknown'}
						/>
				}
			</View>
		</SafeAreaView>
	);
};

export default EventsScreen;
