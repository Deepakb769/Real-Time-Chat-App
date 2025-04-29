import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Alert, TextInput } from 'react-native'

// import { useAuth } from '@/components/Authentication/AuthContext'

const LoginScreen = () => {
    // const {isAuthenticated, Login, Logout} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={{margin: 50, paddingHorizontal: 40, paddingVertical: 80, borderWidth: 1, borderRadius: 10}}>
        <Text style={{marginVertical: 40, fontSize: 30}}>Login Page</Text>
        <TextInput style={{marginVertical: 40}} placeholder='Email' value={email} onChangeText={setEmail} />
        <TextInput style={{marginVertical: 40}} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
        <Button title='Login' />
    </View>
  )
}

export default LoginScreen;
