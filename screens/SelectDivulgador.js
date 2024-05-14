import { SafeAreaView, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SelectDivulgador({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.imgContainer}>
        <ImageBackground source={require('../assets/imagens/image-background.jpeg')} 
        blurRadius={3} resizeMode="cover" style={styles.bgImage}>
        </ImageBackground>
          {/*ICONE DO APP*/}
          <View style={{ zIndex: 1 }}>
        <Image
            style={styles.icon}
            source={require('../assets/imagens/app-icon1.png')}
          />
          </View>
      </View>

      <View style={styles.bgColor}>
        {/*BOTAO LOGIN*/}
        <LinearGradient style={styles.button}
        colors={['#9D66F6', '#8148DC', '#5D21BC']}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginDivulgador');
          }}>
          <Text style={styles.txtButton}>Login</Text>
        </TouchableOpacity>
        </LinearGradient>

        {/*BOTAO CADASTRAR*/}
        <LinearGradient style={styles.button}
        colors={['#9D66F6', '#8148DC', '#5D21BC']}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateDivulgador');
          }}>
          <Text style={styles.txtButton}>Cadastrar</Text>
        </TouchableOpacity>
        </LinearGradient>
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
    position: 'absolute',
    width: 450,
    height: 450,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#0A0034',
  },
  icon: {
    marginBottom: 50,
    marginLeft: "33%",
    marginTop: 450,
    justifyContent: 'center',
    width: 140,
    height: 140
  },
  bgColor: {
    marginBottom: 50,
    justifyContent: 'center',
    flex: 0.8,
    alignItems: 'center',
    backgroundColor: '#0A0034',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
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
