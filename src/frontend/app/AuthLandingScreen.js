import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

export default function AuthLandingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.top}>
        <Text style={styles.logo}>green</Text>
        <Image
          source={require('../assets/images/burguer.png')} 
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.middle}>
        <Text style={styles.title}>Faça sua conta e{'\n'}comece suas receitas!</Text>
      </View>

      <View style={styles.buttons}>
        <PrimaryButton title="Login" onPress={() => navigation.navigate('Login')} />
        <Text style={styles.orText}>ou</Text>
        <PrimaryButton title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'space-between',
  },
  top: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2e4e1f',
    marginBottom: 12,
  },
  image: {
    width: 260,
    height: 260,
  },
  middle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 8,
  },
  buttons: {
    marginBottom: 40,
  },
  orText: {
    textAlign: 'center',
    color: '#555',
    marginVertical: 10,
    fontSize: 14,
  },
});
