import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
});

function LoginForm() {
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {() => (
                <Form>
                    <div>
                        <label>Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}
export default LoginForm;