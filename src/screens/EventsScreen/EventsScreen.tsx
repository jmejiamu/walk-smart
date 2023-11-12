import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import ListCard from '../../../.storybook/stories/ListCard/ListCard';
import Search from '../../../.storybook/stories/Search/Search';
import { Event, Events } from '../../interface/models';
import { useFetch } from '../../hook/useFetch';

interface Props extends Event {
	searchEvent: string;
}

const CardEventRender = ({ event_title, time_stamp, event_id }: Event) => {
	return (
		<View>
			<View style={{ marginTop: 10 }} />
			<ListCard key={event_id} EventName={event_title} Date={time_stamp?.toString()} />
		</View>
	)
}

const SearchEventRender = ({ searchEvent, event_title, time_stamp, event_id }: Props) => {

	if (event_title?.toUpperCase().includes(searchEvent.toLocaleUpperCase())) {
		return (
			<>
				<CardEventRender key={event_id} event_title={event_title} time_stamp={time_stamp} />
			</>
		)
	}
	if (time_stamp?.toString().includes(searchEvent)) {
		return (
			<>
				<CardEventRender key={event_id} event_title={event_title} time_stamp={time_stamp} />
			</>
		)
	}

}

const EventsScreen = () => {

	const [search, setSearch] = useState("")
	const { data, fetcheer } = useFetch<Events>({
		error: true,
		message: '',
		events: []
	})

	useEffect(() => {
		fetcheer('http://localhost:8080/api-v1/events/all')
	}, [])

	return (
		<SafeAreaView>
			<View style={{ marginHorizontal: 20, marginTop: 20 }}>
				<Search textValue={search} action={setSearch} container={{ marginBottom: 10 }} />

				{

					search.length > 0 ?
						<FlatList
							data={data.events}
							showsVerticalScrollIndicator={false}
							renderItem={({ item }) => <SearchEventRender
								event_id={item.event_id}
								searchEvent={search}
								event_title={item.event_title}
								time_stamp={item.time_stamp}
							/>}
							keyExtractor={item => item.event_id ?? 'unknown'}
						/>
						:
						<FlatList
							data={data.events}
							showsVerticalScrollIndicator={false}
							renderItem={({ item }) => <CardEventRender
								event_id={item.event_id}
								event_title={item.event_title}
								time_stamp={item.time_stamp}
							/>}
							keyExtractor={item => item.event_id ?? 'unknown'}
						/>
				}
			</View>
		</SafeAreaView>
	);
};

export default EventsScreen;
