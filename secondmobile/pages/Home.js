export default function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Persistência e Navegação</Text>
            <TextInput style={styles.input}>Digite algo</TextInput>
            <Text style={styles.vermText}>Sem persistência: nenhum texto salvo</Text>
            <Text style={styles.verdText}>Texto persistido: nenhum texto salvo</Text>
            <Button style={styles.button}>Salvar</Button>
            <Button style={styles.button}>Limpar</Button>
            <Button style={styles.button}>Detalhes</Button>
        </View>
    )
}