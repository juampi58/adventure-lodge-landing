'use client';

import { useRef } from 'react';
import { MapIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';

const contactLineStyles =
  'flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400';

const contactLineIconStyles = 'w-4 h-4';

const inputStyles =
  'w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0';

export default function Page() {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const currentForm = form.current;

    if (currentForm) {
      emailjs
        .sendForm(
          'service_rpxk4ib', // Replace with your EmailJS service ID
          'template_slithib', // Replace with your EmailJS template ID
          form.current,
          'ozoeMI9h2JBqVbVIJ' // Replace with your EmailJS user ID
        )
        .then(
          (_) => {
            currentForm.reset();
            alert('Tu mensaje fue enviado con éxito!');
          },
          (_) => {
            alert(
              'Hubo un error al enviar tu mensaje. Por favor, intentá nuevamente.'
            );
          }
        );
    }
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-900" id="contact-page">
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center"
        id="contact-header"
      >
        <h2 className="text-4xl font-bold dark:text-gray-100">Contacto</h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-400">
          Estamos acá para ayudarte. Llená el formulario, envianos un e-mail o
          llamanos.
        </p>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <section>
          <h2 className="text-lg font-bold dark:text-gray-100">
            Medios de contacto
          </h2>
          <div className={contactLineStyles}>
            <MapIcon className={contactLineIconStyles} />
            <a href="https://maps.app.goo.gl/3V4gv6om4U1R9LSU8">
              Sauce, Corrientes, Argentina
            </a>
          </div>
          <div className={contactLineStyles}>
            <EnvelopeIcon className={contactLineIconStyles} />
            <a href="mailto:hello@company.com">elpoi@gmail.com</a>
          </div>
          <div className={contactLineStyles}>
            <PhoneIcon className={contactLineIconStyles} />
            <a href="tel:11111111111">+54 9 11 3273 5924</a>
          </div>
        </section>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Nombre y apellido"
              className={inputStyles}
              name="name"
            />
          </div>
          <div className="mb-5">
            <label className="sr-only">e-mail</label>
            <input
              id="email_address"
              type="email"
              placeholder="E-mail"
              className={inputStyles}
              name="email"
            />
          </div>
          <div className="mb-5">
            <label className="">Fecha aproximada de tu visita</label>
            <div className="grid grid-cols-2 gap-x-4">
              <input
                id="date"
                type="date"
                className={inputStyles}
                name="date"
              />
              <input
                id="phone"
                type="text"
                placeholder="Teléfono"
                className={inputStyles}
                name="phone"
              />
            </div>
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Escribí tu mensaje"
              className={inputStyles + ' h-32'}
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className={
              'w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black '
            }
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
