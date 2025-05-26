import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Footer from '../components/Footer';

export default function Favoritos({ navigation }) {
  const favoritos = [
    { id: '1', title: 'Receita 1', description: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '2', title: 'Receita 2', description: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '3', title: 'Receita 3', description: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '4', title: 'Receita 4', description: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '5', title: 'Receita 5', description: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
      </View>
      <AntDesign name="heart" size={24} color="#3d4420" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#3d4420" />
        </TouchableOpacity>
        <Text style={styles.logo}>green</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.title}>Favoritos</Text>

      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <Footer navigation={navigation} active="favoritos" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: { fontSize: 20, fontWeight: 'bold', color: '#3d4420' },
  title: { fontSize: 18, fontWeight: 'bold', color: '#3d4420', marginBottom: 12 },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#3d4420' },
  cardDesc: { color: '#666', marginTop: 4 },
});
