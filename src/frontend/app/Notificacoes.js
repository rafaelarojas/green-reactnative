import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Footer from '../components/Footer';

export default function Notificacoes({ navigation }) {
  const notifications = [
    { id: '1', text: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '2', text: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '3', text: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '4', text: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '5', text: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '6', text: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.notificationText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#3d4420" />
        </TouchableOpacity>
        <Text style={styles.logo}>green</Text>
        <View style={{ width: 24 }} /> {/* Espaço para alinhar */}
      </View>

      {/* Título */}
      <Text style={styles.title}>Notificações</Text>

      {/* Lista de Notificações */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />

      {/* Footer */}
      <Footer navigation={navigation} active="notificacoes" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d4420',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3d4420',
    textAlign: 'center',
    marginVertical: 12,
  },
  listContent: {
    paddingBottom: 80,
  },
  notificationCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 8,
    padding: 12,
    elevation: 2,
  },
  notificationText: {
    color: '#666',
  },
});
