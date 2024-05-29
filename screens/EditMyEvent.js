// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import * as ImagePicker from 'expo-image-picker';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function EditEventScreen({ route, navigation }) {
//   const { eventId } = route.params;

//   const [event, setEvent] = useState({
//     name: '',
//     address: '',
//     date: new Date(),
//     time: '',
//     description: '',
//     image: null,
//   });

//   useEffect(() => {
//     // Aqui você carregaria os dados do evento do backend ou estado global usando eventId
//     // Simulando carregamento de dados com um timeout
//     setTimeout(() => {
//       setEvent({
//         name: 'Evento Simulado',
//         address: 'Endereço Simulado',
//         date: new Date(),
//         time: '18:00',
//         description: 'Descrição Simulada',
//         image: null,
//       });
//     }, 1000);
//   }, [eventId]);

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || event.date;
//     setEvent(prevState => ({ ...prevState, date: currentDate }));
//   };

//   const handleTimeChange = (event, selectedTime) => {
//     const currentTime = selectedTime || event.time;
//     setEvent(prevState => ({ ...prevState, time: currentTime }));
//   };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setEvent(prevState => ({ ...prevState, image: result.uri }));
//     }
//   };

//   const handleSave = () => {
//     // Salve as alterações do evento no backend ou estado global
//     console.log('Evento atualizado:', event);
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>EDITAR EVENTO</Text>
//       <View style={styles.card}>
//         <TextInput
//           style={styles.input}
//           placeholder="Nome do Evento"
//           value={event.name}
//           onChangeText={(text) => setEvent({ ...event, name: text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Endereço"
//           value={event.address}
//           onChangeText={(text) => setEvent({ ...event, address: text })}
//         />
//         <View style={styles.dateTimeContainer}>
//           <TouchableOpacity style={styles.dateInput} onPress={() => setShowDate(true)}>
//             <Text style={styles.inputText}>Data: {event.date.toLocaleDateString()}</Text>
//           </TouchableOpacity>
//           {showDate && (
//             <DateTimePicker
//               value={event.date}
//               mode="date"
//               display="default"
//               onChange={handleDateChange}
//             />
//           )}
//           <TouchableOpacity style={styles.timeInput} onPress={() => setShowTime(true)}>
//             <Text style={styles.inputText}>Hora: {event.time}</Text>
//           </TouchableOpacity>
//           {showTime && (
//             <DateTimePicker
//               value={new Date()}
//               mode="time"
//               display="default"
//               onChange={handleTimeChange}
//             />
//           )}
//         </View>
//         <TextInput
//           style={styles.input}
//           placeholder="Descrição"
//           value={event.description}
//           onChangeText={(text) => setEvent({ ...event, description: text })}
//         />
//         <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
//           <MaterialCommunityIcons name="image" size={24} color="#6100FF" />
//           <Text style={styles.inputText}>Adicionar Imagem</Text>
//         </TouchableOpacity>
//         {event.image && <Image source={{ uri: event.image }} style={styles.image} />}
//         <LinearGradient
//           colors={['#9D66F6', '#8148DC', '#5D21BC']}
//           style={styles.saveButton}
//         >
//           <TouchableOpacity onPress={handleSave}>
//             <Text style={styles.saveButtonText}>Salvar Alterações</Text>
//           </TouchableOpacity>
//         </LinearGradient>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#FFF',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#6100FF',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   card: {
//     padding: 15,
//     borderRadius: 10,
//     backgroundColor: '#F9F9F9',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   input: {
//     height: 40,
//     borderColor: '#DDD',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   dateTimeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   dateInput: {
//     flex: 1,
//     marginRight: 5,
//   },
//   timeInput: {
//     flex: 1,
//     marginLeft: 5,
//   },
//   inputText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   imagePicker: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginTop: 10,
//     borderRadius: 5,
//   },
//   saveButton: {
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   saveButtonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function EditEventScreen({ route, navigation }) {
  const { eventId } = route.params; // Obtendo o ID do evento dos parâmetros de navegação

  const [eventName, setEventName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSaveEvent = () => {
    // Lógica para salvar o evento atualizado
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="calendar-edit" size={70} color="#5D21BC" />
        <Text style={styles.headerText}>EDITAR SEU EVENTO</Text>
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
        </View>
      </LinearGradient>
      <LinearGradient style={styles.submitButton} colors={['#9D66F6', '#8148DC', '#5D21BC']}>
        <TouchableOpacity onPress={handleSaveEvent}>
          <Text style={styles.submitButtonText}>Salvar Alterações</Text>
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
    borderRadius: 10,
    padding: 20,
    shadowOffset: { width: 0, height: 2 },
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
    width: '50%',
  },
  submitButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

