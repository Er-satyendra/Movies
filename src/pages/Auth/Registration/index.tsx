import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Shared/Button';
import Checkbox from '../../../components/Shared/Checkbox';
import InputField from '../../../components/Shared/FieldInput';
import ROUTES from '../../../constants/Routes';
import mainApiService from '../../../service';
import { AUTH } from '../../../service/APIDefinition';
import { setStorage } from '../../../utilities/storage';
import { validateRegistrationForm } from '../../../validations/RegistrationForm';

const Login: React.FC = () => {
  const [registrationData, setRegistrationData] = useState<RegistrationProps>({ name: '', email: '', password: '', rememberMe: false })
  const [errors, setErrors] = useState<Partial<RegistrationProps>>({ name: '', email: '', password: '' })
  const navigate = useNavigate()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData(prev => ({ ...prev, rememberMe: event.target.checked }))
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateRegistrationForm(registrationData);
    if (Object.keys(validationErrors)?.length) {
      setErrors(validationErrors)
      return
    }

    const requestedData = AUTH.REGISTER<Partial<RegistrationProps>>(registrationData)
    const result = await mainApiService<Partial<RegistrationProps>, AuthResponseProps>(requestedData)

    if (result) {
      if (registrationData?.rememberMe) {
        setStorage<Partial<LoginProps>>('rememberMe', { email: registrationData?.email, password: registrationData?.password })
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
            <h1 className="text-center mb-4 fs80 fw600">Sign up</h1>
            <form onSubmit={handleSubmit}>
              <div className='mt-5'>
                <InputField error={errors.name} label="Name" name='name' type="text" value={registrationData.name} onChange={handleChange} />
              </div>
              <div className='mt-4'>
                <InputField error={errors.email} label="Email" name='email' type="email" value={registrationData.email} onChange={handleChange} />
              </div>
              <div className='mt-4'>
                <InputField error={errors.password} label="Password" name='password' type="password" value={registrationData.password} onChange={handleChange} />
              </div>
              <div className="mt-4">
                <Checkbox label='Remember Me' onChange={handleRememberMeChange} value={registrationData.rememberMe} />
              </div>
              <div className='mt-1'>
                <Button label="Login"></Button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;