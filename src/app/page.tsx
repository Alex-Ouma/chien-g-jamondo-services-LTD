import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Chien'g Jamondo Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your trusted partner for cyber services, branding solutions, quality cereals, and secure mobile banking
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/services" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              Explore Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">About Our Company</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals, institutions, and small businesses through accessible cyber services, 
                quality agricultural products, and reliable mobile banking solutions that promote financial 
                inclusion and sustainable growth.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Chien'g Jamondo Services Ltd. is a growing multi-service company based in Misori, Siaya County, 
                Kenya. We provide reliable digital solutions, quality agricultural products, and secure financial 
                transaction services—bridging the present with the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Our Core Values</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: 'Integrity', desc: 'Honesty, transparency, and accountability' },
              { title: 'Customer Focus', desc: 'Responsive and friendly service' },
              { title: 'Professionalism', desc: 'High standards in service delivery' },
              { title: 'Innovation', desc: 'Continuous improvement' },
              { title: 'Sustainability', desc: 'Long-term development' }
            ].map((value, idx) => (
              <div key={idx} className="text-center bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <ServiceCard 
              icon="💻"
              title="Cyber & Branding"
              description="Modern digital and branding solutions"
              features={[
                'Internet access and computer services',
                'Printing and photocopying',
                'Professional branding packages',
                'E-Citizen services'
              ]}
            />
            <ServiceCard 
              icon="🌾"
              title="Cereal Trading"
              description="Quality agricultural products"
              features={[
                'Maize, millet, and sorghum supply',
                'Rice and bean distribution',
                'Bulk and retail sales',
                'Quality assurance'
              ]}
            />
            <ServiceCard 
              icon="📱"
              title="Mobile Banking"
              description="Secure financial transactions"
              features={[
                'M-Pesa deposits & withdrawals',
                'Equity & KCB agency services',
                'Airtime and bill payments',
                'Funds transfer services'
              ]}
            />
          </div>
          <div className="text-center">
            <Link 
              href="/services" 
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for all your cyber, branding, agricultural, and banking needs</p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
