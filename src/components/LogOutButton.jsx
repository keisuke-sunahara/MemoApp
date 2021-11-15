import React, { useCallback } from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    Alert.alert('ログアウトします', 'よろしいですか？', [
      {
        text: 'キャンセル',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {
          firebase.auth().signOut()
            .then(() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'MemoList' }],
              });
            })
            .catch(() => {
              Alert.alert('ログアウトに失敗しました');
            });
        },
      },
    ]);
  }, []);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
