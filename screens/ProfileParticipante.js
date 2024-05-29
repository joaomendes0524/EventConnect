import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileParticipante() {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [username, setUsername] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const handleSaveProfile = () => {
    // Lógica para salvar as informações do perfil
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={pickImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <MaterialCommunityIcons name="account-circle" size={120} color="#5D21BC" />
          )}
        </TouchableOpacity>
      </View>
      
      <LinearGradient style={styles.linearBackground} colors={['#9D66F6', '#8148DC', '#5D21BC']}>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Nome de Usuário"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Gênero"
            value={gender}
            onChangeText={setGender}
          />
          <TextInput
            style={styles.input}
            placeholder="Idade"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Cidade"
            value={city}
            onChangeText={setCity}
          />
        </View>
      </LinearGradient>

      <LinearGradient style={styles.submitButton} colors={['#9D66F6', '#8148DC', '#5D21BC']}>
        <TouchableOpacity onPress={handleSaveProfile}>
          <Text style={styles.submitButtonText}>Salvar Perfil</Text>
        </TouchableOpacity>
      </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  linearBackground: {
    borderRadius: 15,
    marginBottom: 20,
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
