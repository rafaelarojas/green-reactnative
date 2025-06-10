import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';
import ForgotPassword from './ForgotPassword';

const BASE_URL = 'http://10.0.2.2:8000';

export default function EnterEmail({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSend = async () => {
    if (!email.includes('@')) {
      return Alert.alert('Erro', 'Digite um e-mail válido.');
    }

    try {
      await axios.post(`${BASE_URL}/send-otp`, { email });
      Alert.alert('Sucesso', 'Código enviado para o e-mail.');
      navigation.navigate('ForgotPassword', { email });
    } catch (error) {
      console.log(error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível enviar o código.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>green</Text>
      <Text style={styles.title}>Recuperar senha</Text>
      <Text style={styles.subtitle}>Digite seu e-mail para receber um código</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={ForgotPassword}>
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#2e4e1f', alignSelf: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginTop: 32 },
  subtitle: { fontSize: 14, color: '#444', marginBottom: 24 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 16 },
  button: { backgroundColor: '#2e4e1f', padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16 },
});
