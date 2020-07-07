import React from 'react';
import {TouchableOpacity , View, StyleSheet} from 'react-native';

const RadioButton = props => {
    return (
        <TouchableOpacity style={styles.circle} onPress={props.onPress}>
            {props.checked ? (<View style={styles.checkedCircle} />) : (<View />)}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    circle: {
        height : 30,
        width : 30,
        borderRadius : 15,
        borderWidth : 1,
        borderColor : '#ACACAC',
        alignItems : 'center',
        justifyContent : 'center',
        marginHorizontal : 10
    },
    checkedCircle : {
        width: 22,
        height: 22,
        borderRadius: 13,
        backgroundColor: '#131313'
    }
})

export default RadioButton;