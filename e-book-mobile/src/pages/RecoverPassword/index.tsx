import React, { useState } from "react";
import {
  View,
  Text,
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
  email: string;
  dispatch: (values: any) => void;
}

interface MyFormProps {
  initialEmail: string;
  dispatch: (values: any) => void;
}

const Form = (props: FormikProps<InitialValues>) => {
  const [login, setLogin] = useState(false);
  const navigation = useNavigation();
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
    setLogin(true);
    apiPublic
      .post("forgot_password", user)
      .then((data) => {
        setLogin(false);
        createAlertSentEmail();
      })
      .catch((error) => {
        Alert.alert(
          "Failed",
          `Email incorrect!!`,
          [{ text: "OK", onPress: () => setLogin(false) }],
          { cancelable: false }
        );
      });
  };

  function handleChangeEmail(
    value: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setFieldValue("email", value.nativeEvent.text);
  }

  function handleNavigationToHome() {
    navigation.navigate("Home");
  }

  function handleSubmitForm() {
    handleSubmit();
  }

  const createAlertSentEmail = () =>
    Alert.alert(
      "Email successfully sent",
      "An email with a link to reset your password has been sent to your email.",
      [{ text: "OK", onPress: () => handleNavigationToHome() }],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Spinner
        visible={login}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      ></Spinner>

      <Text style={styles.textTitle}>Password Recovery</Text>
      <Text style={styles.textSubTitle}>
        Enter your address email to recover your password
      </Text>

      <View style={styles.main}>
        <Input
          nativeID="email"
          value={values.email}
          onBlur={handleBlur("email")}
          label={<Text style={styles.textEmail}>Email</Text>}
          inputStyle={styles.textInputEmail}
          autoCapitalize="none"
          placeholder="Type here your email"
          leftIcon={<Icon name="user" size={24} color="black" />}
          onChange={handleChangeEmail}
          errorStyle={{ color: "red" }}
          errorMessage={
            errors.email && touched.email && errors.email
              ? `${errors.email}`
              : ""
          }
        />
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleSubmitForm}>
          <Text style={styles.buttonText}>Continue</Text>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#fff" size={24} />
            </Text>
          </View>
        </RectButton>
      </View>
    </View>
  );
};

const RecoverPassword = withFormik<MyFormProps, InitialValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    dispatch: props.dispatch,
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
  }),

  handleSubmit(
    { email, dispatch }: InitialValues,
    { props, setSubmitting, setErrors }
  ) {
    const user = {
      email: email,
    };
    try {
      dispatch(user);
    } catch (e) {
      console.log(e);
    }
  },
})(Form);

export default RecoverPassword;
