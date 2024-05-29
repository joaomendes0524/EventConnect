import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios');
    setTime(currentTime);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = () => {
    // Função para lidar com a submissão do evento
    console.log({
      eventName,
      address,
      date,
      time,
      description,
      image,
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="calendar-plus" size={70} color="#5D21BC" />
        <Text style={styles.headerText}>CRIE SEU EVENTO</Text>
      </View>
      <LinearGradient style={styles.linearBackground} colors={['#9D66F6', '#8148DC', '#5D21BC']}>
      <View style={styles.card}>
      
        <TextInput
          style={styles.input}
          placeholder="Nome do Evento"
          value={eventName}
          onChangeText={setEventName}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={address}
          onChangeText={setAddress}
        />
        <View style={styles.dateTimeContainer}>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateTimeInput}>
            <Text style={styles.input}>
              Data: {date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.dateTimeInput}>
            <Text style={styles.input}>
              Hora: {time.toLocaleTimeString()}
            </Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}
        </View>
        <TextInput
          style={styles.textArea}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <TouchableOpacity onPress={pickImage} style={styles.imagePickerButton}>
          <MaterialCommunityIcons name="image" size={24} color="#8148DC" />
          <Text style={styles.imagePickerText}>
            {image ? 'Imagem Selecionada' : 'Selecionar Imagem'}
          </Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        {/* </LinearGradient> */}
      </View>
      </LinearGradient>
      <LinearGradient style={styles.submitButton} colors={['#9D66F6', '#8148DC', '#5D21BC']}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Criar Evento</Text>
        </TouchableOpacity>
      </LinearGradient>
      
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  linearBackground: {
    borderRadius: 15,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 24,
    color: '#5D21BC',
    fontWeight: 'bold',
  },
  card: {
    // backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    // shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 2,
  },
  input: {
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#F9F9F9',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTimeInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  textArea: {
    height: 100,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    textAlignVertical: 'top',
    backgroundColor: '#F9F9F9',
  },
  imagePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginVertical: 10,
  },
  imagePickerText: {
    color: '#8148DC',
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 5,
  },
  submitButton: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 5,
    alignSelf: 'center',
    width: '50%'
  },
  submitButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});






// import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

// export default function CreateEvent({ navigation }) {
//     return (
//         <SafeAreaView style={styles.container}>
//             <Image style={styles.vector}
//                 source={require('../assets/imagens/Vector 2.png')}
//             />

//             <View style={{ zIndex: 1 }}>
//                 <Image
//                     style={styles.icon}
//                     source={require('../assets/imagens/app-icon1.png')}
//                 />
//             </View>

//             <View style={styles.bgColor}>

//                 {/*TITULO DE CADASTRO*/}
//                 {<Text style={styles.texto}>Crie e divulgue seu evento aqui</Text>}

//                 {/*TEXTINPUT DE NOME*/}
//                 <View style={styles.containerTxtInput}>
//                     <TextInput style={styles.txtInput} placeholderTextColor={'#FFF'} backgroundColor={'#0A0034'} placeholder='NOME DO EVENTO' keyboardType='email-address' />
//                 </View>
//                 {/*TEXTINPUT DE LOCAL*/}
//                 <View style={styles.containerTxtInput}>
//                     <TextInput style={styles.txtInput} placeholderTextColor={'#FFF'} backgroundColor={'#0A0034'} placeholder='ENDEREÇO' keyboardType='email-address' />
//                 </View>
//                 {/*TEXTINPUT DE DATA E HORÁRIO*/}
//                 <View style={styles.containerTxtInput}>
//                     <View>
//                         <TextInput style={styles.txtInput2} placeholderTextColor={'#FFF'} backgroundColor={'#0A0034'} placeholder='DATA' keyboardType='numeric' />
//                     </View>
//                     <View>
//                         <TextInput style={styles.txtInput2} placeholderTextColor={'#FFF'} backgroundColor={'#0A0034'} placeholder='HORÁRIO' keyboardType='email-address' />
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     txtInput2: {
//         color: 'white',
//         minWidth: '45%',
//         alignSelf: 'flex-end',
//         flexDirection: 'row',
//         marginRight: 20,
//         borderBottomColor: '#FFF',
//         borderBottomWidth: 1,
//     },
//     txtInput: {
//         color: 'white',
//         width: '100%',
//         borderBottomColor: '#FFF',
//         borderBottomWidth: 1,
//     },
//     containerTxtInput: {
//         // width: '90%',
//         // borderBottomColor: '#FFF',
//         // borderBottomWidth: 1,
//         // backgroundColor: '#0A0034',
//         fontSize: 16,
//         // width: '100%',
//         // alignSelf: 'flex-start',
//         flexDirection: 'row',
//         paddingBottom: 8,
//         paddingLeft: 10,
//         // alignItems: 'center',
//         marginTop: 15,
//     },
//     texto: {
//         marginTop: 70,
//         fontSize: 18,
//         fontWeight: '500',
//         color: '#FFF',
//         marginBottom: 30,
//     },
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//     },
//     vector: {
//         width: '100%',
//         height: '15%',
//         alignSelf: 'center'
//     },
//     icon: {
//         position: 'absolute',
//         // marginBottom: 50,
//         // marginLeft: 110,
//         // marginTop: 450,
//         justifyContent: 'center',
//         alignSelf: 'center',
//         width: 170,
//         height: 170,
//     },
//     bgColor: {
//         marginTop: 70,
//         // marginBottom: 50,
//         alignSelf: 'center',
//         // alignItems: 'center',
//         flex: 1,
//         backgroundColor: '#0A0034',
//         borderTopRightRadius: 40,
//         borderTopLeftRadius: 40,
//         padding: 20,
//         width: '90%',
//     },
//     button: {
//         textAlign: 'center',
//         marginTop: 20,
//         backgroundColor: '#6100FF',
//         padding: 10,
//         borderRadius: 20,
//         width: '80%',
//         marginBottom: 10,
//         marginLeft: 60,
//         marginRight: 60
//     },
//     txtButton: {
//         padding: 5,
//         textAlign: 'center',
//         alignItems: 'center',
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#FFF',
//     },
// });