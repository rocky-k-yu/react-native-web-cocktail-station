import React from 'react';
import ThemeTextButton from '@emma-services/common/src/shared/components/ThemeTextButton';
import ThemeTextField from '@emma-services/common/src/shared/components/ThemeTextField';
import ThemeText from '@emma-services/common/src/shared/components/ThemeText'
import ThemeWarningMessage from '@emma-services/common/src/shared/components/ThemeWarningMessage'
import ThemeErrorMessage from '@emma-services/common/src/shared/components/ThemeErrorMessage'

const LoginForm = (formikProps: any) => {
  const { values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit } = formikProps;
  return (
    <>
      <ThemeTextField
        label="E-mail"
        placeholder="example@company.com"
        onChange={handleChange('email')}
        onBlur={() => setFieldTouched('email')}
      />
      {errors.email &&
        <ThemeWarningMessage props= {{styles:{fontSize:10}}}>{errors.email}</ThemeWarningMessage>
      }
      <ThemeTextField
        label="Password"
        placeholder="1234ABC"
        onChange={handleChange('password')}
        onBlur={() => setFieldTouched('password')}
      />
      {errors.password &&
        <ThemeErrorMessage props= {{styles:{fontSize:10}}}>{errors.password}</ThemeErrorMessage>
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