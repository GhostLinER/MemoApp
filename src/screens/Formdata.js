import React, { memo, useState } from 'react';
// import Background from '../components/Background';
// import Logo from '../components/Logo';
// import Header from '../components/Header';
// import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
// import firebase from 'firebase';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const Formdata = ({ navigation }) => {
    const [name ,setName] = useState({ name:'', id:'' , drug:''});

    // const componentWillMount = () => {
    //     var firebaseConfig = {
    //         apiKey: "AIzaSyBiB_R-Cut-X5cS-L9TvUfxaOPGRsGY_Ug",
    //         authDomain: "extra-app-f2fbb.firebaseapp.com",
    //         databaseURL: "https://extra-app-f2fbb.firebaseio.com",
    //         projectId: "extra-app-f2fbb",
    //         storageBucket: "extra-app-f2fbb.appspot.com",
    //         storageBucket: "",
    //         messagingSenderId: "155141768009",
    //         appId: "1:155141768009:web:bd37acd99c4a6b461ad098",
    //         measurementId: "G-S2868PT7EC"
    //       };
    //       // Initialize Firebase
    //       firebase.initializeApp(firebaseConfig);
    //       firebase.analytics();
    // };
    const _submit = () => {
        console.log("Click!!");
        console.log(name);
        // firebase.database().ref('database').set(state)
    };
    return (
        <View style={{margin:20,marginTop:100}}>
            <TextInput
                placeholder="enter Name ..."
                onChangeText={(text) => {setName({name:text})}}
                style={{borderWidth: 2, borderColor: 'skyblue' , margin:20}}
            />
            <TextInput
                placeholder="enter id ..."
                onChangeText={(text) => {setState({id:text})}}
                style={{borderWidth: 2, borderColor: 'skyblue' , margin:20}}
            />
            <TextInput
                placeholder="enter Drug ..."
                onChangeText={(text) => {setState({drug:text})}}
                style={{borderWidth: 2, borderColor: 'skyblue' , margin:20}}
            />
            <Button mode="contained" onPress={_submit} >
                submit data
            </Button>
        </View>
        // <Text>Hello</Text>
    )
};

export default Formdata;