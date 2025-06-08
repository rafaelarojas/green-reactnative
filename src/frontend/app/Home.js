import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

export default function Home({ navigation, route }) {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const [skip, setSkip] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  const PAGE_SIZE = 20;

  const fetchRecipes = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    try {
      const res = await fetch(`https://dummyjson.com/recipes?limit=${PAGE_SIZE}&skip=${skip}`);
      const json = await res.json();

      if (json.recipes.length > 0) {
        setRecipes(prev => [...prev, ...json.recipes]);
        setSkip(prev => prev + PAGE_SIZE);
        if (json.recipes.length < PAGE_SIZE) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (route?.params?.newLogin) {
      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 5000);
    }
  }, [route?.params]);

  useEffect(() => {
    if (showWelcome) {
      Alert.alert('Bem-vindo!', 'Confira as novas receitas e aproveite para cozinhar algo delicioso hoje!');
    }
  }, [showWelcome]);

  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 24 }} />
        <Text style={styles.logo}>green</Text>
        <View style={{ width: 24 }} />
      </View>

      <SearchBar search={search} setSearch={setSearch} />

      <FlatList
        data={recipes.filter(recipe => recipe.name.toLowerCase().includes(search.toLowerCase()))}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleItem(item.id)}>
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
              <Text style={styles.title}>{item.name}</Text>

              <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                  <FontAwesome name="star" size={16} color="#f5c518" />
                  <Text style={styles.infoText}>{item.rating}</Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.infoItem}>
                  <MaterialCommunityIcons name="fire" size={16} color="#f97316" />
                  <Text style={styles.infoText}>{item.caloriesPerServing} kcal</Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.infoItem}>
                  <MaterialIcons name="access-time" size={16} color="#0ea5e9" />
                  <Text style={styles.infoText}>
                    {item.prepTimeMinutes + item.cookTimeMinutes} mins
                  </Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.infoItem}>
                  <MaterialCommunityIcons name="chef-hat" size={16} color="#10b981" />
                  <Text style={styles.infoText}>{item.difficulty}</Text>
                </View>
              </View>

              {expandedItems[item.id] && (
                <ScrollView style={styles.details}>
                  <Text style={styles.sectionTitle}>Ingredientes:</Text>
                  {item.ingredients.map((ingredient, idx) => (
                    <Text key={idx} style={styles.text}>• {ingredient}</Text>
                  ))}

                  <Text style={styles.sectionTitle}>Instruções:</Text>
                  {item.instructions.map((step, idx) => (
                    <Text key={idx} style={styles.text}>{idx + 1}. {step}</Text>
                  ))}

                  <Text style={styles.text}>Porções: {item.servings}</Text>
                </ScrollView>
              )}
            </View>
          </TouchableOpacity>
        )}
        onEndReached={fetchRecipes}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loadingMore ? <ActivityIndicator size="large" /> : null}
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
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  image: { width: '100%', height: 200, borderRadius: 6, marginBottom: 10 },
  details: { marginTop: 10 },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
    color: '#2b8a3e',
  },
  text: { fontSize: 14, marginBottom: 4 },

  infoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fafafa',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  infoText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#374151',
  },
  separator: {
    width: 1,
    height: 16,
    backgroundColor: '#d1d5db',
    marginHorizontal: 8,
  },
});
