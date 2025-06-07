import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: ''
  })

  const services = [
    { name: 'Herreklip', price: '300 kr', duration: '30 min' },
    { name: 'Skæg trimning', price: '150 kr', duration: '15 min' },
    { name: 'Herreklip + Skæg', price: '400 kr', duration: '45 min' },
    { name: 'Styling', price: '200 kr', duration: '20 min' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hej Juul! Jeg vil gerne booke: ${selectedService}\n\nNavn: ${formData.name}\nTelefon: ${formData.phone}\nEmail: ${formData.email}\nØnsket dato: ${formData.date}\nØnsket tid: ${formData.time}`
    const whatsappUrl = `https://wa.me/4520123456?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <Head>
        <title>Juul Kerk - Professionel Herreklipning</title>
        <meta name="description" content="Book tid til professionel herreklipning hos Juul Kerk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ minHeight: '100vh', backgroundColor: '#1a1a1a', color: 'white', fontFamily: 'Arial, sans-serif' }}>
        {/* Header */}
        <header style={{ background: 'linear-gradient(135deg, #2c1810, #4a2c1a)', padding: '2rem 1rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', margin: '0', fontWeight: 'bold' }}>JUUL KERK</h1>
          <p style={{ fontSize: '1.2rem', margin: '0.5rem 0 0 0', opacity: 0.9 }}>Professionel Herreklipning</p>
        </header>

        {/* Services */}
        <section style={{ padding: '2rem 1rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Vælg Service</h2>
          <div style={{ display: 'grid', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service.name)}
                style={{
                  background: selectedService === service.name ? 'linear-gradient(135deg, #4a2c1a, #6d3f26)' : '#2a2a2a',
                  border: selectedService === service.name ? '2px solid #8b5a3c' : '2px solid transparent',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>{service.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.8 }}>
                  <span>{service.price}</span>
                  <span>{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form */}
        {selectedService && (
          <section style={{ padding: '2rem 1rem', backgroundColor: '#2a2a2a' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Book Tid - {selectedService}</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="Dit navn"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#3a3a3a',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
                <input
                  type="tel"
                  placeholder="Telefonnummer"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#3a3a3a',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#3a3a3a',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#3a3a3a',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#3a3a3a',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Vælg tid</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #4a2c1a, #6d3f26)',
                    color: 'white',
                    border: 'none',
                    padding: '1.2rem',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
                  onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
                >
                  📱 Send booking via WhatsApp
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Contact */}
        <section style={{ padding: '2rem 1rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Kontakt</h2>
          <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
            <a href="tel:+4520123456" style={{ color: '#8b5a3c', textDecoration: 'none', fontSize: '1.1rem' }}>
              📞 +45 20 12 34 56
            </a>
            <a href="mailto:juul@kerk.dk" style={{ color: '#8b5a3c', textDecoration: 'none', fontSize: '1.1rem' }}>
              ✉️ juul@kerk.dk
            </a>
            <p style={{ margin: '1rem 0', opacity: 0.8 }}>
              📍 Adresse kommer her<br />
              🕒 Man-Fre: 9-17 | Lør: 9-15
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
