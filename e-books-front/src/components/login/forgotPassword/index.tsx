import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import { Container, Typography, TextField, Button } from "@material-ui/core";

import api from "../../../services/api";

interface Recover {
  code: number;
  message: string;
}
interface FormValues {
  email: string;
  dispatch: (callback?: any) => void;
}

interface MyFormProps {
  initialEmail?: string;
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

  values.dispatch = (email: string) => {
    setLogin(true);
    api
      .post<Recover>("/forgot_password", { email })
      .then((data) => {
        if (data.data.code === 200) {
          alert(`Email successfully sent to ${email}`);
          history.push(`/home`);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(`Something went wrong. Error: incorrect email: ${email}`);
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
              Ok let’s fetch you ya’ login details
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
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
            <p className="pSignIp">
              Already have an account?
              <Link to="/login">
                <strong> Back to Sign Up</strong>
              </Link>
            </p>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              size="large"
              className="mb-3 mb-md-4 mt-4"
              disabled={isSubmitting || !!(errors.email && touched.email)}
            >
              {login ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <strong>Proceed</strong>
              )}
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

const ForgotPassword = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    dispatch: props.dispatch,
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
  }),

  handleSubmit(
    { email, dispatch }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    try {
      dispatch(email);
    } catch (e) {
      console.log(e);
    }
  },
})(InnerForm);

export default ForgotPassword;
