import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CancelLogIn() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => { navigation.reset({ index: 0, routes: [{ name: 'MemoList' }] }); }}
      style={styles.container}
    >
      <Feather name="x" size={15} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginRight: 8,
  },
});
