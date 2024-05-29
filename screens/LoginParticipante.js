import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginParticipante({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/*TITULO DE CADASTRO*/}
      {<Text style={styles.texto}>Bem vindo de volta!</Text>}

      {/*TEXTINPUT DE EMAIL*/}
      <View style={styles.containerTxtInput}>
        <MaterialIcons style={styles.iconTextInput} name='email' size={20} />
        <TextInput style={styles.txtInput} placeholder='E-MAIL' keyboardType='email-address' />
      </View>

      {/*TEXTINPUT DE SENHA*/}
      <View style={styles.containerTxtInput}>
        <MaterialIcons style={styles.iconTextInput} name='form-textbox-password' size={20} />
        <TextInput style={styles.txtInput} placeholder='SENHA' secureTextEntry={true} />
      </View>

      {/*BOTAO ESQUECEU SENHA*/}
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ForgotPassword'); {/*RECUPERAR SENHA*/}
          }}>
          <Text style={styles.recoverSenha}>Esqueceu a senha?</Text>
        </TouchableWithoutFeedback>
      </View>

      {/*BOTAO DE LOGIN*/}
      <View style={styles.containerRegister}>
        <LinearGradient style={styles.btmRegister}
        colors={['#9D66F6', '#8148DC', '#5D21BC']}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MainTabs'); {/*IR PARA FEED*/}
          }}>
          <Text style={styles.txtRegister}>Entrar</Text>
        </TouchableOpacity>
        </LinearGradient>
      </View>

      {/*BOTAO CRIAR CONTA*/}
      <View style={styles.btmCreate}>
        <Text>Não tem conta?</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('CreateParticipante'); {/*IR PARA CREATE PARTICIPANTE*/}
          }}>
          <Text style={styles.btmNoFeedback}> Crie agora</Text>
        </TouchableWithoutFeedback>

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
  btmCreate:{
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