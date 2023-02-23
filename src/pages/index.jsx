import { useAuth, logout } from '../auth/auth';
import Button from '../components/Button';

export default function Index() {
  useAuth('logged')

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button onClick={() => logout()}>
        Logout
      </Button>
    </>
  )
}