import { useState } from 'react';
import { NavLink } from "react-router-dom";

import { useAuth } from '../auth/auth';

import Button from '../components/Button';
import Input from '../components/Input';

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useAuth('guest')

  function onLogin (event) {
    setIsLoading(true)
    fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: "post",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => {
      switch (res.status) {
        case 201:
          return res.json()
        case 401:
          setError(`Invalid credentials`)
          break
          default:
            setError(`It wasn't possible to fetch the data, ${res.status} ${res.statusText}`)
      }
      return undefined
    })
    .then(data => {
      if (data) {
        if (error) {
          setError('')
        }
        const { access_token } = data
        sessionStorage.setItem('access_token', access_token)

      }
      setIsLoading(false)
    })
    .catch(err => {
      setError(`It wasn't possible to fetch the data, ${err}`)
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
      <form className='space-y-2' method='post' onSubmit={e => onLogin(e)}>
        <Input 
          type="email"
          placeholder="email@example.com"
          value={email} 
          onInput={e => setEmail(e.target.value)}
          onChange={() => setError('')}
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
          value={password} 
          onInput={e => setPassword(e.target.value)}
          onChange={() => setError('')}
          required 
        >
          Password
        </Input>
        <Button type="submit" disabled={isLoading || error}>
          Login
        </Button>
        <span className={isLoading ? 'block' : 'hidden'}> Logging in...</span>
        <p className={`text-red-500 ${error ? 'block' : 'hidden'}`}>
          {error}
        </p>
      </form>
      <NavLink to="/signup" className="underline hover:text-slate-700">
        Go to signup
      </NavLink>
    </div>
  )
}