import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, useTheme, Text } from 'react-native-paper';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const theme = useTheme();

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Name and Surname</Text>
      <TextInput
        mode="outlined"
        placeholder="Name and surname"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        mode="outlined"
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        mode="outlined"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Text style={styles.label}>Repeat password</Text>
      <TextInput
        mode="outlined"
        placeholder="Password"
        secureTextEntry
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        style={styles.input}
      />

      <Text style={styles.label}>Phone number</Text>
      <TextInput
        mode="outlined"
        placeholder="Phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={() => console.log('Register form confirm')}
        style={styles.registerButton}
        contentStyle={styles.buttonContent}
      >
        Register →
      </Button>

      <Button
        mode="outlined"
        onPress={() => console.log('Cancel register form')}
        style={styles.cancelButton}
        contentStyle={styles.buttonContent}
        textColor={theme.colors.primary}
      >
        Cancel
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '500',
    color: '#6B7280',
  },
  input: {
    marginBottom: 16,
  },
  registerButton: {
    marginTop: 16,
    paddingVertical: 6,
    backgroundColor: '#6B7280',
  },
  cancelButton: {
    marginTop: 10,
    borderColor: '#6B7280',
  },
  buttonContent: {
    height: 50,
  },
});
