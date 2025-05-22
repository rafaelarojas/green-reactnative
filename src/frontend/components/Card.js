import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card({ title, description }) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={1} style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity onPress={() => setLiked(!liked)}>
        <Ionicons
          name={liked ? 'heart' : 'heart-outline'}
          size={24}
          color="#3d4420"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#3d4420',
  },
  description: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});
