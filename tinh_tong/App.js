import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [result, setResult] = useState('')
    const onPressLearnMore = () => {
        setResult(Number(a)+Number(b))
    };
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TextInput
                style={styles.textInput}
                placeholder="Nhap a"
                onChangeText={(a) => setA(a)}
            ></TextInput>

            <TextInput
                style={styles.textInput}
                placeholder="NHap b"
                onChangeText={(b) => setB(b)}
            ></TextInput>
            <Button
                style={styles.button}
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text>{result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#000",
        width: 200,
        height: 40,
    },
    button: {
        padding: 10,
    },
});
