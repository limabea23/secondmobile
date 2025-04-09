import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import * as SecureStore from "expo-secure-store";
import Botao from ".././components/botton";

export default function HomeScreen({ navigation }) {
    const [texto, setTexto] = useState("");
    const [textoPersistido, setTextoPersistido] = useState("");
    const [textoSalvoSemPersistencia, setTextoSalvoSemPersistencia] = useState("");

    useEffect(() => {
        const carregarTextoPersistido = async () => {
            const textoSalvo = await SecureStore.getItemAsync("meuTexto");
            if (textoSalvo) {
                setTextoPersistido(textoSalvo);
            }
        };
        carregarTextoPersistido();
    }, []);

    const salvarTexto = async () => {
        if (!texto.trim()) {
            alert("Por favor, insira algo.");
            return;
        }
        await SecureStore.setItemAsync("meuTexto", texto);
        setTextoPersistido(texto);
        setTextoSalvoSemPersistencia(texto);
        setTexto("");
    };

    const limparTexto = async () => {
        await SecureStore.deleteItemAsync("meuTexto");
        setTextoPersistido("");
        setTextoSalvoSemPersistencia("");
        alert("Texto apagado da persistência!");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Persistência e Navegação</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite algo"
                value={texto}
                onChangeText={setTexto}
            />
            <Text style={[styles.texto, { color: "#BE3144" }]}>
                Sem persistência: {textoSalvoSemPersistencia || "Nenhum texto salvo"}
            </Text>
            <Text style={[styles.texto, { color: "#640D5F" }]}>
                Texto persistido: {textoPersistido || "Nenhum texto salvo"}
            </Text>
            <Botao titulo="Salvar" onPress={salvarTexto} cor="#FFB200" />
            <Botao titulo="Limpar" onPress={limparTexto} cor="#EB5B00" />
            <Botao
                titulo="Detalhes"
                onPress={() =>
                    navigation.navigate("Detalhes", {
                        textoNaoPersistido: textoSalvoSemPersistencia,
                    })
                }
                cor="#640D5F"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 80,
        paddingHorizontal: 30,
        gap: 25,
        backgroundColor: "#FFF0F5",
    },
    titulo: {
        fontSize: 32,
        textAlign: "center",
        fontWeight: "bold",
        color: "#FF1493",
    },
    input: {
        borderWidth: 1,
        borderColor: "#FF69B4",
        borderRadius: 15,
        padding: 10,
        fontSize: 20,
        backgroundColor: "#FFF0F5",
        color: "#C71585",
    },
    texto: {
        fontSize: 20,
        textAlign: "center",
        color: "#DB7093",
    },
});