import React, { useEffect } from 'react';
import { Text, AppState, } from 'react-native';
import Map from '../../../.storybook/stories/Map/Map';
import { usePermission } from '../../hook/usePermission';

const WalkScreen = () => {

  const { permission, checkMapPermissions } = usePermission()

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') return
      checkMapPermissions();
    })
  }, [])

  if (permission.locationStatus === 'blocked' || permission.locationStatus === 'denied') {
    return <Text> unable to open </Text>
  }

  return (
    <>
      <Map></Map>
    </>
  )

};

export default WalkScreen;
