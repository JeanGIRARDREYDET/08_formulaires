import * as React from 'react';
import { View, Text ,Image,TouchableHighlight,StatusBar,Alert,StyleSheet} from 'react-native';
import { NavigationContainer} from  '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type ConnexionProps = NativeStackHeaderProps<RootStackParamList, "Connexion">;

const  Connexion: React.FC<ConnexionProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text></Text>

      <Image
        style={styles.tinyLogo}
        source={require('./assets/OceanTrip.png')}
      />
    <Text></Text>
<TouchableHighlight  style={styles.btInv} >
  <Text style={styles.submitText} onPress={()=> props.navigayion.push("Accueil")}>Connexion</Text>
     </TouchableHighlight>
     <TouchableHighlight  style={styles.btInv} >
  <Text style={styles.submitText}>Inscripiton</Text>
     </TouchableHighlight>
      <StatusBar style={styles.container} />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#104271',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    tinyLogo: {
      width: 300,
      height: 300,
    },
  
    btInv: {
      width: 195,
      marginBottom: 20,
      backgroundColor: '#104271',
      Color: '#fffbf0',
      marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 20,
      paddingBottom: 20,
      borderRadius: 10,
      borderWidth: 4,
      borderColor: '#fffbf0',
    },
  
    submitText: {
      color: '#fffbf0',
      textAlign: 'center',
      fontWeight: "bold",
      fontSize: 20,
    },
  }
  );
  