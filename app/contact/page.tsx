'use client';

import Base from "#/components/Base";
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState("");

  const submitForm = (event:any) => {
    event.preventDefault();
    const form = event.target;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      setStatus("Thanks for your submission!");
      form.reset()
    }).catch(error => {
      setStatus("Oops! There was a problem submitting your form")
    });
  }

  return (
    <Base>
      <div className="container mx-auto space-y-5 mt-10 px-6 md:px-3 flex-1">
        <div>
          <p className="text-3xl text-center">Contact</p>
          <p className="text-center text-xs text-blue-400">Connect with me</p>
        </div>
      </div>
      <div className="p-4">
      <form onSubmit={submitForm} action="https://formsubmit.co/1f9ad08fbc789cbab9d83fc60e929089" method="POST">
        <input type="hidden" name="_url" value="https://amrahul.in/contact" />
          <div className="space-y-6">
            <div>
              <label className="text-gray-700">
                <span>Name</span>
                <input type="text" name="name" className="mt-1 w-full border border-gray-300 p-3 rounded outline-none focus:border-blue-400" required />
              </label>
            </div>
            <div>
              <label className="text-gray-700">
                <span>Email</span>
                <input type="email" name="email" className="mt-1 w-full border border-gray-300 p-3 rounded outline-none focus:border-blue-400" required />
              </label>
            </div>
            <div>
              <label className="text-gray-700">
                <span>Message</span>
                <textarea name="message" className="mt-1 w-full border border-gray-300 p-3 rounded outline-none focus:border-blue-400" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit" className="w-full py-3 px-4 text-white rounded-md bg-blue-400">Send</button>
            </div>
          </div>
        </form>
        <div>
          {status}
        </div>
      </div>
    </Base>
  )
}
