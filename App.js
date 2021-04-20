import React, { useEffect, useState} from 'react';
import {View,Text,FlatList} from 'react-native';

const domain = 'http://127.0.0.1:5000/'
const phrase = domain + 'home'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(phrase)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(_ => console.log("Texttt: ",data.text, " Authorrr: ",data.author));
  },[]);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>{data.text}, {data.author}</Text>
    </View>
  );
}

export default App;