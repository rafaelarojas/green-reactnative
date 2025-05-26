import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';
import { FeedContext } from '../context/FeedContext';

export default function PostScreen({ route, navigation }) {
  const { photoUri } = route.params;
  const [caption, setCaption] = useState('');
  const { setPosts } = useContext(FeedContext);

  const handlePost = () => {
    setPosts(prev => [...prev, { photoUri, caption }]);
    navigation.navigate('Feed');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUri }} style={styles.image} />
      <TextInput
        placeholder="Escreva uma legenda..."
        value={caption}
        onChangeText={setCaption}
        style={styles.input}
      />
      <Button title="Postar" onPress={handlePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 300, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20 },
});
