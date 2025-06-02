import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

export default function SecondaryOnboarding({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.top}>
        <Text style={styles.logo}>green</Text>
        <Image
          source={require('../assets/images/chef2.png')} 
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.middle}>
        <Text style={styles.title}>Explore, faça e{'\n'}compartilhe</Text>
        <Text style={styles.subtitle}>
          Peça itens de forma simples, e{'\n'}
          compartilhe o resultado com seus amigos!
        </Text>
      </View>

      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={styles.dotActive} />
      </View>

      <View style={styles.buttons}>
        <SecondaryButton title="Pular" onPress={() => navigation.replace('Home')} />
        <PrimaryButton title="Próximo" onPress={() => navigation.navigate('AuthLanding')} />
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
    width: 250,
    height: 250,
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
  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 16,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2e4e1f',
    marginHorizontal: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
});
