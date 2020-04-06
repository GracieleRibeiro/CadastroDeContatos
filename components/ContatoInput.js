import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native'

const ContatoInput = (props) => {
    const[nome, setNome] = useState('');
    const[telefone, setTelefone] = useState('');
    const capturarNome = (nome) => {
        setNome(nome)
    }
    const capturaTelefone = (telefone) => {
        setTelefone(telefone)
    }
    return (
        <View style = {StyleSheet.lembreteView}>
        <TextInput 
          placeholder="Nome"
          style={styles.nomeTextInput}
          onChangeText={capturarNome}
          value={nome}
        />
        <TextInput
          placeholder="Telefone"
          style={styles.telefoneTextInput}
          onChangeText={capturaTelefone}
          value={telefone}
          />
        <Button 
            title="+"
            onPress={() => {props.onAdicionarContato(nome, telefone)}}
        />
        </View>
    );
}
const styles = StyleSheet.create ({
lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6
  },
  nomeTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 4
  },
  telefoneTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 4
  }
}
);

export default ContatoInput;