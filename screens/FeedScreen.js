import React from 'react';
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';


const posts = [
  {
    id: '1',
    user: 'Barzinho do ze',
    followers: '2,445 seguidores',
    avatar: require('../assets/imagens/image-background.jpeg'),
    image: require('../assets/imagens/image-background.jpeg'),
    description: 'Binance Expands Account Statement Function...',
  },
  {
    id: '2',
    user: 'forrozinho',
    followers: '4,340 seguidores',
    avatar: require('../assets/imagens/image-background.jpeg'),
    image: require('../assets/imagens/image-background.jpeg'),
    description: 'Binance Expands Account Statement Function...',
  },
  {
    id: '3',
    user: 'forrozinho 2',
    followers: '4,340 seguidores',
    avatar: require('../assets/imagens/image-background.jpeg'),
    image: require('../assets/imagens/image-background.jpeg'),
    description: 'Binance Expands Account Statement Function...',
  },
  {
    id: '4',
    user: 'forrozinho 3',
    followers: '4,340 seguidores',
    avatar: require('../assets/imagens/image-background.jpeg'),
    image: require('../assets/imagens/image-background.jpeg'),
    description: 'Binance Expands Account Statement Function...',
  },
];

export default function FeedScreen({ navigation }) {
    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <View style={styles.header}>
          <Image source={item.avatar} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>{item.user}</Text>
            <Text style={styles.followers}>{item.followers}</Text>
          </View>
          <LinearGradient style={styles.followButton}
            colors={['#9D66F6', '#8148DC', '#5D21BC']}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile', { userId: item.id })}>
            <Text style={styles.followButtonText}>Seguir</Text>
          </TouchableOpacity>
          </LinearGradient>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PostDetail', { postId: item.id })}>
          <Image source={item.image} style={styles.postImage} />
        </TouchableOpacity>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => {/* Ação de curtir */}}>
            <MaterialCommunityIcons name="thumb-up-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {/* Ação de comentar */}}>
            <MaterialCommunityIcons name="comment-outline" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {/* BOTÃO DE DETALHES DO EVENTO */}}>
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="#000" />
          </TouchableOpacity>
        </View>

      </View>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    card: {
      borderWidth: 1,
      borderColor: '#6100FF',
      margin: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 5,
      elevation: 3,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    userInfo: {
      flex: 1,
      marginLeft: 10,
    },
    username: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    followers: {
      color: '#888',
    },
    followButton: {
      borderRadius: 10,
      padding: 5,
      paddingHorizontal: 15,
    },
    followButtonText: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#fff',
    },
    description: {
      marginBottom: 10,
    },
    postImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
    },
    likes: {
      color: '#888',
    },
    likers: {
      flexDirection: 'row',
      marginTop: 10,
    },
    likerAvatar: {
      width: 30,
      height: 30,
      borderRadius: 15,
      marginRight: 5,
    },
  });
