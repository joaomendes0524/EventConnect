import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const followedProfiles = [
  { id: '1', name: 'Barzinho do ze', avatar: require('../assets/imagens/image-background.jpeg') },
  { id: '2', name: 'forrozinho', avatar: require('../assets/imagens/image-background.jpeg') },
  { id: '3', name: 'forrozinho 2', avatar: require('../assets/imagens/image-background.jpeg') },
  { id: '4', name: 'forrozinho 3', avatar: require('../assets/imagens/image-background.jpeg') },
  { id: '5', name: 'forrozinho 4', avatar: require('../assets/imagens/image-background.jpeg') },
  { id: '6', name: 'forrozinho 5', avatar: require('../assets/imagens/image-background.jpeg') },
  { id: '7', name: 'forrozinho 6', avatar: require('../assets/imagens/image-background.jpeg') },
  // Adicione mais perfis conforme necessário
];

const posts = {
  '1': [
    { id: '1-1', user: 'Barzinho do ze', avatar: require('../assets/imagens/image-background.jpeg'), image: require('../assets/imagens/image-background.jpeg'), description: 'Post 1 description' },
    // Adicione mais posts para o usuário 1
  ],
  '2': [
    { id: '2-1', user: 'forrozinho', avatar: require('../assets/imagens/image-background.jpeg'), image: require('../assets/imagens/image-background.jpeg'), description: 'Post 2 description' },
    // Adicione mais posts para o usuário 2
  ],
  // Adicione mais posts para os outros usuários
};

export default function FollowingScreen({ navigation }) {
  const [selectedProfile, setSelectedProfile] = useState(followedProfiles[0].id);

  const renderProfileItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedProfile(item.id)}>
      <Image source={item.avatar} style={styles.profileAvatar} />
      <Text style={styles.profileName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderPostItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{item.user}</Text>
        </View>
        <LinearGradient style={styles.followButton} colors={['#9D66F6', '#8148DC', '#5D21BC']}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile', { userId: item.id })}>
            <Text style={styles.followButtonText}>Seguindo</Text>
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
      <Text style={styles.likes}>Liked by Huge and others 1,900</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={followedProfiles}
        renderItem={renderProfileItem}
        keyExtractor={item => item.id}
        horizontal
        style={styles.profileList}
      />
      <FlatList
        data={posts[selectedProfile]}
        renderItem={renderPostItem}
        keyExtractor={item => item.id}
        style={styles.postList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  profileList: {
    maxHeight: 100,
    backgroundColor: '#6100FF',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 15,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
    
  },
  profileName: {
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    
  },
  postList: {
    flex: 1,
  },
  card: {
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'center',
    textAlign: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
  },
  followButton: {
    padding: 5,
    borderRadius: 5,
  },
  followButtonText: {
    color: '#FFF',
  },
  description: {
    marginVertical: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  likes: {
    textAlign: 'center',
  },
});
