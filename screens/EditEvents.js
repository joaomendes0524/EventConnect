import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function EditEvents({ navigation }) {
  const [events, setEvents] = useState([
    { id: '1', name: 'Evento 1', description: 'Descrição do evento 1', date: new Date().toLocaleDateString() },
    { id: '2', name: 'Evento 2', description: 'Descrição do evento 2', date: new Date().toLocaleDateString() },
    { id: '3', name: 'Evento 3', description: 'Descrição do evento 3', date: new Date().toLocaleDateString() },
    { id: '4', name: 'Evento 4', description: 'Descrição do evento 4', date: new Date().toLocaleDateString() },
    { id: '5', name: 'Evento 5', description: 'Descrição do evento 5', date: new Date().toLocaleDateString() },
    // Adicione mais eventos conforme necessário
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.eventItem}>
      <View style={styles.eventDetails}>
        <Text style={styles.eventName}>{item.name}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
        <Text style={styles.eventDate}>{item.date}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('EditMyEvent', { eventId: item.id })}>
        <MaterialCommunityIcons name="chevron-right" size={40} color="#6100FF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
