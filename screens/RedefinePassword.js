import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RedefPassword() {
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
                    Crie uma nova senha e confirme para realizar login
                </Text>

                <View style={styles.containerTextInput}>
                    <MaterialIcons name='form-textbox-password' size={20} />
                    <TextInput style={styles.textInput} placeholder='Nova senha' secureTextEntry={true} />
                </View>

                <View style={styles.containerTextInput}>
                    <MaterialIcons name='form-textbox-password' size={20} />
                    <TextInput style={styles.textInput} placeholder='Confirme sua nova senha' secureTextEntry={true} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <MaterialIcons style={styles.iconButton} name='check' size={30} color={'#FFF'} />
                    <Text style={styles.txtButton}>Confirme sua nova senha</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
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
        bottom: 130,
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
        bottom: 95
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
        flexDirection: 'row',
        bottom: 10,
        backgroundColor: '#0A0034',
        padding: 10,
        borderRadius: 10,
        width: 250,
        height: 60,
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center'

    },

    iconButton: {
        color: '#fff',
        alignSelf: 'center',
        width: 28,
        marginTop: 3

    },

    txtButton: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
        marginBottom: 4,
        marginTop: 3

    }

});