import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  CheckBox
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [aceitouTermos, setAceitouTermos] = useState(false);

  const handleRegister = () => {
    if (!aceitouTermos) {
      alert('Você precisa concordar com os termos para continuar.');
      return;
    }

    // Aqui você pode chamar sua API de cadastro
    console.log('Cadastrando com:', email, senha);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.logo}>green</Text>

      <Text style={styles.title}>Crie uma nova conta</Text>

      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="senha"
          secureTextEntry={!showSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setShowSenha(!showSenha)}>
          <Ionicons
            name={showSenha ? 'eye-off' : 'eye'}
            size={20}
            color="#777"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={aceitouTermos}
          onValueChange={setAceitouTermos}
        />
        <Text style={styles.checkboxLabel}>Eu concordo com os termos</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: aceitouTermos ? '#2e4e1f' : '#eee' },
        ]}
        onPress={handleRegister}
        disabled={!aceitouTermos}
      >
        <Text
          style={[
            styles.buttonText,
            { color: aceitouTermos ? '#fff' : '#aaa' },
          ]}
        >
          Criar conta
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footerText}>
          Já possui uma conta? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e4e1f',
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#444',
  },
  loginLink: {
    textDecorationLine: 'underline',
    color: '#2e4e1f',
    fontWeight: 'bold',
  },
});
