import React, { useEffect, useRef } from 'react';
import { AppState, View } from 'react-native';
import { Marker } from 'react-native-maps';
import Map from '../../../.storybook/stories/Map/Map';
import { usePermission } from '../../hook/usePermission';
import { useGeoLocation } from '../../hook/useGeoLocation';
import AddEventBtn from '../../../.storybook/stories/AddEventBtn/AddEventBtn';
import BottomSheetComponent from '../../../.storybook/stories/BottomSheet/BottomSheetComponent';
import { BottomSheetMethods } from '@devvie/bottom-sheet';
import { useFetch } from '../../hook/useFetch';
import { Event, Events } from '../../interface/models';
import { useForm } from '../../hook/useForm';

const WalkScreen = () => {


	const { checkMapPermissions } = usePermission()

	const { data, fetcheer } = useFetch<Events>({
		error: true,
		message: '',
		events: []
	});

	const { location } = useGeoLocation()

	const { form, onChange } = useForm<Event>({
		user_id: 'a058bb5a-fe79-46d4-9d1c-7ec5a8773c91', // this will replace when user login or register 
		event_title: '',
		event_description: '',
		latitude: 0,
		longitude: 0,
		time_stamp: ''
	})

	const ref = useRef<BottomSheetMethods>(null)

	const onHandleOpen = () => {
		ref.current?.open()
	}

	const onHandleClose = () => {

		const bodyRequest = { ...form, latitude: location.Latitude, longitude: location.Longitude }

		fetcheer('http://localhost:8080/api-v1/events', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Cache-control': 'no-cache'
			},
			body: JSON.stringify(bodyRequest)
		})
		ref.current?.close()
	}


	useEffect(() => {
		fetcheer('http://localhost:8080/api-v1/events/all')
	}, [])

	useEffect(() => {
		AppState.addEventListener('change', state => {
			if (state !== 'active') return
			checkMapPermissions();
		})

	}, [])


	return (
		<View style={{ flex: 1 }}>
			<Map
				latitude={location.Latitude}
				longitude={location.Longitude}
			>
				{
					data.events &&
					data.events.map((event, i) => {
						return (
							<Marker
								key={i}
								coordinate={{
									latitude: event.latitude || 0,
									longitude: event.longitude || 0,
								}}
								title={event.event_title}
								description={event.event_description}
							/>
						)
					})
				}
			</Map>
			<AddEventBtn
				action={onHandleOpen}
				btnOpacity={0.9}
				btnStyle={{
					position: 'absolute',
					bottom: 65,
					right: 30,
					height: 60,
					width: 60,
				}}
			/>
			<BottomSheetComponent
				header="Add Event"
				onHandleClose={onHandleClose}
				sheetRef={ref}
				footer="Everyone near you can be part of your event, have fun!"
				textInputProps={{
					placeholder: 'Event name',
					onChangeText: value => onChange(value, 'event_title')
				}}
				textDescriptionInputProps={{
					placeholder: 'Short Description',
					onChangeText: value => onChange(value, 'event_description')
				}}
			/>
		</View>
	)
};

export default WalkScreen;
