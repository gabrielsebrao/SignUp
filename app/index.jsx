import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import Input from './Input/Input'

const SignUp = function () {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const catchAPI = function () {
        fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password 
            })
        })
            .then((res) => {if(res.status == 200) alert("Usuario criado com sucesso!")})
            .catch((error) => console.error("Error: ", error));
    }

    return (
        <View style={styles.layout}>
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <Input title="Nome" variable={name} set={setName}></Input>
                <Input title="Email" variable={email} set={setEmail}></Input>
                <Input title="Senha" variable={password} set={setPassword}></Input>
                <Pressable onPress={catchAPI} style={styles.pressable}><Text style={{ fontSize: 17, color: '#FFFFFF' }}>Sign up</Text></Pressable>
                <Text>{name} {email} {password}</Text>
            </View>
        </View>
    )
}

export default SignUp