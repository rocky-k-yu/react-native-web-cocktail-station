import React from "react";
import { withRouter } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import { StaticScreen } from "@emma-services/common/src/shared";
import LoginForm from "../components/LoginForm";
import QS from "query-string";

const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .required()
});

const LoginStep1 = (props: any) => {
  console.log(props);
  return (
    <StaticScreen title="Input Email and Password" link="input-one-time-pin">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values =>
          props.history.push(`input-one-time-pin?${QS.stringify(values)}`)
        }
        validationSchema={LoginValidation}
      >
        {(formikProps: any) => <LoginForm {...formikProps} />}
      </Formik>
    </StaticScreen>
  );
};
export default withRouter(LoginStep1);
