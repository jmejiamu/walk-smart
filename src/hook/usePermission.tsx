import { useState } from "react"
import { Platform } from "react-native";
import { PERMISSIONS, PermissionStatus, check, request, openSettings, RESULTS } from "react-native-permissions";

// React Native library documentation > https://github.com/react-native-maps/react-native-maps
interface PermissionState {
    locationStatus: PermissionStatus
}

// This function open device setting to allow permission to share location with Walk Smart
const OpenSettingAppDevice = (permissionStatus: PermissionStatus) => {
    
    if (permissionStatus === RESULTS.BLOCKED || permissionStatus === RESULTS.DENIED) {
        openSettings().catch(()=> console.error('error opening divice settings'))
    }
}

export const usePermission = () => {

    const permissionsInitState: PermissionState = {
        locationStatus: 'unavailable'
    }

    const [permission, setPermission] = useState(permissionsInitState)
    
    // askMapPermission is not used, but this can be use for new screens.
    const askMapPermissions = async () => {

        let pemissionsStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            pemissionsStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            pemissionsStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }

        setPermission({
            ...permission,
            locationStatus: pemissionsStatus
        })
    }


    const checkMapPermissions = async () => {

        let pemissionsStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            pemissionsStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            pemissionsStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }
        setPermission({

            ...permission,
            locationStatus: pemissionsStatus
        })
    }

    return {
        permission,
        askMapPermissions,
        checkMapPermissions
    }

}