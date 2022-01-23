import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default function ConnectionScreen(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(process.env.API_URL + "users")
      .then((response) => response.json())
      .then((data) => setUsers(data["hydra:member"]))
      .catch((error) => console.log(error));
  }, []);

  const identifiantJSX = users.map((u) => (
    <TextInput
      key={u.id}
      label={u.identifiant}
      value={u["@id"]}
      placeholder="Identifiant"
    />
  ));
  const passwordJSX = users.map((u) => (
    <TextInput
      key={u.id}
      label={u.password}
      value={u["@id"]}
      placeholder="mot de passe"
    />
  ));

  return (
    <View style={styles.main}>
      <Image source={require("../../assets/favicon.png")} />
      <Text>Nom de L'application</Text>
      <View>
        <Text>Identifiant</Text>
        <TextInput
          style={styles.inpSoft}
          value={identifiantJSX}
          placeholder="Identifiant"
        />

        {identifiantJSX}
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          style={styles.inpSoft}
          value={passwordJSX}
          placeholder="Mot de passe"
        />
      </View>
      <Button style={styles.bouton} color="#51A3A3" title="Connexion" />
      <TouchableOpacity>
        <Text>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Créer un compte</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "center",
  },
  inpSoft: {
    borderWidth: 2,
    borderColor: "#51A3A3",
    marginBottom: 5,
    marginLeft: 20,
    borderRadius: 7,
    width: 350,
    height: 50,
    paddingLeft: 5,
  },
  bouton: {
    color: "#49A078",
    padding: 30,
    marginTop: 40,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 40,
    height: 100,
    width: 350,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#B8EBD0",
    borderWidth: 3,
  },
});
