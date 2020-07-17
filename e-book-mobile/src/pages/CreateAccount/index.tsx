import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Alert,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import { RectButton } from "react-native-gesture-handler";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import Spinner from "react-native-loading-spinner-overlay";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { apiPublic } from "../../api";

interface InitialValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  rememberPassword: string;
  dispatch: (values: any) => void;
}

interface MyFormProps {
  initialName: string;
  initialLastName: string;
  initialEmail: string;
  initialPassword: string;
  initialRememberPassword: string;
  dispatch: (values: any) => void;
}

const Form = (props: FormikProps<InitialValues>) => {
  const [login, setLogin] = useState(false);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(true);

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleSubmit,
  } = props;

  //mudar aqui para o reducer
  props.values.dispatch = (user) => {
    apiPublic
      .post("users", user)
      .then((data) => {
        setLogin(false);
        handleNavigationToPanel();
      })
      .catch((error) => {
        Alert.alert(
          "Create account failed",
          `Email already exists!!`,
          [{ text: "OK", onPress: () => setLogin(false) }],
          { cancelable: false }
        );
      });
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
  function handleChangeName(
    value: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setFieldValue("name", value.nativeEvent.text);
  }
  function handleChangeLastName(
    value: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setFieldValue("lastName", value.nativeEvent.text);
  }
  function handleChangeLastRecoverPassword(
    value: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setFieldValue("rememberPassword", value.nativeEvent.text);
  }
  function handleNavigationToLogin() {
    navigation.navigate("Login");
  }
  function handleNavigationToPanel() {
    navigation.navigate("Panel");
  }
  function handleSubmitForm() {
    setLogin(true);
    handleSubmit();
  }

  return (
    <View style={styles.container}>
      <Spinner
        visible={login}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      ></Spinner>

      <Text style={styles.textTitle}>Getting Started</Text>
      <Text style={styles.textSubTitle}>Create an account to continue!</Text>

      <SafeAreaView style={styles.containerScroll}>
        <ScrollView>
          <Input
            nativeID="name"
            value={values.name}
            onBlur={handleBlur("name")}
            label={<Text style={styles.textEmail}>First name</Text>}
            inputStyle={styles.textInputName}
            placeholder="First name"
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChange={handleChangeName}
            errorStyle={{ color: "red" }}
            errorMessage={
              errors.name && touched.name && errors.name ? `${errors.name}` : ""
            }
          />
          <Input
            nativeID="lastName"
            value={values.lastName}
            onBlur={handleBlur("lastName")}
            label={<Text style={styles.textEmail}>Last name</Text>}
            inputStyle={styles.textInputName}
            placeholder="Last name"
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChange={handleChangeLastName}
            errorStyle={{ color: "red" }}
            errorMessage={
              errors.lastName && touched.lastName && errors.lastName
                ? `${errors.lastName}`
                : ""
            }
          />
          <Input
            nativeID="email"
            value={values.email}
            onBlur={handleBlur("email")}
            label={<Text style={styles.textEmail}>Email</Text>}
            inputStyle={styles.textInputEmail}
            placeholder="Type here your email"
            autoCapitalize="none"
            leftIcon={<Icon name="mail" size={24} color="black" />}
            onChange={handleChangeEmail}
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
            autoCapitalize="none"
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

          <Input
            nativeID="rememberPassword"
            value={values.rememberPassword}
            onBlur={handleBlur("rememberPassword")}
            label={<Text style={styles.textEmail}>Remember password</Text>}
            inputStyle={styles.textInputEmail}
            placeholder="Remember password"
            leftIcon={<Icon name="message-circle" size={24} color="black" />}
            onChange={handleChangeLastRecoverPassword}
            errorStyle={{ color: "red" }}
            errorMessage={
              errors.rememberPassword &&
              touched.rememberPassword &&
              errors.rememberPassword
                ? `${errors.rememberPassword}`
                : ""
            }
          />
        </ScrollView>
      </SafeAreaView>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleSubmitForm}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="log-in" color="#fff" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>Became a user</Text>
        </RectButton>
      </View>

      <View style={styles.mainFooter}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <RectButton style={styles.buttonLink} onPress={handleNavigationToLogin}>
          <Text style={styles.buttonTextCreate}>Sign in</Text>
        </RectButton>
      </View>
    </View>
  );
};

const CreateAccount = withFormik<MyFormProps, InitialValues>({
  mapPropsToValues: (props) => ({
    name: props.initialName || "",
    lastName: props.initialLastName || "",
    email: props.initialEmail || "",
    password: props.initialPassword || "",
    rememberPassword: props.initialRememberPassword || "",
    dispatch: props.dispatch,
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Min 5 character"),
    rememberPassword: Yup.string()
      .required("Remember password is required")
      .min(5, "Min 5 character"),
    name: Yup.string()
      .required("First name is required")
      .min(5, "Min 5 character"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(5, "Min 5 character"),
  }),

  handleSubmit(
    {
      email,
      password,
      lastName,
      name,
      rememberPassword,
      dispatch,
    }: InitialValues,
    { props, setSubmitting, setErrors }
  ) {
    const user = {
      name: `${name} ${lastName}`,
      email: email,
      password: password,
      rememberMePassword: rememberPassword,
    };
    try {
      dispatch(user);
    } catch (e) {
      console.log(e);
    }
  },
})(Form);

export default CreateAccount;
