import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import BackButton from '../components/BackButton';
import ButtonSnap from '../components/ButtonSnap';

const Cameras = ({ navigation }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    // const [hasPermission_roll, setHasPermissionRoll] = useState(null);


    useEffect(() => {
        (async () => {
            // const { status }  = await Camera.requestPermissionsAsync();
            const permission  = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
            console.log(permission.status);
            setHasPermission({ hasPermission: permission.status === 'granted'});
            // const permission_roll  = await Permissions.getAsync(Permissions.CAMERA_ROLL);
            // console.log(permission_roll.status);
            // setHasPermissionRoll({ hasPermission_roll: permission_roll.status === 'granted'});

        })();
      }, []);
    

    snap = async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        console.log('photo', photo);
        MediaLibrary.saveToLibraryAsync(photo.uri);
        console.log("save");
      }
    };

    
    if (hasPermission === null || hasPermission === undefined) {
      return (
            <View>
                <Text style={{ fontSize: 86}}>Please Permisson!!</Text>
            </View>);
    }
    else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera 
                style={{ flex: 1 }} 
                type={type}
                ref={ref => {
                  this.camera = ref;
                }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            {/* <ButtonSnap onPress={() =>{
              snap();
              console.log("mmmmmmm");
            }}/> */}
            <TouchableOpacity
              style={{
                flex: 1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                snap();
                console.log("click snap");
              }}>
              {/* <Text style={{ fontSize: 68, marginBottom: 100, color: 'white' }}> snap </Text> */}
              <Image style={styles.image} source={require('../assets/camera.png')} />
            </TouchableOpacity>
          </View>
          <BackButton goBack={() => navigation.navigate('Formdata')}/>
        </Camera>
      </View>
    );

};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
});

export default Cameras;