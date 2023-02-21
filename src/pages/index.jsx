import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!sessionStorage.getItem('access_token')) {
      navigate('/login')
    }
  })

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}