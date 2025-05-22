import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SecondaryButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
