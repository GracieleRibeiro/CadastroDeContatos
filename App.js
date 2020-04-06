import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import ListaItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);

  let [contadorUsuarios, setContadorUsuarios] = useState(10);

  const adicionarContato = (nome,telefone) => {
    //spread
    setUsuarios (usuarios => {
      console.log (usuarios);
      setContadorUsuarios(contadorUsuarios + 1);
      if(contadorUsuarios % 2 == 1){
        setContadorUsuarios(contadorUsuarios+1); 
      }else{
        setContadorUsuarios(contadorUsuarios+2); 
      }
      return [{key: contadorUsuarios, vNome: nome, vTelefone: telefone}, ...usuarios];
    });
    
    //console.log (lembrete);
  }

  const removerContato = (keyASerRemovida) => {
    setUsuarios(usuarios =>{
      return usuarios.filter(nome => nome.key !== keyASerRemovida);
    })
  }

  return (
    <View style={styles.telaPrincipalView}>
      <ContatoInput onAdicionarContato={adicionarContato}/>
      <FlatList
        data={usuarios}
        renderItem={
          ({item}) => (            
             <ListaItem 
             nome={item.vNome}
             telefone={item.vTelefone}
             chave = {item.key}
             onDelete = {removerContato}
             />
          )
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
  }
 
});