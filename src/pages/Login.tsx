import { useState } from "react";
import { object as yup, string } from "yup";
import { Formik, Form, Field, FieldProps } from "formik";
import { Alert, Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import { login } from "../services/api";

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
  const [error, setError] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  let history = useHistory();

  const handleSuccess = ({ token }: { token: string }) => {
    // sessionStorage is not a secure auth system but works for an example
    sessionStorage.setItem("token", token);
    history.push("/");
  };

  const submit = (values: Values) => {
    const variables = {
      username: values.username.toLowerCase(),
      password: values.password,
    };

    try {
      const result = login(variables);
      handleSuccess(result);
    } catch (error) {
      setError(error.message);
      setAlertOpen(true);
    }
  };

  return (
    <Container>
      <Alert
        color="danger"
        isOpen={alertOpen}
        toggle={() => setAlertOpen(false)}
      >
        {error}
      </Alert>
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
                  <label htmlFor="username">Email Address:</label>{" "}
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
                  <label htmlFor="password">Password:</label>{" "}
                  <input type="password" {...field} />
                  {meta.touched && meta.error && (
                    <div className="error">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            <br />
            <div>
              <Button type="submit" color="primary">
                LOG IN
              </Button>{" "}
              <Button
                type="button"
                onClick={() => (window.location.href = "/")}
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
