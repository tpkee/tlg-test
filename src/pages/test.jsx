import Button from '../components/Button';
import Select from '../components/Select';
import CardSkeleton from '../components/CardSkeleton';
import CardProduct from '../components/CardProduct';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Checkbox from '../components/Checkbox';

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
      <div>
        <h2>
          CardProduct
        </h2>
        <CardProduct
          title="Practical Frozen Bike"
          price="832"
          image="https://placeimg.com/640/480/any?r=0.9178516507833767"
        />
      </div>
      <div>
        <h2>
          CardSkeleton
        </h2>
        <CardSkeleton />
      </div>
      <div className='max-w-sm'>
        <h2>
          Select
        </h2>
        <Select defaultValue='' label="my select">
          <option value='' disabled>Select something</option>
          <option value="something">lol</option>
          <option value="das">das</option>
        </Select>
      </div>
      <div>
        <h3>
          Textarea (no label)
        </h3>
        <Textarea placeholder="Hello there!" />
        <h3>
          Textarea (with label)
        </h3>
        <Textarea placeholder="Also">
          Label
        </Textarea>
      </div>
      <div>
        <h3>
          Checkbox
        </h3>
        <Checkbox>
          Check me
        </Checkbox>
      </div>
    </div>
  )
}