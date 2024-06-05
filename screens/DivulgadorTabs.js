import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CreateEvent from './CreateEvent';
import EditEvents from './EditEvents';
import ProfileDivulgador from './ProfileDivulgador';
import MyPostsScreen from './MyPostsScreen';

const Tab = createBottomTabNavigator();

export default function DivulgadorTabs() {
  return (

    <Tab.Navigator initialRouteName="CRIAR EVENTO"
      screenOptions={{
        tabBarActiveTintColor: '#6100FF',
        tabBarInactiveTintColor: '#FFFFFF', 
        tabBarStyle: {
          backgroundColor: '#6100FF',
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="EDITAR EVENTO"
        component={EditEvents}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: '#6100FF',
          },

          headerLeftLabelVisible: false,
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <MaterialCommunityIcons name="application-edit-outline" color={focused ? '#6100FF' : color} size={focused ? size + 8 : size} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="CRIAR EVENTO"
        component={CreateEvent}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: '#6100FF',
          },

          headerLeftLabelVisible: false,
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <MaterialCommunityIcons name="plus" color={focused ? '#6100FF' : color} size={focused ? size + 8 : size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MINHAS POSTAGENS"
        component={MyPostsScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: '#6100FF',
          },

          headerLeftLabelVisible: false,
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <MaterialCommunityIcons name="post" color={focused ? '#6100FF' : color} size={focused ? size + 8 : size} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="PERFIL"
        component={ProfileDivulgador}
        options={{
          title: "PERFIL",
          headerStyle: {
            backgroundColor: '#6100FF',
          },

          headerLeftLabelVisible: false,
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <MaterialCommunityIcons name="account" color={focused ? '#6100FF' : color} size={focused ? size + 8 : size} />
            </View>
          ),
        }}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15, // Ajuste conforme necessário
    padding: 5,
    paddingHorizontal: 15,
  },
});