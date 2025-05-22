import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ResetPasswordS({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  const handleContinue = () => {
    if (passwordsMatch) {
      navigation.navigate('Home');
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
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color="#666"
          />
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
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Ionicons
            name={showConfirmPassword ? 'eye-off' : 'eye'}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, !passwordsMatch && styles.buttonDisabled]}
        disabled={!passwordsMatch}
        onPress={handleContinue}
      >
        <Text
          style={[
            styles.buttonText,
            !passwordsMatch && styles.buttonTextDisabled,
          ]}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e4e1f',
    alignSelf: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 32,
    color: '#222',
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    marginBottom: 24,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#f8f8f8',
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: 14,
  },
  button: {
    backgroundColor: '#2e4e1f',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 32,
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
