import { useState } from 'react';

import { useAuth } from '../auth/auth';

import Checkbox from '../components/Checkbox';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import Select from '../components/Select';
import Input from '../components/Input';

export default function Contact() {
  useAuth('logged')

  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    text: '',
    isConsenting: false
  });
  const [isErrors, setErrors] = useState(false)


  function onContact (event) {
    if (contactForm.isConsenting) {
      if (isErrors) {
        setErrors(false)
      }
      console.log(contactForm)
    } else {
      setErrors(true)
    }
    event.preventDefault()
  }

  return (
    <div className='space-y-6'>
      <h1 className='text-4xl font-bold text-center'>
        Products page
      </h1>
      <div className="mx-auto bg-white border rounded p-5 max-w-md">
        <form className='space-y-2' method='post' onSubmit={e => onContact(e)}>
          <Input 
            type="text"
            placeholder="Your name"
            value={contactForm.firstName} 
            onInput={e => setContactForm({...contactForm, firstName: e.target.value})}
            required 
          >
            First name
          </Input>
          <Input 
            type="text"
            placeholder="Your surname"
            value={contactForm.lastName} 
            onInput={e => setContactForm({...contactForm, lastName: e.target.value})}
            required 
          >
            Last name
          </Input>
          <Input 
            type="email"
            placeholder="email@example.com"
            value={contactForm.email} 
            onInput={e => setContactForm({...contactForm, email: e.target.value})}
            required 
          >
            Email
          </Input>
          <Select 
            defaultValue={contactForm.subject} 
            onChange={e => setContactForm({...contactForm, subject: e.target.value})}
            required
          >
            <option value='' disabled>
              Select a subject
            </option>
            <option value='something_something'>
              Something something
            </option>
            <option value='dunno'>
              Dunno
            </option>
          </Select>
          <Textarea 
            required
            onInput={e => setContactForm({...contactForm, text: e.target.value})} 
          />
          <Checkbox checked={contactForm.isConsenting} onChange={e => setContactForm({...contactForm, isConsenting: e.target.checked})}>
            You accept our privacy policy (required)
          </Checkbox>
          <Button type="submit">
            Send
          </Button>
          <p className={`text-red-500 ${isErrors ? 'block' : 'hidden'}`}>You must accept the privacy policy!</p>
        </form>
      </div>
    </div>
  )
}