import React from "react";
import { Platform, SafeAreaView, ViewStyle } from "react-native"
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";
import { styles } from "./styles";

interface Props {
    mapContainerStyle?: ViewStyle;
    mapStyle?: ViewStyle;
}

const Map = (props: Props) => {
    return (
        <SafeAreaView style={[styles.container, props.mapContainerStyle]}>
            <MapView
                provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                style={[styles.map, props.mapStyle]}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </SafeAreaView>
    )
}

export default Map;
