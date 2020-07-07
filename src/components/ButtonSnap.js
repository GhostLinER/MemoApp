import React, { memo } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const ButtonSnap = () => (
  <TouchableOpacity style={styles.container}>
    <Image style={styles.image} source={require('../assets/camera.png')} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default memo(ButtonSnap);
