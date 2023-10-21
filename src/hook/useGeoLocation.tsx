import { useEffect, useState } from "react"
import GeoLocation from '@react-native-community/geolocation'

interface Locations {
    Latitude: number;
    Longitude: number;
}

export const useGeoLocation = () => {
    const [location, setLocation] = useState<Locations>({
        Latitude: 0,
        Longitude: 0,
    })

    useEffect(() => {
        GeoLocation.getCurrentPosition(
            ({ coords }) => {
                setLocation({
                    Latitude: coords.latitude,
                    Longitude: coords.longitude
                })
            },
            err => console.log(err),
            {
                enableHighAccuracy: true
            }
        )
    }, [])

    return {
        location
    }
}