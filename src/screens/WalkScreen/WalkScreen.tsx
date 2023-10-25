import React, { useEffect, useRef } from 'react';
import { AppState, View } from 'react-native';
import { Marker } from 'react-native-maps';
import Map from '../../../.storybook/stories/Map/Map';
import { usePermission } from '../../hook/usePermission';
import { useGeoLocation } from '../../hook/useGeoLocation';
import AddEventBtn from '../../../.storybook/stories/AddEventBtn/AddEventBtn';
import BottomSheetComponent from '../../../.storybook/stories/BottomSheet/BottomSheetComponent';
import { BottomSheetMethods } from '@devvie/bottom-sheet';
interface MapLocationsEvents {
	latitude: number;
	longitude: number;
	eventTitle: string;
	eventDescription: string
}

const WalkScreen = () => {

	const { checkMapPermissions } = usePermission()
	const { location } = useGeoLocation()
	const ref = useRef<BottomSheetMethods>(null)

	const onHandleOpen = () => {
		ref.current?.open()
	}

	const onHandleClose = () => {
		ref.current?.close()
	}
	
	useEffect(() => {
		AppState.addEventListener('change', state => {
			if (state !== 'active') return
			checkMapPermissions();
		})
	}, [])

	// NOTE: This is a test events
	const eventsList: MapLocationsEvents[] = [
		{ latitude: 37.7939, longitude: -122.3970, eventTitle: 'Best place', eventDescription: 'Hello this is a greate place 123' },
		{ latitude: 37.7916, longitude: -122.3966, eventTitle: 'Visit us', eventDescription: 'Join our reading Walk event' },
		{ latitude: 37.7921, longitude: -122.3958, eventTitle: 'Visit test', eventDescription: 'Join our reading Walk event 43434' },
		{ latitude: 37.7934, longitude: -122.3988, eventTitle: 'THIS IS A TEST', eventDescription: 'THIS IS EVENTENT DEV HELLO WORLD' }
	]

	return (
		<View style={{ flex: 1 }}>
			<Map
				latitude={location.Latitude}
				longitude={location.Longitude}
			>
				{
					eventsList.map((event, i) => {
						return (
							<Marker
								key={i}
								coordinate={{
									latitude: event.latitude,
									longitude: event.longitude
								}}
								title={event.eventTitle}
								description={event.eventDescription}
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
				textDescriptionInputProps={{placeholder:'Short Description'}}
			/>
		</View>
	)
};

export default WalkScreen;
