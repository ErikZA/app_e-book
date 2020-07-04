import React from "react";
import { Link } from "react-router-dom";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import { Container, Typography, TextField, Button } from "@material-ui/core";

interface FormValues {
  email: string;
}

interface MyFormProps {
  initialEmail?: string;
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
              Ok let’s fetch you ya’ login details
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
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
              <strong>Proceed</strong>
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
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
  }),

  handleSubmit({ email }: FormValues, { props, setSubmitting, setErrors }) {
    console.log(email);
  },
})(InnerForm);

export default ForgotPassword;
