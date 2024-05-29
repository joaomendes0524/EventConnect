import { SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

export default function CreateParticipante({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            {/*TITULO DE CADASTRO*/}
            {<Text style={styles.texto}>Olá! Cadastre-se para começar</Text>}

            {/*TEXTINPUT DE NOME*/}
            <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='account-edit' size={20}/>
                <TextInput style={styles.txtInput} placeholder='NOME' keyboardType='email-address'/>
            </View>

            {/*TEXTINPUT DE NOME DE USUÁRIO*/}
            <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='account-eye' size={20}/>
                <TextInput style={styles.txtInput} placeholder='NOME DE USUÁRIO' keyboardType='email-address'/>
            </View>

            {/*TEXTINPUT DE CPF OU CNPJ*/}
            <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='card-account-details' size={20}/>
                <TextInput style={styles.txtInput} placeholder='CPF' keyboardType='numeric'/>
            </View>

            {/*TEXTINPUT DE EMAIL*/}
            <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='email' size={20}/>
                <TextInput style={styles.txtInput} placeholder='E-MAIL' keyboardType='email-address'/>
            </View>

            {/*TEXTINPUT DE SENHA*/}
            <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='form-textbox-password' size={20}/>
                <TextInput style={styles.txtInput} placeholder='SUA SENHA' secureTextEntry={true}/>
            </View>

            {/*TEXTINPUT DE CONFIRMAR SENHA*/}
            <View style={styles.containerTxtInput}>
                <MaterialIcons style={styles.iconTextInput} name='form-textbox-password' size={20}/>
                <TextInput style={styles.txtInput} placeholder='CONFIRME SUA SENHA' secureTextEntry={true}/>
            </View>

            {/*BOTAO DE LOGIN*/}
            <View style={styles.containerRegister}>
            <LinearGradient style={styles.btmRegister}
                colors={['#9D66F6', '#8148DC', '#5D21BC']}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('LoginParticipante');
                    }}>
                    <Text style={styles.txtRegister}>CRIAR</Text>
                </TouchableOpacity>
            </LinearGradient>
            </View>

            <View style={styles.containerLoginCom}>
                <TouchableOpacity style={styles.btmLoginCom}>
                    <Image
                        source={require('../assets/imagens/google.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btmLoginCom}>
                    <Image
                        source={require('../assets/imagens/facebook.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btmLoginCom}>
                    <Image
                        source={require('../assets/imagens/apple.png')}
                    />
                </TouchableOpacity>
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