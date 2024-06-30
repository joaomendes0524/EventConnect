import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ip} from '../ip';

export default function EditEvents({ navigation }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken'); // Recupera o token do AsyncStorage
        if (!token) {
          Alert.alert('Erro', 'Usuário não autenticado');
          navigation.navigate('LoginDivulgador');
          return;
        }

        const response = await axios.get(`http://${ip}:3000/events`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setEvents(response.data);
        } else {
          Alert.alert('Erro', 'Não foi possível carregar os eventos. Tente novamente.');
        }
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao buscar os eventos.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.eventItem}>
      <View style={styles.eventDetails}>
        <Text style={styles.eventName}>{item.title}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
        <Text style={styles.eventDate}>{new Date(item.date).toLocaleDateString()}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('EditMyEvent', { eventId: item.id })}>
        <MaterialCommunityIcons name="chevron-right" size={40} color="#6100FF" />
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando eventos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id ? item.id.toString() : `${Math.random()}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6100FF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  eventDetails: {
    flex: 1,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6100FF',
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
    maxWidth: '90%',
  },
  eventDate: {
    fontSize: 12,
    color: '#999',
  },
});
