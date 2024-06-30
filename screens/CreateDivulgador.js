import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import {ip} from "../ip";

export default function CreateDivulgador({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post(`http://${ip}:3000/divulgador/register`, {
        name,
        username,
        password,
        email,
        cnpj,
      });


      if (response.status === 201) {
        // const { token } = response.data;
        // await AsyncStorage.setItem('userToken', token); // Armazenar o token no AsyncStorage
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Definir o token no cabeçalho do Axios

        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('LoginDivulgador');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao cadastrar usuário. Por favor, tente novamente.')
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}
    // style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
    <ScrollView contentContainerStyle={styles.container2}>
      <Text style={styles.texto}>Olá! Cadastre-se para divulgar seus eventos</Text>
      <View style={styles.containerTxtInput}>
        <MaterialIcons style={styles.iconTextInput} name='account-edit' size={20} />
        <TextInput
          style={styles.txtInput}
          placeholder='NOME'
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='account-eye' size={20} />
                <TextInput
                    style={styles.txtInput}
                    placeholder='NOME DE USUÁRIO'
                    keyboardType='default'
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

      <View style={styles.containerTxtInput}>
        <MaterialIcons style={styles.iconTextInput} name='card-account-details' size={20} />
        <TextInput
          style={styles.txtInput}
          placeholder='CPF OU CNPJ'
          keyboardType='numeric'
          value={cnpj}
          onChangeText={setCnpj}
        />
      </View>
      <View style={styles.containerTxtInput}>
        <MaterialIcons style={styles.iconTextInput} name='email' size={20} />
        <TextInput
          style={styles.txtInput}
          placeholder='E-MAIL'
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.containerTxtInput}>
        <MaterialIcons style={styles.iconTextInput} name='form-textbox-password' size={20} />
        <TextInput
          style={styles.txtInput}
          placeholder='SUA SENHA'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.containerTxtInput}>
        <MaterialIcons style={styles.iconTextInput} name='form-textbox-password' size={20} />
        <TextInput
          style={styles.txtInput}
          placeholder='CONFIRME SUA SENHA'
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={styles.containerRegister}>
        <LinearGradient style={styles.btmRegister} colors={['#9D66F6', '#8148DC', '#5D21BC']}>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.txtRegister}>CRIAR</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container2: {
    flexGrow: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20
  },
  texto: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  iconTextInput: {
    marginLeft: 20,
  },
  containerTxtInput: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    fontSize: 16,
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingTop: 10,
    elevation: 3,
    alignItems: 'center',
    marginTop: 15,
  },
  txtInput: {
    padding: 10,
    flex: 1,
  },
  containerRegister: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btmRegister: {
    textAlign: 'center',
    marginTop: 30,
    backgroundColor: '#6100FF',
    padding: 10,
    borderRadius: 20,
    width: '50%',
    justifyContent: 'center',
  },
  txtRegister: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#FFF'
  }
});