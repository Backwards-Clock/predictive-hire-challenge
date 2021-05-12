import * as React from "react";
import { object as yup, string } from "yup";
import { Formik, Form, Field, FieldProps } from "formik";
import { Button, Container } from "reactstrap";

interface Values {
  username: string;
  password: string;
}

const schema = yup().shape({
  username: string()
    .email("Username must be a valid email address")
    .required("Email address is required"),
  password: string().required("Password is required"),
});

const Login = () => {
  const submit = (values: Values) => {
    console.log("Login requested for", values);
  }

  return (
    <Container>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={schema}
        onSubmit={(values) => submit(values)}
      >
        {() => (
          <Form id="login-form">
            <Field name="username" id="username">
              {({ field, meta }: FieldProps) => (
                <div>
                  <input type="text" placeholder="Email Address" {...field} />
                  {meta.touched && meta.error && (
                    <div className="error">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            <br />
            <Field name={"password"} id={"password"}>
              {({ field, meta }: FieldProps) => (
                <div>
                  <input type="password" {...field} />
                  {meta.touched && meta.error && (
                    <div className="error">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            <br />
            <div className="text-center">
              <Button type="submit" color="primary">
                LOG IN
              </Button>{" "}
              <Button
                type="button"
                onclick={() => (window.location.href = "/")}
              >
                CANCEL
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
