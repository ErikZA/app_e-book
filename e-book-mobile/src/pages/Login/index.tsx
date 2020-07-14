import React, { useState } from "react";
import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import { RectButton } from "react-native-gesture-handler";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface InitialValues {
  email: string;
  password: string;
  dispatch: (values: any) => void;
}

interface MyFormProps {
  initialEmail: string;
  initialPassword: string;
  dispatch: (values: any) => void;
}

const Form = (props: FormikProps<InitialValues>) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(true);

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  //mudar aqui para o reducer
  props.values.dispatch = (consloe) => {
    console.log(consloe);
  };

  function handleChangeVisible() {
    if (visible) setVisible(false);
    else setVisible(true);
  }

  function handleChangeEmail(
    value: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setFieldValue("email", value.nativeEvent.text);
  }
  function handleChangePassword(
    value: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setFieldValue("password", value.nativeEvent.text);
  }

  function handleNavigationToCreateAccount() {
    navigation.navigate("CreateAccount");
  }

  function handleSubmitForm() {
    handleSubmit();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Let’s Sign You In</Text>
      <Text style={styles.textSubTitle}>Welcome back, you’ve been missed!</Text>

      <View style={styles.main}>
        <Input
          nativeID="email"
          value={values.email}
          onBlur={handleBlur("email")}
          label={<Text style={styles.textEmail}>Email</Text>}
          inputStyle={styles.textInputEmail}
          placeholder="Type here your email"
          leftIcon={<Icon name="user" size={24} color="black" />}
          onChange={(value) => setFieldValue("email", value.nativeEvent.text)}
          errorStyle={{ color: "red" }}
          errorMessage={
            errors.email && touched.email && errors.email
              ? `${errors.email}`
              : ""
          }
        />
        <Input
          nativeID="password"
          value={values.password}
          onBlur={handleBlur("password")}
          label={<Text style={styles.textPassword}>Password</Text>}
          inputStyle={styles.textInputPassword}
          placeholder="Type here your password"
          leftIcon={<Icon name="key" size={24} color="black" />}
          secureTextEntry={visible}
          rightIcon={
            visible ? (
              <Icon
                onPress={handleChangeVisible}
                name="eye-off"
                size={24}
                color="black"
              />
            ) : (
              <Icon
                onPress={handleChangeVisible}
                name="eye"
                size={24}
                color="black"
              />
            )
          }
          onChange={handleChangePassword}
          errorStyle={{ color: "red" }}
          errorMessage={
            errors.password && touched.password && errors.password
              ? `${errors.password}`
              : ""
          }
        />
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleSubmitForm}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="log-in" color="#fff" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>Sign in</Text>
        </RectButton>
      </View>

      <View style={styles.mainFooter}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <RectButton
          style={styles.buttonLink}
          onPress={handleNavigationToCreateAccount}
        >
          <Text style={styles.buttonTextCreate}>Sign up</Text>
        </RectButton>
      </View>
    </View>
  );
};

const Login = withFormik<MyFormProps, InitialValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    password: props.initialPassword || "",
    dispatch: props.dispatch,
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Min 5 character"),
  }),

  handleSubmit(
    { email, password, dispatch }: InitialValues,
    { props, setSubmitting, setErrors }
  ) {
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
    try {
      dispatch(user);
    } catch (e) {
      console.log(e);
    }
  },
})(Form);

export default Login;
