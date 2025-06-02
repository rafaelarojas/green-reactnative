import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Footer from '../components/Footer';

export default function Configuracoes({ navigation }) {
  const [nome, setNome] = useState('João Silva');
  const [email, setEmail] = useState('joao@example.com');
  const [senha, setSenha] = useState('******');

  const handleAlterar = () => {
    // Aqui você pode implementar a lógica para alterar os dados
    console.log('Alterações salvas:', { nome, email, senha });
    alert('Dados alterados com sucesso!');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#3d4420" />
        </TouchableOpacity>
        <Text style={styles.logo}>green</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Ícone do usuário */}
      <View style={styles.avatarContainer}>
        <Feather name="user" size={48} color="#3d4420" style={styles.avatar} />
      </View>

      {/* Campos de texto */}
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
      />

      {/* Botão Alterar */}
      <TouchableOpacity style={styles.button} onPress={handleAlterar}>
        <Text style={styles.buttonText}>Alterar</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Footer navigation={navigation} active="configuracoes" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d4420',
    textAlign: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatar: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 50,
    elevation: 4,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    elevation: 2,
  },
  button: {
    backgroundColor: '#3d4420',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
