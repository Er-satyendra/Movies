import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Shared/Button';
import Checkbox from '../../../components/Shared/Checkbox';
import InputField from '../../../components/Shared/FieldInput';
import ROUTES from '../../../constants/Routes';
import mainApiService from '../../../service';
import { AUTH } from '../../../service/APIDefinition';
import { getStorage, setStorage } from '../../../utilities/storage';
import { validateLoginForm } from '../../../validations/LoginForm';

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginProps>({email: '', password: '', rememberMe: false})
  const [errors, setErrors] = useState<Partial<LoginProps>>({email: '', password: ''})
  const navigate = useNavigate()

  useEffect(()=>{
    const rememberMeData = getStorage<Partial<LoginProps>>('rememberMe')
    if(rememberMeData){
      setLoginData({rememberMe: true, email:rememberMeData.email as string, password: rememberMeData.password as string})
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData(prev=>({...prev, [event.target.name]: event.target.value}))
  }

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData(prev=>({...prev, rememberMe: event.target.checked}))
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateLoginForm(loginData);
    if(Object.keys(validationErrors)?.length){
      setErrors(validationErrors)
      return
    }
    const requestedData = AUTH.LOGIN<Partial<LoginProps>>(loginData)
    const result = await mainApiService<Partial<LoginProps>, AuthResponseProps>(requestedData)

    if (result) {
      if (loginData?.rememberMe) {
        setStorage<Partial<LoginProps>>('rememberMe', { email: loginData?.email, password: loginData?.password })
      }
      setStorage<AuthResponseProps>('user', result)
      setStorage<string>('auth_config', result?.token)
      navigate(ROUTES.MOVIE_LIST)
    }
  };

  return (
    <div className='d-flex align-items-center min-vh-100'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-5 col-lg-4">
            <h1 className="text-center mb-4 fs80 fw600">Sign in</h1>
            <form onSubmit={handleSubmit}>
              <div className='mt-5'>
                <InputField error={errors?.email} label="Email" name={'email'} type="text" value={loginData.email} onChange={handleChange} />
              </div>
              <div className='mt-4'>
                <InputField error={errors?.password} label="Password" name={'password'} type="password" value={loginData.password} onChange={handleChange} />
              </div>
              <div className="mt-4">
               <Checkbox label='Remember Me' onChange={handleRememberMeChange} value={loginData.rememberMe}/>
              </div>
              <div className='mt-1'>
                <Button label="Login" type='submit' onClick={()=>{}}></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;