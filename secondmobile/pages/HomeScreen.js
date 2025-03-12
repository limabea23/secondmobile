import React from "react"; 
import { View, Text, TextInput, Button, StyleSheet} from "react-native"; 

export default function HomeScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Persistência e Navegação</Text>
            <TextInput style={styles.input}placeholder="Digite algo" />
            <Text style={styles.vermText}>Sem persistência: nenhum texto salvo</Text>
            <Text style={styles.verdText}>Texto persistido: nenhum texto salvo</Text>
            <Button title="Salvar" style={styles.button} />
            <Button title="Limpar" style={styles.button} />
            <Button title="Detalhes" style={styles.button} />
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
        fontSize: 30
    },
    vermText: {
        color: "red",
        fontSize: 20,
        marginBottom: 10,
    },
    verdText: {
        color: "green",
        fontSize: 20,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "blue",
        borderRadius: 5,
        width: 100,
        color: "white",
        fontSize: 15,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        height: 50,
        fontSize: 15,
        color: "grey",
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 10,
    },
});