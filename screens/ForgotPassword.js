import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ForgotPassword({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.icon}
                source={require('../assets/imagens/Vector 2.png')}
            />

            <View style={styles.view}>
                <View style={styles.view2}>
                    <Image style={styles.icon2}
                        source={require('../assets/imagens/img2.png')}
                    />
                </View>

                <Text style={styles.texto}>
                    Informe o e-mail cadastrado na sua conta e lhe enviaremos um link para redefinir sua senha.
                </Text>

                {/*TEXTINPUT DE EMAIL*/}
                <View style={styles.containerTextInput}>
                    <MaterialIcons name='email' size={20} />
                    <TextInput style={styles.textInput} placeholder='E-MAIL' keyboardType='email-address' />
                </View>

                <LinearGradient style={styles.button}
                colors={['#0A0034', '#150068']}>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('RedefPassword'); {/*IR PARA REDEFINIR SENHA*/}
                  }}>
                    <Text style={styles.txtButton}>ENVIAR LINK</Text>
                </TouchableOpacity>
                </LinearGradient>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    icon: {
        width: '100%',
        height: '15%',
        alignSelf: 'center'
    },
    view: {
        backgroundColor: '#6100FF',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%',
        height: '70%',
        borderRadius: 50,
        marginTop: 70
    },
    view2: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 150,
        shadowColor: 'black',
        elevation: 30,
    },
    icon2: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        bottom: 100
    },
    containerTextInput: {
        fontSize: 16,
        flexDirection: 'row',
        width: 300,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 50,
        bottom: 80,
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
        shadowColor: 'black',
        elevation: 100,
    },
    textInput: {
        padding: 10,
        alignSelf: 'center'
    },
    button: {
        // textAlign: 'center',
        // marginTop: 30,
        padding: 10,
        borderRadius: 20,
        width: '50%',
        textAlign: 'center',
        // justifyContent: 'center',
    },
    iconButton: {
        color: '#fff',
        marginTop: '100',
        // alignItems: 'center',
        width: 28,
        // marginTop: 3
    },
    txtButton: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        // alignSelf: 'center',
        marginBottom: 4,
        // marginLeft: 45,
        // marginTop: 3
    },
});