import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

export default function CreateParticipante({ navigation }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }

        try {
            const response = await axios.post('http://192.168.28.44:3000/users/register', {
                name,
                username,
                email,
                password,
            });

            if (response.status === 201) {
                Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
                navigation.navigate('LoginParticipante');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Erro ao cadastrar usuário. Por favor, tente novamente.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.texto}>Olá! Cadastre-se para começar</Text>

            <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='account-edit' size={20}/>
                <TextInput
                    style={styles.txtInput}
                    placeholder='NOME'
                    keyboardType='default'
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='account-eye' size={20}/>
                <TextInput
                    style={styles.txtInput}
                    placeholder='NOME DE USUÁRIO'
                    keyboardType='default'
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='email' size={20}/>
                <TextInput
                    style={styles.txtInput}
                    placeholder='E-MAIL'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='form-textbox-password' size={20}/>
                <TextInput
                    style={styles.txtInput}
                    placeholder='SUA SENHA'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='form-textbox-password' size={20}/>
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

            {/* <View style={styles.containerLoginCom}>
                <TouchableOpacity style={styles.btmLoginCom}>
                    <Image source={require('../assets/imagens/google.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btmLoginCom}>
                    <Image source={require('../assets/imagens/facebook.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btmLoginCom}>
                    <Image source={require('../assets/imagens/apple.png')} />
                </TouchableOpacity>
            </View> */}
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