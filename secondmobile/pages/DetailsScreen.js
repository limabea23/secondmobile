import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";

const TextoExibido = ({ titulo, texto, cor }) => (
    <Text style={[styles.texto, { color: cor }]}>
        {titulo}: {texto || "Nenhum texto salvo"}
    </Text>
);

export default function DetalhesScreen({ route }) {
    const { textoNaoPersistido } = route.params || {};
    const [textoPersistido, setTextoPersistido] = useState("");

    useEffect(() => {
        const carregarTextoPersistido = async () => {
            const textoSalvo = await SecureStore.getItemAsync("meuTexto");
            if (textoSalvo) {
                setTextoPersistido(textoSalvo);
            }
        };
        carregarTextoPersistido();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Detalhes</Text>
            <TextoExibido titulo="Sem persistência" texto={textoNaoPersistido} cor="#BE3144" />
            <TextoExibido titulo="Persistência" texto={textoPersistido} cor="#640D5F" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 50,
        paddingVertical: 100,
        paddingHorizontal: 25,
        backgroundColor: "#FFE4E1",
    },
    titulo: {
        fontSize: 32,
        textAlign: "center",
        textDecorationLine: "underline",
        color: "#FF1493", 
        fontWeight: "bold",
    },
    texto: {
        fontSize: 20,
        textAlign: "center",
        color: "#C71585",
    },
});