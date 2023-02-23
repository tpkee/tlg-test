import { useState } from 'react';

import { useAuth } from '../auth/auth';

import Button from '../components/Button';
import Input from '../components/Input';

export default function Contact() {
  useAuth('logged')

  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    text: '',
    isConsent: false
  });


  function onContact (event) {
    console.log(contactForm)
    event.preventDefault()
  }

  return (
    <div className="mx-auto mt-40 bg-white border rounded p-5 max-w-md ">
      <h1 className="text-2xl pb-5">  
        Contact us
      </h1>
      <form className='space-y-2' onSubmit={e => onContact(e)}>
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
        {
        // todo: add select here
        }
        {
        // todo: add textarea here
        }
        {
        // todo: add checkbox here
        }
        <Button type="submit">
          Send
        </Button>
      </form>
    </div>
  )
}