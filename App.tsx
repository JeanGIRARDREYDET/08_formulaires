import * as React from 'react';
import { View, Text ,Image,TouchableHighlight,StatusBar,Alert,Button,StyleSheet,TextInput,ScrollView,InputAccessoryView} from 'react-native';
import { NavigationContainer} from  '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { useState } from 'react';
const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={AccueilScreen} />
      <Stack.Screen name="Connexion" component={ConnexionScreen} />
      <Stack.Screen name="Inscription" component={InscriptionScreen} />
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

type AccueilScreenProps = NativeStackHeaderProps<RootStackParamList, "Accueil">;

const  AccueilScreen: React.FC<AccueilScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text></Text>

      <Image
        style={styles.tinyLogo}
        source={require('./assets/OceanTrip.png')}
      />
    <Text></Text>
<TouchableHighlight  style={styles.btInv} >
  <Text style={styles.submitText} onPress={()=> props.navigation.push("Connexion")}>Connexion</Text>
     </TouchableHighlight>
     <TouchableHighlight  style={styles.btInv} >
  <Text style={styles.submitText} onPress={()=> props.navigation.push("Inscription")}>Inscripiton</Text>
     </TouchableHighlight>
      <StatusBar style={styles.container} />
    </View>
  );
}

type ConnexionScreenProps = NativeStackHeaderProps<RootStackParamList, "Connexion">;

const  ConnexionScreen: React.FC<ConnexionScreenProps> = (props) => {

  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = useState(initialText);

  return (
    <>
   <ScrollView keyboardDismissMode="interactive">
        <TextInput
          style={{
            padding: 16,
            marginTop: 50,
            height:50,
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={text}
          placeholder={'Please type here…'}
        />
                <TextInput
          style={{
            padding: 16,
            marginTop: 50,
            height:50,
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={text}
          placeholder={'Please type here…'}
        />
      </ScrollView>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button
          onPress={() => setText(initialText)}
          title="Clear text"
        />
      </InputAccessoryView>
    <InputAccessoryView nativeID={inputAccessoryViewID}>
      <Button
        onPress={() => setText(initialText)}
        title="Clear text"
      />
    </InputAccessoryView>
  </>
  );
}

type InscriptionScreenProps = NativeStackHeaderProps<RootStackParamList, "Inscription">;

const  InscriptionScreen: React.FC<InscriptionScreenProps> = (props) => {
  return (
    <View style={styles.container}>
    
    <Text></Text>

    <TextInput placeholder="Identifiant" style={{ textAlign: 'right',borderColor: '#FFFFFF',color:'#FFF' }} />
      <TextInput placeholder="Mots de passe" style={{ textAlign: 'right' }} />
      <TextInput placeholder="Your question goes here..." style={{ textAlign: 'right' }} />
      <TextInput placeholder="Your question goes here..." style={{ textAlign: 'right' }} />



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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'#FFF'
  },
}
);
