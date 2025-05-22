import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from '../components/Footer';

export default function Feed({ navigation }) {
  const posts = [
    { id: '1', title: 'Pizza saudável', image: require('../assets/images/pizza.png') },
    { id: '2', title: 'Hamburger', image: require('../assets/images/pizza.png') },
    { id: '3', title: 'Donuts proteicos', image: require('../assets/images/pizza.png') },
    { id: '4', title: 'Duplo burguer', image: require('../assets/images/pizza.png') },
    { id: '5', title: 'Bolinho de brigadeiro proteico', image: require('../assets/images/pizza.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Ionicons name="person" size={20} color="#2e4e1f" />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={24} color="#3d4420" />
        </TouchableOpacity>
        <Text style={styles.logo}>green</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <Ionicons name="add" size={24} color="#3d4420" />
        </TouchableOpacity>
      </View>

      <Text style={styles.feedTitle}>Meu feed</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {/* Footer Navigation */}
      <Footer navigation={navigation} active="feed" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d4420',
  },
  feedTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
    color: '#3d4420',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 8,
    marginBottom: 12,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    color: '#333',
    flexShrink: 1,
  },
});
