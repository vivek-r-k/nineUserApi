import React,{useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Axios from 'axios'
import {NativeBaseProvider} from 'native-base'
import User from './Components/User';

const key = "Some random keywith123"
const URL = `https://randomuser.me/api/${key}/params`

const App = () => {

  const [details, setDetails] = useState(null)

  const fetchDetails = async () => {
    try {
      // Axios.get(URL)
      const {data} = await Axios.get('https://randomuser.me/api/')
      const details = data.results[0]

      setDetails(details)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  if(!details){
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  } else {
    return(
      <View style={styles.container}>
        <View>
        <User details={details} />
        <Button
        rounded
        style={styles.button}
        onPress={()=>fetchDetails()}
        title="New User"
        ></Button>
        </View>
      </View>
    )
  }
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831'
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
  }
})