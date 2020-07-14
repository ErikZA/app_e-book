import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Input } from "react-native-elements";

import styles from "./styles";

interface InitialValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [initialValues, setInitialValues] = useState<InitialValues>({
    email: "",
    password: "",
  });

  function handleChangeEmail(
    email: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setInitialValues({
      email: email.nativeEvent.text,
      password: initialValues.password,
    });
  }

  function handleChangePassword(
    password: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setInitialValues({
      email: initialValues.email,
      password: password.nativeEvent.text,
    });
  }

  return (
    <View style={styles.container}>
      <Text>Let’s Sign You In</Text>
      <Text>Welcome back, you’ve been missed!</Text>

      <View>
        <Text style={styles.textEmail}>Email</Text>
        <Input
          placeholder="Type here your email"
          leftIcon={<Icon name="user" size={24} color="black" />}
          onChange={handleChangeEmail}
        />
        <Text style={styles.textPassword}>Password</Text>
        <Input
          placeholder="Type here your password"
          leftIcon={<Icon name="key" size={24} color="black" />}
          onChange={handleChangePassword}
          // errorStyle={{ color: "red" }}
          // errorMessage="ENTER A VALID ERROR HERE"
        />
      </View>
    </View>
  );
};

export default Login;
