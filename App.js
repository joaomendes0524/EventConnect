import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectProfile from "./screens/SelectProfile";
import SelectDivulgador from "./screens/SelectDivulgador";
import SelectParticipante from "./screens/SelectParticipante";
import CreateDivulgador from "./screens/CreateDivulgador";
import CreateParticipante from "./screens/CreateParticipante";
import LoginDivulgador from "./screens/LoginDivulgador";
import LoginParticipante from "./screens/LoginParticipante";
import RedefPassword from "./screens/RedefinePassword";
import ForgotPassword from "./screens/ForgotPassword";
import MainTabs from './screens/MainTabs';
import DivulgadorTabs from './screens/DivulgadorTabs'
import EditMyEvent from './screens/EditMyEvent'
// import CreateEvent from "./screens/CreateEvent";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectProfile">

        <Stack.Screen
          name="SelectProfile" // referencia a tela para acessar ela
          component={SelectProfile} // é a tela em si
          options={{
            title: "TIPO DE PERFIL",
            headerStyle: {
              backgroundColor: '#6100FF'
            },
            headerTintColor: '#FFF',
          }} // opções para colocar na tela
        />

        <Stack.Screen
          name="SelectDivulgador"
          component={SelectDivulgador}
          options={{
            title: "SOU DIVULGADOR",
            headerStyle: {
              backgroundColor: '#6100FF'
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="SelectParticipante"
          component={SelectParticipante}
          options={{
            title: "SOU PARTICIPANTE",
            headerStyle: {
              backgroundColor: '#6100FF'
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="CreateDivulgador"
          component={CreateDivulgador}
          options={{
            title: "CRIAR PERFIL",
            headerStyle: {
              backgroundColor: '#6100FF'
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="CreateParticipante"
          component={CreateParticipante}
          options={{
            title: "CRIAR PERFIL",
            headerStyle: {
              backgroundColor: '#6100FF'
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="LoginDivulgador"
          component={LoginDivulgador}
          options={{
            title: "LOGIN",
            headerStyle: {
              backgroundColor: '#6100FF'
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="LoginParticipante"
          component={LoginParticipante}
          options={{
            title: "LOGIN",
            headerStyle: {
              backgroundColor: '#6100FF'
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="RedefPassword"
          component={RedefPassword}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: '#6100FF',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: '#6100FF',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{
            headerShown: false, // Esconde o cabeçalho padrão para as abas
          }}
        />

        <Stack.Screen
          name="DivulgadorTabs"
          component={DivulgadorTabs}
          options={{
            headerShown: false, // Esconde o cabeçalho padrão para as abas
          }}
        />

        <Stack.Screen
          name="EditMyEvent"
          component={EditMyEvent}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: '#6100FF',
            },
            headerTintColor: '#fff',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}