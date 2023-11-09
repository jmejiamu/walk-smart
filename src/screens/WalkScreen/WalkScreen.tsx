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
import { Events } from '../../interface/models';

const WalkScreen = () => {


	const { checkMapPermissions } = usePermission()

	const { data, fetcheer } = useFetch<Events>({
		error: true,
		message: '',
		events: []
	});

	const { location } = useGeoLocation()
	const ref = useRef<BottomSheetMethods>(null)

	const onHandleOpen = () => {
		ref.current?.open()
	}

	const onHandleClose = () => {
		ref.current?.close()
	}

	useEffect(()=>{
		fetcheer('http://localhost:8080/api-v1/events/all')
	},[])

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
					data.events.map((event, i) => {
						return (
							<Marker
								key={i}
								coordinate={{
									latitude: event.latitude,
									longitude: event.longitude
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
				textInputProps={{ placeholder: 'Event name' }}
				textDescriptionInputProps={{ placeholder: 'Short Description' }}
			/>
		</View>
	)
};

export default WalkScreen;
