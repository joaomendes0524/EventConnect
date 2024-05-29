import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const dummyPosts = [
  {
    id: '1',
    userId: 'user123',
    image: require('../assets/imagens/image-background.jpeg'),
    description: 'Meu evento incrível!',
    date: '2023-05-21',
    likes: 10,
    comments: 2,
  },
  {
    id: '2',
    userId: 'user123',
    image: require('../assets/imagens/image-background.jpeg'),
    description: 'Meu evento incrível!',
    date: '2023-05-21',
    likes: 16,
    comments: 7,
  },
  {
    id: '3',
    userId: 'user123',
    image: require('../assets/imagens/image-background.jpeg'),
    description: 'Meu evento incrível!',
    date: '2023-05-21',
    likes: 10,
    comments: 2,
  },
  // Adicione mais postagens fictícias conforme necessário
];

export default function MyPostsScreen() {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Filtra as postagens para mostrar apenas as postagens do usuário atual
    const userPosts = dummyPosts.filter(post => post.userId === 'user123');
    setPosts(userPosts);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <View style={styles.interactions}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="thumb-up-outline" size={24} color="#5D21BC" />
            <Text style={styles.iconText}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="comment-outline" size={24} color="#5D21BC" />
            <Text style={styles.iconText}>{item.comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <LinearGradient style={styles.linearBackground} colors={['#9D66F6', '#8148DC', '#5D21BC']}> */}
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      {/* </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  linearBackground: {
    flex: 1,
    borderRadius: 15,
  },
  listContent: {
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#6100FF',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
    // shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 2,
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
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#5D21BC',
  },
});
