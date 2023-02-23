import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from '../auth/auth';

import Button from '../components/Button';
import Input from '../components/Input';

export default function SignUpPage() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    "email": "",
    "name": "",
    "password": "",
    "role": "customer",
    "avatar": "https://pixy.org/src/20/201310.jpg"
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useAuth('guest')

  function onSignUp (event) {
    setIsLoading(true)
    fetch('https://api.escuelajs.co/api/v1/users', {
      method: "post",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => {
      switch (res.status) {
        case 201:
          navigate('/login')
          return
        case 401:
          setError(`Invalid credentials`)
          break
          default:
            setError(`It wasn't possible to fetch the data, ${res.status} ${res.statusText}`)
      }
      setIsLoading(false)
    })
    .catch(err => {
      setError(`It wasn't possible to create the user, ${err}`)
      console.error(err)
      setIsLoading(false)
    })
    event.preventDefault()
  }

  return (
    <div className="mx-auto mt-40 bg-white border rounded p-5 max-w-md ">
      <h1 className="text-2xl pb-5">  
        Login
      </h1>
      <form className='space-y-2' method='get' onSubmit={e => onSignUp(e)}>
        <Input 
          type="name"
          placeholder="Your name"
          value={user.name} 
          onInput={e => setUser({...user, name: e.target.value})}
          onChange={() => error ? setError('') : undefined}
          required 
        >
          Name
        </Input>
        <Input 
          type="email"
          placeholder="email@example.com"
          value={user.email} 
          onInput={e => setUser({...user, email: e.target.value})}
          onChange={() => error ? setError('') : undefined}
          required 
        >
          Email
        </Input>
        <Input 
          type="password" 
          placeholder="********" 
          minLength="8" 
          pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$"
          title="at least one uppercase, at least one lowercase, at least a number and a minimum of 8 character"
          autoComplete="on"
          value={user.password} 
          onInput={e => setUser({...user, password: e.target.value})}
          onChange={() => error ? setError('') : undefined}
          required 
        >
          Password
        </Input>
        <Button type="submit" disabled={isLoading || error}>
          Signup
        </Button>
        <span className={isLoading ? 'block' : 'hidden'}> Signing up...</span>
        <p className={`text-red-500 ${error ? 'block' : 'hidden'}`}>
          {error}
        </p>
      </form>
      <NavLink to="/login" className="underline hover:text-slate-700">
        Go to login
      </NavLink>
    </div>
  )
}