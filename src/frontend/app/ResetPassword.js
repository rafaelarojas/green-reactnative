import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:8000';

export default function ResetPassword({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const email = 'rafaelacrisr@gmail.com';

  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  const handleContinue = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/reset-password`, { email, senha: password });
      console.log('Senha redefinida:', response.data);
      Alert.alert('Sucesso', 'Senha redefinida com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.log('Erro ao redefinir senha:', error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível redefinir a senha.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#2e4e1f" />
      </TouchableOpacity>

      <Text style={styles.logo}>green</Text>
      <Text style={styles.title}>Crie uma nova{'\n'}senha</Text>
      <Text style={styles.subtitle}>Insira uma nova senha para sua conta</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="senha nova"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="repita a senha nova"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, !passwordsMatch && styles.buttonDisabled]}
        disabled={!passwordsMatch}
        onPress={handleContinue}
      >
        <Text style={[styles.buttonText, !passwordsMatch && styles.buttonTextDisabled]}>
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#2e4e1f', alignSelf: 'center', marginTop: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginTop: 32 },
  subtitle: { fontSize: 14, marginBottom: 24 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#e5e5e5', borderRadius: 8, paddingHorizontal: 16, marginBottom: 16 },
  input: { flex: 1, paddingVertical: 14, fontSize: 16 },
  button: { backgroundColor: '#2e4e1f', borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginTop: 32 },
  buttonDisabled: { backgroundColor: '#e0e0e0' },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  buttonTextDisabled: { color: '#999' },
});
