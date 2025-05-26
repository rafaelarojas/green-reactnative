import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/Card';
import Footer from '../components/Footer';

export default function Home({ navigation }) {
  const [search, setSearch] = useState('');

  const recipes = [
    { 
      id: '1', 
      title: 'Pizza saudável', 
      description: 'Pizza com aveia, peito de frango e queijo.', 
      image: 'https://i.imgur.com/your-image-link.jpg' 
    },
    { id: '2', title: 'Salada fresca', description: 'Alface, tomate e pepino.', image: 'https://i.imgur.com/your-image-link.jpg' },
    { id: '3', title: 'Smoothie de frutas', description: 'Banana, morango e iogurte.', image: 'https://i.imgur.com/your-image-link.jpg' },
    { id: '4', title: 'Omelete fit', description: 'Ovos, espinafre e ricota.', image: 'https://i.imgur.com/your-image-link.jpg' },
    { id: '5', title: 'Panqueca proteica', description: 'Aveia, banana e whey.', image: 'https://i.imgur.com/your-image-link.jpg' },
  ];

  return (
    <SafeAreaView style={styles.container}>
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
          <RecipeCard
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}
          />
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

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
