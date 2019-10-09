import React from 'react';
import ThemeTextButton from '@emma-services/common/src/shared/components/ThemeTextButton';
import ThemeTextField from '@emma-services/common/src/shared/components/ThemeTextField';
import ThemeText from '@emma-services/common/src/shared/components/ThemeText'

const LoginForm = (formikProps: any) => {
  const { values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit } = formikProps;
  return (
    <>
      <ThemeTextField
        label="E-mail in"
        placeholder="example@company.com"
        onChange={handleChange('email')}
        onBlur={() => setFieldTouched('email')}
      />
      {errors.email &&
        <ThemeText style={{ fontSize: 10, color: 'red' }}>{errors.email}</ThemeText>
      }
      <ThemeTextField
        label="Password"
        placeholder="1234ABC"
        onChange={handleChange('password')}
        onBlur={() => setFieldTouched('password')}
      />
      {errors.password &&
        <ThemeText style={{ fontSize: 10, color: 'red' }}>{errors.password}</ThemeText>
      }
      <ThemeTextButton
        title='Sign in'
        disabled={!isValid}
        onClickOrPress={handleSubmit}
      />
    </>
  )
}

export default LoginForm;