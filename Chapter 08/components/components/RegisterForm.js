import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text, Input, Button } from 'galio-framework';

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerButton = () => {
        if(name.length !== 0 && email.length !== 0 && password.length !== 0)
            alert(`Registration complete! Thank you, ${name}! We'll send you an email to ${email}`);
        else 
            alert("You forgot to fill in the form :(.");
    }

    return (
        <Block center style={styles.card}>
            <Text size={36} bold color="rgba(0,0,0,0.8)" style={{ marginBottom: 24 }}>app name</Text>
            <Input placeholder="Name" value={name} onChangeText={setName} style={styles.input} 
                icon="person"
                family="ionicons"
                iconSize={24}
                iconColor="#ffc8dd"
            />
            <Input placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} 
                icon="mail"
                family="ionicons"
                iconSize={21}
                iconColor="#ffc8dd"
            />
            <Input placeholder="Password" value={password} onChangeText={setPassword} 
                password viewPass style={styles.input} 
            />
            <Button color="#cdb4db" shadowless onPress={() => registerButton()}>
                Register now
            </Button>
        </Block>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        width: "80%",
        borderRadius: 14,
        paddingHorizontal: 16,
        paddingVertical: 32,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 7
    },
    input: {
        borderColor: "#ffc8dd"
    }
});