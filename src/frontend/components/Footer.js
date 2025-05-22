import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer({ navigation, active }) {
  const iconColor = (name) => name === active ? '#2e4e1f' : '#3d4420';

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="grid-outline" size={24} color={iconColor('home')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Ionicons name="list" size={24} color={iconColor('feed')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <Ionicons name="heart-outline" size={24} color={iconColor('favorites')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Ionicons name="notifications-outline" size={24} color={iconColor('notifications')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={24} color={iconColor('settings')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
};
