import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FeedScreen from './FeedScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileParticipante';
import FollowingScreen from './FollowingScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    
    <Tab.Navigator initialRouteName="FEED"
      screenOptions={{
        tabBarActiveTintColor: '#6100FF', // Cor dos ícones e texto ativos
        tabBarInactiveTintColor: '#FFFFFF', // Cor dos ícones e texto inativos
        tabBarStyle: {
          backgroundColor: '#6100FF', // Cor de fundo da barra de navegação
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
        tabBarShowLabel: false, // Remove o texto embaixo dos ícones
      }}
    >
      <Tab.Screen 
        name="SEGUINDO" 
        component={FollowingScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#6100FF',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <MaterialCommunityIcons name="account-group" color={color} size={focused ? size + 8 : size} />
            </View>
          ),
        }} 
      />
      <Tab.Screen 
        name="FEED" 
        component={FeedScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#6100FF',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <MaterialCommunityIcons name="home" color={focused ? '#6100FF' : color} size={focused ? size + 8 : size} />
            </View>
          ),
        }} 
      />
      <Tab.Screen 
        name="PESQUISAR" 
        component={SearchScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#6100FF',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <MaterialCommunityIcons name="magnify" color={color} size={focused ? size + 8 : size} />
            </View>
          ),
        }} 
      />
      <Tab.Screen 
        name="PERFIL" 
        component={ProfileScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#6100FF',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <MaterialCommunityIcons name="account" color={color} size={focused ? size + 8 : size} />
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