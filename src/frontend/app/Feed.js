import React, { useContext } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PostContext } from '../context/PostContext';
import Footer from '../components/Footer';
import { MaterialIcons } from '@expo/vector-icons';

export default function Feed({ navigation }) {
  const contexto = useContext(PostContext);
  const posts = contexto?.posts || [];

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <MaterialIcons name="arrow-back" size={24} color="#3d4420" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      {/* Conteúdo */}
      <View style={styles.content}>
        {posts.length === 0 ? (
          <View style={styles.emptyView}>
            <Text style={styles.emptyText}>Nenhum post ainda. Poste uma imagem!</Text>
          </View>
        ) : (
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.postCard}>
                <Image source={{ uri: item.imagem }} style={styles.image} />
                <Text style={styles.description}>{item.descricao}</Text>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        )}
      </View>

      {/* Rodapé */}
      <Footer navigation={navigation} active="feed" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  backText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#3d4420',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  postCard: {
    marginBottom: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fafafa',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
});
