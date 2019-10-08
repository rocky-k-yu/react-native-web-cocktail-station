import React from 'react';
import { Text } from 'react-native';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import ThemeButton from '@emma-services/common/src/shared/components/ThemeButton';

const LoginForm = (formikProps: any) => {
  const { values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit } = formikProps;
  return (
    <>
      <TextField
        label="Email"
        margin="normal"
        placeholder="example@company.com"
        onChange={handleChange('email')}
        onBlur={() => setFieldTouched('email')}
      />
      {errors.email &&
        <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
      }
      <TextField
        label="Password"
        margin="normal"
        placeholder="1234ABC"
        onChange={handleChange('password')}
        onBlur={() => setFieldTouched('password')}
      />
      {errors.password &&
        <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
      }


      <ThemeButton
        title='Sign in by web'
        disabled={!isValid}
        onClickOrPress={handleSubmit}
      />
    </>
  )
}

export default LoginForm;