import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateDivulgador({ navigation }) {
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    const cadastro = { nome, email, senha, cnpj };

    try {
      const response = await axios.post('http://192.168.196.44:3000/divulgador/register', cadastro);
      
      const { token } = response.data;
      await AsyncStorage.setItem('userToken', token); // Armazenar o token no AsyncStorage
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Definir o token no cabeçalho do Axios

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('LoginDivulgador');
    } catch (error) {
      console.error("Erro ao cadastrar: ", error);
      
      if (error.response) {
        setErrorMessage(`Erro: ${error.response.data.message || error.response.status}`);
      } else if (error.request) {
        setErrorMessage('Erro: Nenhuma resposta recebida do servidor');
      } else {
        setErrorMessage(`Erro: ${error.message}`);
      }
      
      Alert.alert('Erro', errorMessage);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Olá! Cadastre-se para divulgar seus eventos</Text>
      <View style={styles.containerTxtInput}>
        <MaterialIcons style={styles.iconTextInput} name='account-edit' size={20} />
        <TextInput
          style={styles.txtInput}
          placeholder='NOME'
          value={nome}
          onChangeText={setNome}
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
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <View style={styles.containerTxtInput}>
        <MaterialIcons style={styles.iconTextInput} name='form-textbox-password' size={20} />
        <TextInput
          style={styles.txtInput}
          placeholder='CONFIRME SUA SENHA'
          secureTextEntry={true}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </View>
      <View style={styles.containerRegister}>
        <LinearGradient style={styles.btmRegister} colors={['#9D66F6', '#8148DC', '#5D21BC']}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.txtRegister}>CRIAR</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
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
    flex: 1, // Adicionado para preencher o espaço restante
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
