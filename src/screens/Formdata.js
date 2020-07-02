import React, { memo, useState } from 'react';
import Background from '../components/Background';
// import Logo from '../components/Logo';
// import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Textsame from '../components/Textsame';
import Textid from '../components/Textid';
import Textage from '../components/Textage';
import Header from '../components/Header';
// import Text from '../components/Textform';
import * as firebase from 'firebase';
import { View, Picker, StyleSheet } from 'react-native';
// import Select2 from 'react-native-select-two';
import RNPickerSelect from 'react-native-picker-select';

const Formdata = ({ navigation }) => {
  const [id, setId] = useState({ value: '', error: '' });
  const [gender, setGender] = useState({ value: '', error: '' });
  const [age, setAge] = useState({ value: '', error: '' });
  const [drug, setDrug] = useState({ value: '', error: '' });
  const [mg, setMG] = useState({ value: '', error: '' });
  const [ml, setML] = useState({ value: '', error: '' });
  const [selectedValue, setSelectedValue] = useState({ value: '', error: '' });
  const pickerStyle = {
    inputIOS: {
      color: 'black',
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
    },
    inputAndroid: {
      color: 'black',
    },
    placeholderColor: 'black',
    underline: { borderTopWidth: 0 },
    icon: {
      position: 'absolute',
      backgroundColor: 'transparent',
      borderTopWidth: 5,
      borderTopColor: '#00000099',
      borderRightWidth: 5,
      borderRightColor: 'transparent',
      borderLeftWidth: 5,
      borderLeftColor: 'transparent',
      width: 0,
      height: 0,
      top: 20,
      right: 15,
    },
  };
  // const mockData = [
  //   { id: 1, name: 'React Native Developer' },
  //   { id: 2, name: 'Android Developer' },
  //   { id: 3, name: 'iOS Developer' },
  // ];
  const _submit = () => {
    // console.log(id.value);
    // console.log(gender.value);
    // console.log(age.value);
    // console.log(drug.value);
    // console.log(mg.value);
    // console.log(ml.value);
    console.log(selectedValue);
    // var firebaseConfig = {
    //   apiKey: 'AIzaSyBiB_R-Cut-X5cS-L9TvUfxaOPGRsGY_Ug',
    //   authDomain: 'extra-app-f2fbb.firebaseapp.com',
    //   databaseURL: 'https://extra-app-f2fbb.firebaseio.com',
    //   projectId: 'extra-app-f2fbb',
    //   // storageBucket: "extra-app-f2fbb.appspot.com",
    //   storageBucket: '',
    //   messagingSenderId: '155141768009',
    //   // appId: "1:155141768009:web:bd37acd99c4a6b461ad098",
    //   // measurementId: "G-S2868PT7EC"
    // };
    // firebase.initializeApp(firebaseConfig);
    // console.log('add');
    // firebase
    //   .database()
    //   .ref('database/002')
    //   .set({
    //     id: id.value,
    //     age: age.value,
    //     gender: gender.value,
    //     drug: drug.value,
    //     concentrationMG: mg.value,
    //     concentrationML: ml.value,
    //   })
    //   .then(() => {
    //     console.log('success');
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
  return (
    <Background>
      <Header>Add New Patient</Header>
      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <Textid
            label="Id"
            onChangeText={text => {
              setId({ value: text });
            }}
          />
        </View>
        <View style={styles.inputWrap2}>
          <Textage
            label="Age"
            onChangeText={text => {
              setAge({ value: text });
            }}
          />
        </View>
      </View>
      <TextInput
        label="Gender"
        onChangeText={text => {
          setGender({ value: text });
        }}
      />
      <TextInput
        label="Drug"
        onChangeText={text => {
          setDrug({ value: text });
        }}
      />
      {/* <View style={styles.container}>
        {/* <View > */}
        {/* <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="J" value="ja" />
          <Picker.Item label="va" value="a" />
        </Picker> */}
      {/* </View> */} 
      <RNPickerSelect 
            onValueChange={(value) => setSelectedValue(value)}
            // style={styles.select}
            style={pickerStyle}
            placeholder={{
              label: 'Select Drug',
              value: null,
            }}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
      {/* console.log(selectedValue.value); */}
      {/* <TextInput
        label="ConcentrationMG"
        onChangeText={text => {
          setMG({ value: text });
        }}
      />
      <TextInput
        label="ConcentrationML"
        onChangeText={text => {
          setML({ value: text });
        }}
      />
      <Button mode="contained" onPress={_submit}>
        submit data
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Dashboard')}>
        Back to Home
      </Button> */}
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    // flex: 1,
    flexDirection: 'row',
    // right: -5,
    // marginBottom: 100,
  },
  inputWrap: {
    flex: 1,
    // borderColor: '#cccccc',
    // borderBottomWidth: 1,
    // marginBottom: 100,
    // right :25,
  },
  inputWrap2: {
    flex: 1,
    // borderColor: '#cccccc',
    // borderBottomWidth: 1,
    // marginBottom: 100,
    right :-15,
    width: '100%',
  },
  select: {
    borderBottomColor: "#00ff00",
    width: '100%',
    height: '100%',
    marginVertical: 20,
  },
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // up:10,
    bottom: 80,
    left: -60,
  },
});

export default Formdata;
