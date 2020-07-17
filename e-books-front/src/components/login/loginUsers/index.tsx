import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import { Container, Typography, TextField, Button } from "@material-ui/core";
import { User } from "../../../store/ducks/users/types";
import api from "../../../services/api";

interface ResponseAuth {
  token: string;
  user: User;
}
interface FormValues {
  email: string;
  password: string;
  dispatch: (callback?: any) => void;
}

interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
  dispatch: (callback?: any) => void;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const [login, setLogin] = useState(false);
  const history = useHistory();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = props;

  values.dispatch = (user: User) => {
    const { email, password } = user;
    setLogin(true);
    api
      .post<ResponseAuth>("/auth", { email, password })
      .then((data) => {
        history.push(`/user/${data.data.user.name}`);
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Something went wrong. Error: incorrect email or password for ${user.email}`
        );
        handleChangeButton();
      });
  };

  function handleChangeButton() {
    setSubmitting(false);
    setLogin(false);
  }

  return (
    <>
      <Container component="main" maxWidth="lg">
        <div className="mt-0 mt-md-0">
          <div className="text-center">
            <Typography component="h1" variant="h6">
              My App
            </Typography>
            <Typography component="p" variant="subtitle1">
              Sign in to your account to continue
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <TextField
                error={
                  errors.email && touched.email && errors.email ? true : false
                }
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                helperText={errors.email && touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className="mt-2">
              <TextField
                error={
                  errors.password && touched.password && errors.password
                    ? true
                    : false
                }
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                label="Password"
                name="password"
                helperText={
                  errors.password && touched.password && errors.password
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            <p className="pSignIp">
              Don’t have an account?{" "}
              <Link to="/signUp">
                <strong>Sign Up</strong>
              </Link>
            </p>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              size="large"
              className="mb-2 mb-md-3 mt-3"
              disabled={
                isSubmitting ||
                !!(errors.email && touched.email) ||
                !!(errors.password && touched.password)
              }
            >
              {login ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <strong>Sign in</strong>
              )}
            </Button>
            <p className="pSignIp">
              <Link to="/forgotPassword">
                <strong>Forgot Password?</strong>
              </Link>
            </p>
          </form>
        </div>
      </Container>
    </>
  );
};

const LoginUsers = withFormik<MyFormProps, FormValues>({
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
    { email, password, dispatch }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    const user = {
      email: email,
      password: password,
    };
    try {
      dispatch(user);
    } catch (e) {
      console.log(e);
    }
  },
})(InnerForm);

export default LoginUsers;
