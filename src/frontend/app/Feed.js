import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { FeedContext } from '../context/FeedContext';

export default function Feed() {
  const { posts } = useContext(FeedContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.photoUri }} style={styles.image} />
            <Text>{item.caption}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  card: { padding: 16, margin: 8, backgroundColor: '#fff', borderRadius: 8 },
  image: { width: '100%', height: 200, borderRadius: 8 },
});
