import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    navigation.navigate('Home'); // Redireciona para Home
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="chevron-back" size={24} color="#2e4e1f" />
      </TouchableOpacity>

      <Text style={styles.logo}>green</Text>

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="senha"
          placeholderTextColor="#888"
          secureTextEntry={secureText}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Ionicons
            name={secureText ? 'eye-off' : 'eye'}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={{
          color: '#2e4e1f',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 24
        }}>
          esqueci minha senha
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          !(email && senha) && styles.buttonDisabled,
        ]}
        disabled={!(email && senha)}
        onPress={handleLogin}
      >
        <Text
          style={[
            styles.buttonText,
            !(email && senha) && styles.buttonTextDisabled,
          ]}
        >
          Entrar
        </Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.link}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  back: {
    marginBottom: 16,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e4e1f',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 16,
    color: '#222',
  },
  input: {
    backgroundColor: '#f6f6f6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  inputPassword: {
    flex: 1,
    fontSize: 16,
  },
  forgot: {
    color: '#2e4e1f',
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: '500',
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#444',
    fontSize: 14,
  },
  link: {
    color: '#0e6462',
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
