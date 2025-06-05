import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Footer from '../components/Footer';

export default function Notificacoes({ navigation }) {
  const [notifications, setNotifications] = useState([
    { id: '1', text: 'Venha realizar mais receitas com o nosso App', expanded: false },
    { id: '2', text: 'Venha realizar mais receitas com o nosso App', expanded: false },
    { id: '3', text: 'Venha realizar mais receitas com o nosso App', expanded: false },
    { id: '4', text: 'Venha realizar mais receitas com o nosso App', expanded: false },
    { id: '5', text: 'Venha realizar mais receitas com o nosso App', expanded: false },
    { id: '6', text: 'Venha realizar mais receitas com o nosso App', expanded: false },
  ]);

  const toggleExpand = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, expanded: !notif.expanded } : notif
      )
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.notificationCard}>
      <View style={styles.notificationHeader}>
        <Feather name={item.expanded ? "chevron-up" : "chevron-down"} size={20} color="#3d4420" />
        <Text style={styles.notificationText}>{item.text}</Text>
      </View>
      {item.expanded && (
        <Text style={styles.notificationDetail}>
          Aproveite novas receitas, compartilhe com seus amigos e mantenha-se saudável com o nosso app!
        </Text>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#3d4420" />
        </TouchableOpacity>
        <Text style={styles.logo}>green</Text>
        <View style={{ width: 24 }} /> {/* Espaço para alinhamento */}
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
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationText: {
    color: '#3d4420',
    marginLeft: 8,
    fontWeight: 'bold',
    flex: 1,
  },
  notificationDetail: {
    marginTop: 8,
    color: '#666',
    fontSize: 13,
  },
});
