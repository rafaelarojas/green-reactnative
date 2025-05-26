import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Footer({ navigation, active }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <AntDesign name="home" size={24} color={active === 'home' ? '#3d4420' : '#999'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Feather name="feed" size={24} color={active === 'feed' ? '#3d4420' : '#999'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
        <AntDesign name="heart" size={24} color={active === 'favoritos' ? '#3d4420' : '#999'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Notificacoes')}>
        <Ionicons name="notifications-outline" size={24} color={active === 'notificacoes' ? '#3d4420' : '#999'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
        <MaterialIcons name="settings" size={24} color={active === 'configuracoes' ? '#3d4420' : '#999'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
