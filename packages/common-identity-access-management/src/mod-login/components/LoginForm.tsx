import React from 'react';
import { Input, Button, Text } from 'react-native-elements';
import ThemeButton from '@emma-services/common/src/shared/components/ThemeButton';

const LoginForm = (formikProps: any) => {
  const { values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit } = formikProps;
  return (
    <>
      <Input
        label="E-mail"
        placeholder="example@company.com"
        onChangeText={handleChange('email')}
        onBlur={() => setFieldTouched('email')}
      />
      {errors.email &&
        <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
      }
      <Input
        label="Password"
        placeholder="1234ABC"
        onChangeText={handleChange('password')}
        onBlur={() => setFieldTouched('password')}
      />
      {errors.password &&
        <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
      }
      <ThemeButton
        title='Sign in by mobile'
        disabled={!isValid}
        onClickOrPress={handleSubmit}
      />
    </>
  )
}

export default LoginForm;