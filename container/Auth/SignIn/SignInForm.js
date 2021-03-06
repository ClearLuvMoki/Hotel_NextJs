import React, { useContext } from 'react';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Input, Switch, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { AuthContext } from 'context/AuthProvider';
import { FORGET_PASSWORD_PAGE } from 'settings/constant';
import { FieldWrapper, SwitchWrapper, Label } from '../Auth.style';

const SignInForm = () => {
  const { signIn } = useContext(AuthContext);
  const { control, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signIn(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        label="Username"
        htmlFor="username"
        error={
          errors.username && (
            <>
              {errors.username?.type === 'required' && (
                <span>This field is required!</span>
              )}
              {/* {errors.email?.type === 'pattern' && (
                <span>Please enter a valid email address!</span>
              )} */}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          type="username"
          id="username"
          name="username"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            // pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          }}
        />
      </FormControl>
      <FormControl
        label="Password"
        htmlFor="password"
        error={
          errors.password && (
            <>
              {errors.password?.type === 'required' && (
                <span>This field is required!</span>
              )}
              {errors.password?.type === 'minLength' && (
                <span>Password must be at lest 6 characters!</span>
              )}
              {errors.password?.type === 'maxLength' && (
                <span>Password must not be longer than 20 characters!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input.Password />}
          defaultValue=""
          control={control}
          id="password"
          name="password"
          rules={{ required: true, minLength: 6, maxLength: 20 }}
        />
      </FormControl>
      <FieldWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="rememberMe"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>Remember Me</Label>
        </SwitchWrapper>
        <Link href={FORGET_PASSWORD_PAGE}>
          <a>Forget Password ?</a>
        </Link>
      </FieldWrapper>
      <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: '100%' }}
      >
        <MdLockOpen />
        Login
      </Button>
    </form>
  );
};

export default SignInForm;
