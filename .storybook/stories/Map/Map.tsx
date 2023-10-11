import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native"
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
    return (
        <SafeAreaView style={styles.container}>
            <MapView
                provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                style={styles.map}
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
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});
