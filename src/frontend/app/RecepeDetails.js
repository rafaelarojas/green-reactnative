import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RecipeDetails({ route, navigation }) {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3d4420" />
        </TouchableOpacity>
        <Text style={styles.logo}>green</Text>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="#3d4420" />
        </TouchableOpacity>
      </View>

      {/* Imagem */}
      <Image source={recipe.image} style={styles.image} />

      {/* Info */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Ionicons name="star" size={16} color="#f5a623" />
          <Text style={styles.infoText}>4.8</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="flame-outline" size={16} color="#ff6347" />
          <Text style={styles.infoText}>300kcal</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="time-outline" size={16} color="#00bcd4" />
          <Text style={styles.infoText}>20mins</Text>
        </View>
      </View>

      {/* Título */}
      <Text style={styles.title}>{recipe.title}</Text>

      {/* Ingredientes e preparo */}
      <Text style={styles.sectionTitle}>Massa:</Text>
      <Text style={styles.text}>
        • 2 c. sopa farinha de aveia{'\n'}
        • 1 c. sopa iogurte desnatado{'\n'}
        • 1 ovo{'\n'}
        • 1/4 c. chá fermento, sal e orégano
      </Text>

      <Text style={styles.sectionTitle}>Cobertura:</Text>
      <Text style={styles.text}>
        • 2 c. sopa molho de tomate{'\n'}
        • 40g queijo cottage ou ricota{'\n'}
        • 100g peito de frango ou presunto magro{'\n'}
        • Tomate, cebola, folhas verdes{'\n'}
        • Orégano e manjericão a gosto
      </Text>

      <Text style={styles.sectionTitle}>Preparo:</Text>
      <Text style={styles.text}>
        1. Misture os ingredientes da massa.{'\n'}
        2. Despeje na frigideira antiaderente e cozinhe em fogo baixo (3-4 min cada lado).{'\n'}
        3. Adicione a cobertura, tampe e aqueça até o queijo derreter.
      </Text>
    </ScrollView>
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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 4,
    color: '#3d4420',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3d4420',
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 8,
    color: '#3d4420',
  },
  text: {
    color: '#333',
    marginBottom: 8,
  },
});
