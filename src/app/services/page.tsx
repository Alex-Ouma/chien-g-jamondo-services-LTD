import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  const cyberServices = [
    'Internet access and computer services',
    'Printing, photocopying, and scanning',
    'Document typing and formatting',
    'Online applications and registration',
    'E-Citizen services',
    'KRA PIN registration and filing',
    'School and government online services',
    'Branding packages (banners, posters, business cards, flyers, certificates)',
    'Passport photos and ID photos'
  ];

  const cerealServices = [
    'Supply of maize, millet, and sorghum',
    'Rice (Pishori) distribution',
    'Beans supply',
    'Seed supply and preservation',
    'Bulk and retail cereal sales',
    'Distribution to retailers, schools, and institutions',
    'Quality assurance and standardization',
    'Reliable supply chains'
  ];

  const bankingServices = [
    'M-Pesa deposits and withdrawals',
    'Equity Bank agency services',
    'KCB agency services',
    'Co-operative Bank services',
    'Airtime and bill payments',
    'Funds transfer services',
    'Mobile money services',
    'Agency banking facilities'
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive solutions for your digital, agricultural, and financial needs</p>
        </div>
      </section>

      {/* Service 1: Cyber & Branding */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">💻 Cyber and Branding Services</h2>
            <p className="text-gray-700 text-lg mb-6">
              We provide modern and affordable digital and branding solutions for individuals and institutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ServiceCard
                icon="💻"
                title="Digital Services"
                description="Complete cyber solutions for individuals and businesses"
                features={[
                  'Internet access and computer services',
                  'Printing, photocopying, and scanning',
                  'Document typing and formatting',
                  'E-Citizen services',
                  'KRA PIN registration and filing'
                ]}
              />
              <ServiceCard
                icon="🎨"
                title="Branding Solutions"
                description="Professional branding and printing packages"
                features={[
                  'Banners and posters design',
                  'Business cards and flyers',
                  'Certificates and promotional materials',
                  'Passport and ID photos',
                  'Complete branding packages'
                ]}
              />
            </div>
          </div>

          {/* Service 2: Cereal Trading */}
          <div className="mb-12 py-8 bg-gray-50 px-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">🌾 Agribusiness – Cereal Trading</h2>
            <p className="text-gray-700 text-lg mb-6">
              Our agribusiness division focuses on sourcing, storage, and distribution of quality cereals 
              to support food security and commercial trade.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ServiceCard
                icon="🌾"
                title="Grain Supply"
                description="High-quality cereal distribution"
                features={[
                  'Maize, millet, and sorghum supply',
                  'Rice (Pishori) distribution',
                  'Beans and other crops',
                  'Seed supply and preservation',
                  'Quality assurance'
                ]}
              />
              <ServiceCard
                icon="📦"
                title="Sales & Distribution"
                description="Bulk and retail cereal services"
                features={[
                  'Bulk and retail sales',
                  'Distribution to retailers',
                  'Schools and institutions supply',
                  'Reliable supply chains',
                  'Competitive pricing'
                ]}
              />
            </div>
          </div>

          {/* Service 3: Mobile Banking */}
          <div className="py-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">📱 Mobile Banking Services</h2>
            <p className="text-gray-700 text-lg mb-6">
              Chien'g Jamondo Services Ltd. operates as a trusted mobile banking and agency banking service provider, 
              serving as a bridge between financial institutions and the community.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ServiceCard
                icon="📱"
                title="Mobile Money Services"
                description="Convenient mobile financial transactions"
                features={[
                  'M-Pesa deposits and withdrawals',
                  'Funds transfer services',
                  'Mobile money services',
                  'Airtime and bill payments',
                  '24/7 transaction support'
                ]}
              />
              <ServiceCard
                icon="🏦"
                title="Agency Banking"
                description="Partnership with major financial institutions"
                features={[
                  'Equity Bank agency services',
                  'KCB agency services',
                  'Co-operative Bank services',
                  'Financial inclusion',
                  'Convenient access'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-xl mb-2">Integrated Services</h3>
              <p>All your needs under one roof—saving you time and cost</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold text-xl mb-2">Quality & Reliability</h3>
              <p>Consistent, high-quality services you can depend on</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-xl mb-2">Customer First</h3>
              <p>Responsive, friendly service designed for your satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Ready to Experience Our Services?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about how Chien'g Jamondo Services can help your business grow.
          </p>
          <a 
            href="/contact" 
            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
