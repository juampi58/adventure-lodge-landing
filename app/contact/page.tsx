'use client';

import { useRef, useState } from 'react';
import { MapIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';

const contactLineStyles = 'flex items-center mt-2 space-x-2';

const contactLineIconStyles = 'w-4 h-4';

const inputStyles =
  'w-full px-4 py-3 border-2 placeholder-[#C97A2B] rounded-md outline-none focus:border-[#C97A2B] focus:ring-2 focus:ring-[#C97A2B]';

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const currentForm = form.current;

    if (currentForm) {
      setIsSubmitting(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then((_) => {
          currentForm.reset();
          alert('Tu mensaje fue enviado con éxito!');
          setIsSubmitting(false);
        })
        .catch((_) => {
          alert(
            'Hubo un error al enviar tu mensaje. Por favor, intentá nuevamente.'
          );
          setIsSubmitting(false);
        });
    }
  };
  return (
    <div id="contact-page">
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center"
        id="contact-header"
      >
        <h2 className="text-4xl font-bold ">Contacto</h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto ">
          Estamos acá para ayudarte. Llená el formulario, envianos un e-mail o
          llamanos.
        </p>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <section>
          <h2 className="text-lg font-bold ">Medios de contacto</h2>
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
              placeholder={'Nombre y apellido'}
              className={inputStyles}
              name="name"
              required
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
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <input
              id="date"
              type="text"
              className={inputStyles}
              name="date"
              placeholder="Fecha aproximada de tu visita"
              onFocus={(e) => (e.currentTarget.type = 'date')}
              onBlur={(e) => (e.currentTarget.type = 'text')}
              required
            />
            <input
              id="phone"
              type="text"
              placeholder="Teléfono"
              className={inputStyles}
              name="phone"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Escribí tu mensaje"
              className={inputStyles + ' h-32'}
              name="message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={
              'w-full py-4  px-7 bg-[#FFB84D] text-[#4D2800] font-semibold  transition-colors  rounded-md  focus:outline-none focus:ring-offset-2 focus:ring hover:bg-[#E69A3C]'
            }
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
}
