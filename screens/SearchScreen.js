import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Dados fictícios de eventos
const dummyEvents = [
  {
    id: '1',
    userId: 'user123',
    image: require('../assets/imagens/image-background.jpeg'),
    description: 'Evento de Música',
    date: '2023-05-21',
  },
  {
    id: '2',
    userId: 'user456',
    image: require('../assets/imagens/image-background.jpeg'),
    description: 'Festa na Praia',
    date: '2023-06-15',
  },
  {
    id: '3',
    userId: 'user789',
    image: require('../assets/imagens/image-background.jpeg'),
    description: 'Workshop de Tecnologia',
    date: '2023-07-10',
  },
  // Adicione mais eventos fictícios conforme necessário
];

export default function SearchScreen() {
  const [keyword, setKeyword] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(dummyEvents);
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setKeyword(text);
    if (text) {
      const filtered = dummyEvents.filter(event =>
        event.description.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(dummyEvents);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar eventos..."
        value={keyword}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredEvents}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  searchInput: {
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#F9F9F9',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#6100FF',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
  },
});
