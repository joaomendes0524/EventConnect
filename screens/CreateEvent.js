import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function CreateEvent({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.vector}
                source={require('../assets/imagens/Vector 2.png')}
            />

            <View style={{ zIndex: 1 }}>
                <Image
                    style={styles.icon}
                    source={require('../assets/imagens/app-icon1.png')}
                />
            </View>

            <View style={styles.bgColor}>

                {/*TITULO DE CADASTRO*/}
                {<Text style={styles.texto}>Crie e divulgue seu evento aqui</Text>}

                {/*TEXTINPUT DE NOME*/}
                <View style={styles.containerTxtInput}>
                    <TextInput style={styles.txtInput} placeholderTextColor={'#FFF'} backgroundColor={'#0A0034'} placeholder='NOME DO EVENTO' keyboardType='email-address' />
                </View>
                {/*TEXTINPUT DE LOCAL*/}
                <View style={styles.containerTxtInput}>
                    <TextInput style={styles.txtInput} placeholderTextColor={'#FFF'} backgroundColor={'#0A0034'} placeholder='ENDEREÇO' keyboardType='email-address' />
                </View>
                {/*TEXTINPUT DE DATA E HORÁRIO*/}
                <View style={styles.containerTxtInput}>
                    <View>
                        <TextInput style={styles.txtInput2} placeholderTextColor={'#FFF'} backgroundColor={'#0A0034'} placeholder='DATA' keyboardType='numeric' />
                    </View>
                    <View>
                        <TextInput style={styles.txtInput2} placeholderTextColor={'#FFF'} backgroundColor={'#0A0034'} placeholder='HORÁRIO' keyboardType='email-address' />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    txtInput2: {
        color: 'white',
        minWidth: '45%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginRight: 20,
        borderBottomColor: '#FFF',
        borderBottomWidth: 1,
    },
    txtInput: {
        color: 'white',
        width: '100%',
        borderBottomColor: '#FFF',
        borderBottomWidth: 1,
    },
    containerTxtInput: {
        // width: '90%',
        // borderBottomColor: '#FFF',
        // borderBottomWidth: 1,
        // backgroundColor: '#0A0034',
        fontSize: 16,
        // width: '100%',
        // alignSelf: 'flex-start',
        flexDirection: 'row',
        paddingBottom: 8,
        paddingLeft: 10,
        // alignItems: 'center',
        marginTop: 15,
    },
    texto: {
        marginTop: 70,
        fontSize: 18,
        fontWeight: '500',
        color: '#FFF',
        marginBottom: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    vector: {
        width: '100%',
        height: '15%',
        alignSelf: 'center'
    },
    icon: {
        position: 'absolute',
        // marginBottom: 50,
        // marginLeft: 110,
        // marginTop: 450,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 170,
        height: 170,
    },
    bgColor: {
        marginTop: 70,
        // marginBottom: 50,
        alignSelf: 'center',
        // alignItems: 'center',
        flex: 1,
        backgroundColor: '#0A0034',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        padding: 20,
        width: '90%',
    },
    button: {
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: '#6100FF',
        padding: 10,
        borderRadius: 20,
        width: '80%',
        marginBottom: 10,
        marginLeft: 60,
        marginRight: 60
    },
    txtButton: {
        padding: 5,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
});