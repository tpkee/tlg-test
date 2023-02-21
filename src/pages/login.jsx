import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Login() {
  const [email, setEmail] = useState('chopchop@turoro.dasm');
  const [password, setPassword] = useState('AValidPassw0rd');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      <form className='space-y-2' method='get' onSubmit={e => onLogin(e)}>
        <Input 
          type="email"
          placeholder="email@example.com"
          value={email} 
          onInput={e => setEmail(e.target.value)}
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
    </div>
  )
}