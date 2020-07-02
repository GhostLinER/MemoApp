import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

const Cameras = ({ navigation }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    useEffect(() => {
        console.log("Here");
        (async () => {
            console.log("In");
            // console.log(Permissions.askAsync(Permissions.CAMERA));
            console.log("CHECK");
            // const { status }  = await Camera.requestPermissionsAsync();
            const permission_roll = await Permissions.getAsync(Permissions.CAMERA_ROLL);
            console.log(permission_roll.status);
            const permission  = await Permissions.askAsync(Permissions.CAMERA);
            console.log(permission.status);
            console.log("SURE");
            setHasPermission({ hasPermission: permission.status === 'granted'});
            console.log(hasPermission);
            console.log("END");
        })();
      }, []);

    // useEffect
    console.log(hasPermission)

    if (hasPermission === null || hasPermission === undefined) {
      return (
            <View>
                <Text style={{ fontSize: 86}}>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ERROR!!!!!!!!!!!!!!!!!!!!!!!!</Text>
            </View>);
    }
    else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                );
                useEffect
              }}>
              <Text style={{ fontSize: 168, marginBottom: 100, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    )

};


export default Cameras;