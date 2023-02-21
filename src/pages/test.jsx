import Button from '../components/Button';

export default function Test() {
  return (
    <div className="space-y-4 p-5">
      <div>
        <h2>
          Button
        </h2>
        <Button onClick={() => console.log('u pressed me')}>
          Press me!
        </Button>
      </div>
    </div>
  )
}