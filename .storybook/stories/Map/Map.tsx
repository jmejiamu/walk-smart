import React from "react";
import { Platform, SafeAreaView, ViewStyle } from "react-native"
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";
import { styles } from "./styles";

interface Props {
    latitude: number,
    longitude: number
    mapContainerStyle?: ViewStyle;
    mapStyle?: ViewStyle;
    children?: React.ReactNode;
}

const Map = (props: Props) => {
    return (
        <SafeAreaView style={[styles.container, props.mapContainerStyle]}>
            <MapView
                showsUserLocation
                provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                style={[styles.map, props.mapStyle]}
                region={{
                    latitude: props.latitude,
                    longitude: props.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                {props.children}
            </MapView>
        </SafeAreaView>
    )
}

export default Map;
