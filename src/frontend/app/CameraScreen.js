import React, { useState, useContext } from 'react';
import { View, Button, Image, Modal, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { PostContext } from '../context/PostContext';

export default function CameraScreen({ navigation }) {
  const { adicionarPost } = useContext(PostContext);

  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [descricao, setDescricao] = useState('');

  const abrirCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Permissão para acessar a câmera negada.');
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!resultado.canceled) {
      setImagemSelecionada(resultado.assets[0].uri);
      setModalVisivel(true);
    }
  };

  const abrirGaleria = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Permissão para acessar a galeria negada.');
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!resultado.canceled) {
      setImagemSelecionada(resultado.assets[0].uri);
      setModalVisivel(true);
    }
  };

  const enviarImagem = () => {
    if (adicionarPost) {
      adicionarPost(imagemSelecionada, descricao);
      setModalVisivel(false);
      setImagemSelecionada(null);
      setDescricao('');
      navigation.navigate('Feed');
    } else {
      Alert.alert('Erro', 'Contexto de post não disponível');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Abrir Câmera" onPress={abrirCamera} />
      <Button title="Abrir Galeria" onPress={abrirGaleria} />

      <Modal visible={modalVisivel} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {imagemSelecionada && (
            <Image source={{ uri: imagemSelecionada }} style={{ width: 200, height: 200 }} />
          )}
          <TextInput
            placeholder="Digite a descrição"
            value={descricao}
            onChangeText={setDescricao}
            style={{ borderWidth: 1, width: '80%', marginVertical: 10, padding: 5 }}
          />
          <Button title="Enviar" onPress={enviarImagem} />
          <Button title="Cancelar" onPress={() => setModalVisivel(false)} />
        </View>
      </Modal>
    </View>
  );
}
