import { SafeAreaView, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SelectProfile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <Image
        style={styles.icon}
        source={require('../assets/imagens/app-icon1.png')}
      />

      {/*SAUDAÇÕES*/}

      <View style={styles.bgColor}>
        {<Text style={styles.texto}>Bem vindo ao EVENT CONNECT!
          {'\n'}
          Qual tipo de perfil deseja acessar?</Text>}

        {/*BOTAO DIVULGADOR*/}
        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.navigate('SelectDivulgador');
          }}>
          <MaterialIcons style={styles.iconButton} name='account-tie-voice' size={40} color={'#FFF'} />
          <Text style={styles.txtButton}>Divulgador</Text>
          <MaterialIcons style={styles.iconButton} name='chevron-right' marginLeft={40} size={40} color={'#FFF'} />
        </TouchableOpacity>

        {/*BOTAO PARTICIPANTE*/}
        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.navigate('SelectParticipante');
          }}>
          <MaterialIcons style={styles.iconButton} name='account-search' size={40} color={'#FFF'} />
          <Text style={styles.txtButton}>Participante</Text>
          <MaterialIcons style={styles.iconButton} name='chevron-right' marginLeft={30} size={40} color={'#FFF'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bgImage: {
    width: 450,
    height: 450,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    marginBottom: 50,
    marginLeft: 105,
    marginTop: 70,
    alignItems: 'center',
    width: 180,
    height: 180
  },
  bgColor: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0A0034',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
  },
  texto: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 40,
    color: '#FFF',
  },
  button: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 60,
    marginRight: 60
  },
  txtButton: {
    marginLeft: 50,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6100FF',
    marginBottom: 5,
  },
  iconButton: {
    color: '#6100FF',
  }
});
