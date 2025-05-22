import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/Card';
import Footer from '../components/Footer';

export default function Home({ navigation }) {
  const [search, setSearch] = useState('');

  const recipes = [
    { id: '1', title: 'Receita 1', description: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '2', title: 'Receita 2', description: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '3', title: 'Receita 3', description: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '4', title: 'Receita 4', description: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
    { id: '5', title: 'Receita 5', description: 'Lorem ipsum dolor sit amet, consectetur Lo...' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com logo centralizado */}
      <View style={styles.header}>
        <View style={{ width: 24 }} />
        <Text style={styles.logo}>green</Text>
        <View style={{ width: 24 }} />
      </View>

      <SearchBar search={search} setSearch={setSearch} />

      <FlatList
        data={recipes.filter(r => r.title.toLowerCase().includes(search.toLowerCase()))}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RecipeCard title={item.title} description={item.description} />
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {/* Footer Navigation */}
      <Footer navigation={navigation} active="home" />
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
    marginBottom: 8,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d4420',
    textAlign: 'center',
  },
});
