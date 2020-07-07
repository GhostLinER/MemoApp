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
import Concent from '../components/Concent';
import Buttonsubmit from '../components/Buttonsubmit';
import RadioButton from '../components/RadioButton';
// import Text from '../components/Textform';
import * as firebase from 'firebase';
import { View, Picker, StyleSheet } from 'react-native';
// import Select2 from 'react-native-select-two';
import RNPickerSelect from 'react-native-picker-select';

const Formdata = ({ navigation }) => {
  const [id, setId] = useState({ value: '', error: '' });
  const [gender, setGender] = useState('male');
  const [maleCheck , setMaleCheck] = useState(true);
  const [femaleCheck , setFemaleCheck] = useState(false);
  const [age, setAge] = useState({ value: '', error: '' });
  const [drug, setDrug] = useState({ value: '', error: '' });
  const [mg, setMG] = useState({ value: '', error: '' });
  const [ml, setML] = useState({ value: '', error: '' });
  const [problem, setProblem] = useState({ value: '', error: '' });
  const problemall = [
    {
      problem1: [
        { label: '5.5% calcium gluconate', value: '5.5% calcium gluconate', },
        { label: '10% calcium gluconate', value: '10% calcium gluconate', },
        { label: '20% lipid', value: '20% lipid', },
        { label: '50% MgSo4', value: '50% MgSo4', },
        { label: 'Contrast media', value: 'Contrast media', },
        { label: 'Dextrose (>10%)', value: 'Dextrose (>10%)', },
        { label: 'KCl (> 40 mmol/L)', value: 'KCl (> 40 mmol/L)', },
        { label: 'Mannitol', value: 'Mannitol', },
        { label: 'NSS (>3-10%)', value: 'NSS (>3-10%)', },
        { label: 'PPN/ TPN', value: 'PPN/ TPN', },
        { label: 'Phenytoin', value: 'Phenytoin', },
        { label: 'Others', value: 'OthersHyperosmolar', },
      ]
    },
    {
      problem2: [
        { name: 'Bleomycin C', id: 'Bleomycin', },
        { name: 'Cisplatin', id: 'Cisplatin', },
        { name: 'Carmustine Cetuximab', id: 'Carmustine Cetuximab', },
        { name: 'Cyclophosphamide', id: 'Cyclophosphamide', },
        { name: 'Dacarbazine Etoposide', id: 'Dacarbazine Etoposide', },
        { name: 'Dactinomycin', id: 'Dactinomycin', },
        { name: 'Doxorubicin', id: 'Doxorubicin', },
        { name: 'Docetaxel', id: 'Docetaxel', },
        { name: 'Epirubicin', id: 'Epirubicin', },
        { name: 'Gemtalabine Teniposide', id: 'Gemtalabine Teniposide', },
        { name: 'Idarubicin', id: 'Idarubicin', },
        { name: 'Mitomycin C', id: 'Mitomycin C', },
        { name: 'Oxaliplatin', id: 'Oxaliplatin', },
        { name: 'Paclitaxel', id: 'Paclitaxel', },
        { name: 'Vinblastine Vincristine', id: 'Vinblastine Vincristine', },
        { name: 'Vindesine Vinorelbine', id: 'Vindesine Vinorelbine', },
        { name: 'Others', id: 'OthersChemotherapy', },
      ],
    },
    {
      problem3: [
        { name: 'Adrenaline', id: 'Adrenaline', },
        { name: 'Dobutamine', id: 'Dobutamine', },
        { name: 'Dopamine', id: 'Dopamine', },
        { name: 'Norepinephrine', id: 'Norepinephrine', },
        { name: 'Others', id: 'OthersVascular', },
      ]
    },
    {
      problem4: [
        { name: 'Acyclovir', id: 'Acyclovir', },
        { name: 'Aminophylline', id: 'Aminophylline', },
        { name: 'Amphotericin B', id: 'Amphotericin B', },
        { name: 'Cefotaxime', id: 'Cefotaxime', },
        { name: 'Ceftriaxone', id: 'Ceftriaxone', },
        { name: 'Co trimoxazole', id: 'Co trimoxazole', },
        { name: 'Erythromycin', id: 'Erythromycin', },
        { name: 'Ganciclovir', id: 'Ganciclovir', },
        { name: 'Liposomal Amphotericin B', id: 'Liposomal Amphotericin B', },
        { name: 'Penicillin', id: 'Penicillin', },
        { name: 'Vancomycin', id: 'Vancomycin', },
        { name: 'Others', id: 'OthersAntibiotic', },
      ]
    },
    {
      problem5: [
        { name: 'Diazepam', id: 'Diazepam', },
        { name: 'Phenobarbital', id: 'Phenobarbital', },
        { name: 'Thiopental', id: 'Thiopental', },
        { name: 'Others', id: 'OthersSedative', },
      ],
    }, 
    {
      problem6: [
        { name: 'Amiodarone', id: 'Amiodarone', },
        { name: 'Digoxin', id: 'Digoxin', },
        { name: 'Vasopressin', id: 'Vasopressin', },
        { name: 'Others', id: 'OthersArrythmia', },
      ],
    }, 
    {
      problem7: [
        { name: 'Others', id: 'Others', },
      ],
    }
  ]
  const drugs = [
    {label: 'Hyperosmolar agents',value: 'Hyperosmolar agents'},
    {label: 'Chemotherapy',value: 'Chemotherapy'},
    {label: 'Vascular regulators',value: 'Vascular regulators'},
    {label: 'Antibiotic (Acid) & (alkaline)',value: 'Antibiotic (Acid) & (alkaline)'},
    {label: 'Sedative drugs & Anticonvulsant',value: 'Sedative drugs & Anticonvulsant'},
    {label: 'Arrythmia drugs & vasopressor',value: 'Arrythmia drugs & vasopressor'},
    {label: 'Others',value: 'Others'}
  ]
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
  // const _chooseprob = () => {
  //   // if(drug.value == 'Hyperosmolar agents') {
  //   //   console.log(problemall['problem1'])
  //   // }
  //   <RNPickerSelect 
  //           onValueChange={(value) => setDrug(value)}
  //           style={pickerStyle}
  //           placeholder={{
  //             label: 'Select Drug',
  //             value: null,
  //           }}
  //           items = {drugs}
  //     />
  // }
  const maleCheckHandler = () => {
    if(femaleCheck){
      // console.log("set male")
      setFemaleCheck(false);
      setMaleCheck(true);
      setGender('male');
    }
    else {
      // setFemaleCheck(true);
      setMaleCheck(true);
      setGender('male');
    }
    // console.log("gender " , gender);
    // console.log("malecheck " , maleCheck);
    // console.log("femalecheck " , femaleCheck);
  };
  const femaleCheckHandler = () => {
    if(maleCheck){
      console.log("set female");
      setMaleCheck(false);
      setFemaleCheck(true);
      setGender('female');
      console.log("gender " , gender);
      console.log("malecheck " , maleCheck);
      console.log("femalecheck " , femaleCheck);
    }
    else {
      // setFemaleCheck(true);
      setFemaleCheck(true);
      setGender('female');
    }
    // console.log("gender " , gender);
    // console.log("malecheck " , maleCheck);
    // console.log("femalecheck " , femaleCheck);
  };
  const _submit = () => {
    // console.log(id.value);
    // console.log(gender);
    // console.log(age.value);
    // console.log(drug);
    // console.log(mg.value);
    // console.log(ml.value);
    // console.log(selectedValue);
    var firebaseConfig = {
      apiKey: 'AIzaSyBiB_R-Cut-X5cS-L9TvUfxaOPGRsGY_Ug',
      authDomain: 'extra-app-f2fbb.firebaseapp.com',
      databaseURL: 'https://extra-app-f2fbb.firebaseio.com',
      projectId: 'extra-app-f2fbb',
      // storageBucket: "extra-app-f2fbb.appspot.com",
      storageBucket: '',
      messagingSenderId: '155141768009',
      // appId: "1:155141768009:web:bd37acd99c4a6b461ad098",
      // measurementId: "G-S2868PT7EC"
    };
    // console.log(gender.value);
    firebase.initializeApp(firebaseConfig);
    console.log('add');
    firebase.database().ref('database/003').set({
        id: id.value,
        age: age.value,
        gender: gender,
        drug: drug,
        concentrationMG: mg.value,
        concentrationML: ml.value,
      })
      .then(() => {
        console.log('success');
        alert("success");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <Background>
      <Header>Add New Patient</Header>
      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <Textid
            label="ID"
            onChangeText={text => {
              setId({ value: text });
            }}
          />
        </View>
        <View style={styles.inputWrap2}>
          <Textage
            label="AGE"
            onChangeText={text => {
              setAge({ value: text });
            }}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.inputWrap3}>
          <View style={styles.rowgen}>
              <RadioButton checked={maleCheck} onPress={maleCheckHandler}>
              </RadioButton>
              <Paragraph>MALE</Paragraph>
              </View>
        </View>
        <View style={styles.inputWrap3}>
          <View style={styles.rowgen}>
              <RadioButton checked={femaleCheck} onPress={femaleCheckHandler}>
              </RadioButton> 
              <Paragraph>FEMALE</Paragraph>
          </View>
        </View>
      </View>
      <RNPickerSelect 
            onValueChange={(value) => setDrug(value)}
            style={pickerStyle}
            placeholder={{
              label: 'Select Drug',
              value: null,
            }}
            items = {drugs}
      />
      <View style={styles.row}>
        <View style={styles.inputWrap3}>
          <Concent
            label="Concent(MG)"
            onChangeText={text => {
              setMG({ value: text });
            }}
          />
        </View>
        <View style={styles.inputWrap4}>
          <Concent
            label="Concent(ML)"
            onChangeText={text => {
              setML({ value: text });
            }}
          />
        </View>
      </View>
      <Button mode="contained" onPress={() => navigation.navigate('CameraUse')}>
        Add Picture
      </Button>
      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <Buttonsubmit mode="contained" onPress={_submit}>
            submit
          </Buttonsubmit>
        </View>
        <View style={styles.inputWrap}>
          <Buttonsubmit mode="contained" onPress={() => navigation.navigate('Dashboard')}>
            Home
          </Buttonsubmit>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  rowgen: {
    flexDirection:'row',
  },
  textgender: {
    left: -120,
  },
  inputWrap: {
    flex: 1,
  },
  inputWrap2: {
    flex: 1,
    right :-15,
    width: '100%',
  },
  inputWrap3: {
    marginHorizontal:10,
    width: '50%',
  },
  inputWrap4: {
    width: '50%',
  },
  select: {
    width: '100%',
    height: '100%',
    marginVertical: 20,
  },
  container: {
    bottom: 80,
    left: -60,
  },
});

export default Formdata;
