import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:8000';

export default function ForgotPassword({ navigation, route }) {
  const email = route?.params?.email || '';

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef([]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    sendCode();
  }, []);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const sendCode = async () => {
    setTimer(30);
    try {
      const response = await axios.post(`${BASE_URL}/send-otp`, { email });
      console.log('Código enviado:', response.data);
      Alert.alert('Sucesso', 'Código enviado para o email!');
    } catch (error) {
      console.log('Erro ao enviar código:', error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível enviar o código.');
    }
  };

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleContinue = async () => {
    const finalCode = code.join('');
    try {
      const response = await axios.post(`${BASE_URL}/verify-otp`, { email, otp: finalCode });
      console.log('Verificação:', response.data);
      Alert.alert('Sucesso', 'Código verificado!');
      navigation.navigate('ResetPassword', { email }); // Passe o email adiante
    } catch (error) {
      console.log('Erro ao verificar código:', error.response?.data || error.message);
      Alert.alert('Erro', 'Código inválido!');
    }
  };

  const isComplete = code.every(c => c !== '');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#2e4e1f" />
      </TouchableOpacity>

      <Text style={styles.logo}>green</Text>
      <Text style={styles.title}>Esqueci minha{'\n'}senha</Text>
      <Text style={styles.subtitle}>
        Insira o código de seis dígitos enviado para{'\n'}{email}
      </Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={el => (inputsRef.current[index] = el)}
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={text => handleChange(text, index)}
            value={digit}
          />
        ))}
      </View>

      <Text style={styles.timerText}>
        Não recebeu o código?{' '}
        {timer > 0 ? (
          <Text>00:{timer < 10 ? `0${timer}` : timer}</Text>
        ) : (
          <Text style={styles.resend} onPress={sendCode}>Reenviar</Text>
        )}
      </Text>

      <TouchableOpacity
        onPress={handleContinue}
        style={[styles.button, !isComplete && styles.buttonDisabled]}
        disabled={!isComplete}
      >
        <Text style={[styles.buttonText, !isComplete && styles.buttonTextDisabled]}>Continuar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#2e4e1f', alignSelf: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginTop: 32 },
  subtitle: { fontSize: 14, color: '#444', marginBottom: 24, textAlign: 'center' },
  codeContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  codeInput: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 8,
    width: 48,
    height: 48,
    fontSize: 22,
    textAlign: 'center',
  },
  timerText: { textAlign: 'center', fontSize: 14, marginBottom: 32 },
  resend: { color: '#0e6462', textDecorationLine: 'underline' },
  button: { backgroundColor: '#2e4e1f', borderRadius: 12, paddingVertical: 16, alignItems: 'center' },
  buttonDisabled: { backgroundColor: '#e0e0e0' },
  buttonText: { color: '#fff', fontSize: 16 },
  buttonTextDisabled: { color: '#999' },
});
