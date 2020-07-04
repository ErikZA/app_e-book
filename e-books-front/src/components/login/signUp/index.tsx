import React from "react";
import { Link } from "react-router-dom";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import { Container, Typography, TextField, Button } from "@material-ui/core";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rememberPassword: string;
}

interface MyFormProps {
  initialFirstName: string;
  initialLastName: string;
  initialEmail?: string;
  initialPassword?: string;
  initialRememberPassword: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <>
      <Container component="main" maxWidth="lg">
        <div className="mt-0 mt-md-0">
          <div className="text-center">
            <Typography component="h1" variant="h6">
              My Party
            </Typography>
            <Typography component="p" variant="subtitle1">
              Please create a new account here
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                label="First Name"
                name="firstName"
                helperText={
                  errors.firstName && touched.firstName && errors.firstName
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
            </div>
            <div>
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                label="Last Name"
                name="lastName"
                helperText={
                  errors.lastName && touched.lastName && errors.lastName
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
            </div>
            <div>
              <TextField
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
            <div>
              <TextField
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
            <div>
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                label="Remember my password"
                name="rememberPassword"
                helperText={
                  errors.rememberPassword &&
                  touched.rememberPassword &&
                  errors.rememberPassword
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rememberPassword}
              />
            </div>
            <p className="pSignIp">
              Already have an account?{" "}
              <Link to="/login">
                <strong>Sign Up</strong>
              </Link>
            </p>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              size="large"
              className="mb-1 mb-md-2 mt-2"
              disabled={
                isSubmitting ||
                !!(errors.email && touched.email) ||
                !!(errors.password && touched.password)
              }
            >
              <strong>Sign in</strong>
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

const SignUp = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    password: props.initialPassword || "",
    firstName: props.initialFirstName || "",
    lastName: props.initialLastName || "",
    rememberPassword: props.initialRememberPassword || "",
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Min 5 character"),
    rememberPassword: Yup.string()
      .required("Email is required")
      .min(5, "Min 5 character"),
    firstName: Yup.string()
      .required("Email is required")
      .min(3, "Min 3 character"),
    lastName: Yup.string()
      .required("Email is required")
      .min(3, "Min 3 character"),
  }),

  handleSubmit(
    { email, password, firstName, lastName, rememberPassword }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    console.log(email, password, firstName, lastName, rememberPassword);
  },
})(InnerForm);

export default SignUp;
