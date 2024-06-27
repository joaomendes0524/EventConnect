import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Alert, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_IP } from '@env';

export default function LoginParticipante({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const setupAxiosInterceptors = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    };
    setupAxiosInterceptors();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://${SERVER_IP}:3000/user/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        await AsyncStorage.setItem('userToken', token); // Armazenar o token no AsyncStorage
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Definir o token no cabeçalho do Axios
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('MainTabs');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao fazer login. Por favor, verifique suas credenciais e tente novamente.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Bem vindo de volta!</Text>
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
          placeholder='SENHA'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.recoverSenha}>Esqueceu a senha?</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.containerRegister}>
        <LinearGradient style={styles.btmRegister} colors={['#9D66F6', '#8148DC', '#5D21BC']}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.txtRegister}>Entrar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.btmCreate}>
        <Text>Não tem conta?</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('CreateParticipante');
          }}>
          <Text style={styles.btmNoFeedback}> Crie agora</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  btmLoginCom: {
    backgroundColor: '#FFF',
    borderColor: 'black',
    borderWidth: 0.1,
    borderRadius: 15,
    paddingHorizontal: 40,
    padding: 10,
    margin: 5,
  },
  containerLoginCom: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btmCreate: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  recoverSenha: {
    textDecorationLine: 'underline',
    color: '#5D21BC',
    paddingTop: 20,
    alignSelf: 'flex-end',
  },
  btmNoFeedback: {
    textDecorationLine: 'underline',
    color: '#5D21BC',
  },
  container: {
    marginBottom: 50,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFF',
    padding: 30
  },
  texto: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 50,
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
  },
  containerRegister: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  btmRegister: {
    textAlign: 'center',
    marginTop: 20,
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