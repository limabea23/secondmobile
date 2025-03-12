import React from "react"; 
import { View, Text, StyleSheet} from "react-native"; 

export default function Details() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes</Text>
            <Text style={styles.vermText}>Sem persistência: nenhum texto salvo</Text>
            <Text style={styles.verdText}>Texto persistido: nenhum texto salvo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        textDecorationLine: "underline",
        marginBottom: 50,
    },
    vermText: {
        color: "red",
        fontSize: 20,
        marginBottom: 20,
    },
    verdText: {
        color: "green",
        fontSize: 20,
        marginBottom: 20,
    }
});