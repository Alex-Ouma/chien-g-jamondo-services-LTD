'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with us for any inquiries or support</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg text-blue-900 mb-4">📍 Location</h3>
                <p className="text-gray-700">
                  Misori, Siaya County<br/>
                  Kenya
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg text-blue-900 mb-4">📧 Email</h3>
                <p className="text-gray-700">
                  <a href="mailto:tonnymosesowino@gmail.com" className="text-blue-600 hover:text-blue-800">
                    tonnymosesowino@gmail.com
                  </a>
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg text-blue-900 mb-4">📱 Phone</h3>
                <p className="text-gray-700">
                  <a href="tel:+254703615836" className="text-blue-600 hover:text-blue-800">
                    +254 703 615 836
                  </a>
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-blue-900 mb-4">🕒 Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 8:00 AM - 6:00 PM<br/>
                  Saturday: 9:00 AM - 4:00 PM<br/>
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Send us a Message</h2>
              
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                    placeholder="Your email"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                  >
                    <option value="">Select a subject</option>
                    <option value="cyber">Cyber & Branding Services</option>
                    <option value="cereal">Cereal Trading</option>
                    <option value="banking">Mobile Banking</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Services Quick Access */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">Need Help With Something Specific?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '💻',
                  title: 'Cyber & Branding',
                  contact: 'Email: tonnymosesowino@gmail.com'
                },
                {
                  icon: '🌾',
                  title: 'Cereal Trading',
                  contact: 'Phone: +254 703615836'
                },
                {
                  icon: '📱',
                  title: 'Mobile Banking',
                  contact: 'Phone: +254 703615836'
                }
              ].map((service, idx) => (
                <div key={idx} className="text-center bg-blue-50 p-6 rounded-lg">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-bold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.contact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section (Placeholder) */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Find Us</h2>
            <div className="bg-gray-300 rounded-lg overflow-hidden h-80 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-700 font-bold">📍 Misori, Siaya County, Kenya</p>
                <p className="text-gray-600 text-sm">Map integration coming soon</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What are your business hours?',
                  a: 'We operate Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. We are closed on Sundays.'
                },
                {
                  q: 'Do you offer delivery services for cereals?',
                  a: 'Yes, we offer both bulk and retail distribution to retailers, schools, and institutions. Contact us for delivery details.'
                },
                {
                  q: 'Are your branding services affordable?',
                  a: 'Absolutely! We provide modern and affordable branding solutions for individuals and institutions of all sizes.'
                },
                {
                  q: 'What mobile banking services do you offer?',
                  a: 'We offer M-Pesa, Equity Bank, KCB, and Co-operative Bank services, plus airtime and bill payments.'
                }
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-blue-900 mb-2">{item.q}</h4>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
