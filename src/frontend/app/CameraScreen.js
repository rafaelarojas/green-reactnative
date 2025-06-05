import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function CameraScreen({ navigation }) {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [descricaoImagem, setDescricaoImagem] = useState('');
  const [precoImagem, setPrecoImagem] = useState('');
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const abrirCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Permissão para acessar a câmera negada.');
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!resultado.canceled) {
      setImagemSelecionada(resultado.assets[0].uri);
      setModalVisivel(true);
    }
  };

  const adicionarImagem = () => {
    if (!descricaoImagem.trim() || !precoImagem.trim()) {
      Alert.alert('Erro', 'Por favor, preencha a descrição e o preço.');
      return;
    }

    navigation.navigate('Post', { 
      photoUri: imagemSelecionada, 
      descricao: descricaoImagem, 
      preco: precoImagem 
    });

    setDescricaoImagem('');
    setPrecoImagem('');
    setImagemSelecionada(null);
    setModalVisivel(false);

    Alert.alert('Sucesso', 'Imagem adicionada com sucesso!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoFlutuante}
        onPress={abrirCamera}
      >
        <Ionicons name="camera" size={28} color="white" />
      </TouchableOpacity>

      {modalVisivel && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {imagemSelecionada && (
              <Image 
                source={{ uri: imagemSelecionada }} 
                style={{ width: '100%', height: 200, borderRadius: 8, marginBottom: 10 }} 
              />
            )}
            <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Descrição da imagem:</Text>
            <TextInput
              value={descricaoImagem}
              onChangeText={setDescricaoImagem}
              placeholder="Digite uma descrição"
              style={styles.input}
            />

            <Text style={{ marginTop: 10, marginBottom: 5, fontWeight: 'bold' }}>Preço:</Text>
            <TextInput
              value={precoImagem}
              onChangeText={setPrecoImagem}
              placeholder="Digite o valor (ex: 99.90)"
              keyboardType="numeric"
              style={styles.input}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <TouchableOpacity onPress={() => setModalVisivel(false)}>
                <Text style={{ color: 'red' }}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={adicionarImagem}>
                <Text style={{ color: 'green' }}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5'
  },
  botaoFlutuante: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
});
