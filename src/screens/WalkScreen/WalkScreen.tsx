import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppState, Text, View } from 'react-native';
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
import { EventCtx } from '../../Context/EventContext';
import Alert from '../../../.storybook/stories/Alert/Alert';
import { colors } from '../../theme';

const WalkScreen = () => {

	const { auth } = useContext(EventCtx)
	const [isEmpty, setEmpty] = useState(false)
	const { checkMapPermissions } = usePermission()

	const { data, fetcheer } = useFetch<Events>({
		error: true,
		message: '',
		events: []
	});

	const { location } = useGeoLocation()

	const { form, onChange, checkEmptyField } = useForm<Event>({
		user_id: auth.record.user_id,
		event_title: '',
		event_description: '',
		latitude: 0,
		longitude: 0,
	})

	const ref = useRef<BottomSheetMethods>(null)

	const onHandleOpen = () => {
		ref.current?.open()
	}

	const onHandleClose = () => {

		const bodyRequest = { ...form, latitude: location.Latitude, longitude: location.Longitude }
		console.log("=> ", bodyRequest);
		
		if (!checkEmptyField(bodyRequest)) {
			fetcheer('http://localhost:8080/api-v1/events', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Cache-control': 'no-cache'
				},
				body: JSON.stringify(bodyRequest)
			})
			setEmpty(false)
			ref.current?.close()
		}
		setEmpty(true)
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
				footer={
					<>
						<View style={{ height: 110, top: 10 }}>
							{isEmpty && <Alert
								ContainerStyle={{ backgroundColor: colors.color_200 }}
								TextStyle={{ color: colors.color_600 }}
								Message='Requiered Field to create an event' />
							}
							<View style={{ flex: 1, justifyContent: 'flex-end' }}>
								<Text>  Everyone near you can be part of your event, have fun! </Text>
							</View>
						</View>
					</>
				}
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
