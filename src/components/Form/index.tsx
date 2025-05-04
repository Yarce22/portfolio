"use client"
import { useState } from "react"
import { Button } from "../shared/Button"

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch('/api/contact', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus(`Error al enviar el mensaje: ${result.error || 'Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
    }
  };

  return (
    <form
      className="w-[80%] lg:w-1/2 flex flex-col gap-3 px-6 py-8 bg-linear-to-br from-Titles to-green-950 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full h-12 px-5 text-Text font-Geist bg-Background rounded-xl"
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full h-12 px-5 text-Text font-Geist bg-Background rounded-xl"
        required
      />
      <textarea
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="w-full h-24 px-5 py-2 text-Text font-Geist bg-Background rounded-xl"
        required
      />
      <Button label={status === 'Enviando...' ? 'Enviando...' : 'Send'} type="submit" disabled={status === 'Enviando...'} />
      <span>{status}</span>
    </form>
  )
}

export { Form }