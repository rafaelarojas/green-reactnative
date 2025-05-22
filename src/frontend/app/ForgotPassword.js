import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPassword({ navigation }) {
  const [code, setCode] = useState(['', '', '', '']);
  const inputsRef = useRef([]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleContinue = () => {
    if (isComplete) {
      navigation.navigate('ResetPassword'); 
    }
  };

  const resendCode = () => {
    setTimer(30);
    // reenvio do código
  };

  const isComplete = code.every(c => c !== '');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="chevron-back" size={24} color="#2e4e1f" />
      </TouchableOpacity>

      <Text style={styles.logo}>green</Text>

      <Text style={styles.title}>Esqueci minha{'\n'}senha</Text>

      <Text style={styles.subtitle}>
        Insira o código de quatro dígitos enviado no email e*******@gmail.com
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
          <Text style={styles.timerCount}>
            00:{timer < 10 ? `0${timer}` : timer}
          </Text>
        ) : (
          <Text style={styles.resend} onPress={resendCode}>
            Reenviar
          </Text>
        )}
      </Text>

      <TouchableOpacity
          onPress={handleContinue}
          style={[styles.button, !isComplete && styles.buttonDisabled]}
          disabled={!isComplete}
        >
          <Text
            style={[styles.buttonText, !isComplete && styles.buttonTextDisabled]}
          >
            Continue
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  back: { marginBottom: 16 },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e4e1f',
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    color: '#222',
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    marginBottom: 24,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 8,
    width: 56,
    height: 56,
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  timerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginBottom: 32,
  },
  timerCount: {
    fontWeight: 'bold',
    color: '#999',
  },
  resend: {
    fontWeight: 'bold',
    color: '#0e6462',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#2e4e1f',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonTextDisabled: {
    color: '#999',
  },
});
