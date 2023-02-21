import Button from '../components/Button';
import Input from '../components/Input';

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
      <div>
        <h3>
          Input (no label)
        </h3>
        <Input placeholder="Hello there!" />
        <h3>
          Input (with label)
        </h3>
        <Input disabled placeholder="Also disabled">
          Label
        </Input>
      </div>
    </div>
  )
}