import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { FormRow, Logo, Alert } from '../components';
import { useAppContext } from '../content/appContext';

// global context and navigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
// if possible prefer local state
// global state

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state useNavigate
  const {isLoading, showAlert} = useAppContext();
  
  useEffect(() => {}, [values]);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        {/* toggle the Title */}
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {showAlert && <Alert />}

        {/* name */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />

        <button className='btn btn-block' type='submit'>
          submit
        </button>

        <p>
          {!values.isMember ? 'Already a member?' : 'Not yet a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {!values.isMember ? 'Login' : 'Register'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
