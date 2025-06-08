import React, { useContext } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { PostContext } from '../context/PostContext';

export default function Feed() {
  const contexto = useContext(PostContext);
  const posts = contexto?.posts || [];

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {posts.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Nenhum post ainda. Poste uma imagem!</Text>
        </View>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}>
              <Image source={{ uri: item.imagem }} style={{ width: '100%', height: 200, borderRadius: 5 }} />
              <Text style={{ marginTop: 8 }}>{item.descricao}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
