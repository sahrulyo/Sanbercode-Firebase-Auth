import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../navigation/AuthContext';
import { EmailAuthCredential } from 'firebase/auth';
import { useLoginController } from './hook/login-controller';

const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useLoginController();

  const handleLogout = () => {
    logout();
    // Navigate to the 'Login' screen after logout
    navigation.reset({
      index: 0,
      routes: [{ name: 'Logout' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {user ? (
        <>
          <Text style={styles.username}>Username: {user.email}</Text>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.notLoggedInContainer}>
          <Text style={styles.notLoggedInText}>You are not logged in.</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  username: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notLoggedInContainer: {
    alignItems: 'center',
  },
  notLoggedInText: {
    marginBottom: 20,
  },
});

export default ProfileScreen;
