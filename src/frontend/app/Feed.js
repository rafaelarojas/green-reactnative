import React, { useContext, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';
import { FeedContext } from '../context/FeedContext';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Feed() {
  const { posts, addPost } = useContext(FeedContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [photoUri, setPhotoUri] = useState('');
  const [caption, setCaption] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setPhotoUri(result.uri);
      setModalVisible(true);
    }
  };

  const handlePost = () => {
    if (caption.trim() && photoUri) {
      addPost({ photoUri, caption });
      setModalVisible(false);
      setCaption('');
      setPhotoUri('');
    } else {
      Alert.alert('Erro', 'Adicione um título e uma imagem');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#3d4420" />
        </TouchableOpacity>
        <Text style={styles.title}>Meu feed</Text>
        <TouchableOpacity onPress={pickImage}>
          <Feather name="plus-square" size={24} color="#3d4420" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.photoUri }} style={styles.image} />
            <View style={styles.info}>
              <Ionicons name="person" size={16} color="#3d4420" />
              <Text style={styles.caption}>{item.caption}</Text>
            </View>
          </View>
        )}
      />

      {/* Modal para adicionar título */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicione um título</Text>
            <TextInput
              placeholder="Título da foto"
              style={styles.input}
              value={caption}
              onChangeText={setCaption}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.button} onPress={handlePost}>
                <Text style={styles.buttonText}>Postar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#ccc' }]} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#3d4420' },
  card: { padding: 12, marginBottom: 12, backgroundColor: '#fff', borderRadius: 12, elevation: 2 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  info: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  caption: { marginLeft: 8, fontSize: 14, color: '#333' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 12, width: '80%' },
  modalTitle: { fontSize: 16, marginBottom: 12, fontWeight: 'bold', color: '#3d4420' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8, marginBottom: 12 },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { padding: 10, backgroundColor: '#3d4420', borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
