import React from "react";
import {
  ThemeTextButton,
  ThemeTextField,
  ThemeWarningMessage,
  ThemeErrorMessage
} from "@cocktail-helpers/base-components-mui-rne/src/components";

const LoginForm = (formikProps: any) => {
  const {
    values,
    handleChange,
    errors,
    setFieldTouched,
    touched,
    isValid,
    handleSubmit
  } = formikProps;
  return (
    <>
      <ThemeTextField
        label="E-mail"
        placeholder="example@company.com"
        onChange={handleChange("email")}
        onBlur={() => setFieldTouched("email")}
      />
      {errors.email && (
        <ThemeWarningMessage>{errors.email}</ThemeWarningMessage>
      )}
      <ThemeTextField
        label="Password"
        placeholder="1234ABC"
        onChange={handleChange("password")}
        onBlur={() => setFieldTouched("password")}
      />
      {errors.password && (
        <ThemeErrorMessage>{errors.password}</ThemeErrorMessage>
      )}
      <ThemeTextButton
        title="Sign in"
        disabled={!isValid}
        onClickOrPress={handleSubmit}
      />
    </>
  );
};

export default LoginForm;
