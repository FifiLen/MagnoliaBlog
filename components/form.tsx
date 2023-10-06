'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mwkdwydw");
  if (state.succeeded) {
      return <p>Wiadomość wysłana pomyślnie. Dziękujemy!</p>
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white max-w-lg">
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-playfair mb-2 font-bold text-base">
      Imię/Pseudonim:
    </label>
    <input
      id="name"
      type="text"
      name="name"
      className="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none"
      placeholder="Twoje imię lub pseudonim"
    />
    <ValidationError 
      prefix="Name" 
      field="name"
      errors={state.errors}
      className="text-red-500 text-xs italic"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-800 font-playfair mb-2 font-bold text-base">
      Adres e-mail:
    </label>
    <input
      id="email"
      type="email" 
      name="email"
      className="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none"
      placeholder="Twój adres e-mail"
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
      className="text-red-500 text-xs italic"
    />
  </div>

  <div className="mb-6">
    <label htmlFor="message" className="block text-gray-800 font-playfair mb-2 font-bold text-base">
      Wiadomość:
    </label>
    <textarea
  id="message"
  name="message"
  maxLength={600}
  className="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none h-32"
  placeholder="Twoja wiadomość (maks. 600 znaków)"
/>
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
      className="text-red-500 text-xs italic"
    />
  </div>

  <div className="flex items-center justify-between">
    <button type="submit" disabled={state.submitting} className="border font-playfair font-bold text-gray-800 py-2 px-4 rounded focus:outline-none">
      Wyślij wiadomość
    </button>
  </div>
</form>

  
  );
}
function Form() {
  return (
    <ContactForm />
  );
}
export default Form;
