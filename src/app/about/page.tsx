export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Building trust and delivering excellence since 2026</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Company Profile</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Chien'g Jamondo Services Ltd. is a growing multi-service company based in Misori, Siaya County, Kenya. 
              Established in 2026, the company operates with a strong focus on cyber services, branding services, 
              cereal trading, and mobile banking services.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We provide reliable digital solutions, quality agricultural products, and secure financial 
              transaction services under various trusted platforms. We help individuals, institutions, and 
              businesses operate efficiently and grow sustainably.
            </p>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals, institutions, and small businesses through accessible cyber services, 
                quality agricultural products, and reliable mobile banking solutions that promote financial 
                inclusion and sustainable growth.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Our goal is to serve as a dependable partner in digital access, food supply, and financial 
                inclusion—supporting economic development at the community and regional level. Thus bridging 
                the present with the future.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Integrity',
                  desc: 'We conduct our business with honesty, transparency, and accountability.'
                },
                {
                  title: 'Customer Focus',
                  desc: 'We prioritize customer satisfaction through responsive and friendly service.'
                },
                {
                  title: 'Professionalism',
                  desc: 'We uphold high standards in service delivery and business conduct.'
                },
                {
                  title: 'Innovation',
                  desc: 'We continuously improve our services to meet changing customer needs.'
                },
                {
                  title: 'Sustainability',
                  desc: 'We promote responsible business practices that support long-term development.'
                }
              ].map((value, idx) => (
                <div key={idx} className="border-l-4 border-blue-900 pl-6 py-4">
                  <h4 className="font-bold text-lg text-blue-900 mb-2">{value.title}</h4>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Guiding Principles */}
          <div className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Guiding Principles</h2>
            <div className="space-y-4">
              {[
                'Customer First – We exist to serve and satisfy our clients.',
                'Trust and Reputation – We protect our reputation through honest dealings.',
                'Quality Service – We deliver consistent, high-quality services.',
                'Professional Excellence – We maintain competence, courtesy, and reliability.',
                'Accountability – We take responsibility for our actions and communications.',
                'Innovation and Growth – We continuously improve systems and services.',
                'Ethical Conduct – We follow a strict code of ethics and legal compliance.'
              ].map((principle, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-blue-900 font-bold text-lg w-8 flex-shrink-0">✓</div>
                  <p className="text-gray-700">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company History */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Our History</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-900 pl-6">
                <h3 className="font-bold text-lg text-blue-900 mb-2">2026 - Foundation Year</h3>
                <p className="text-gray-700">
                  Founded in 2026 in Misori, Siaya County, Chien'g Jamondo Services Ltd. began as a cyber café 
                  and mobile money agency, serving the local community's digital and financial needs.
                </p>
              </div>
              <div className="border-l-4 border-blue-900 pl-6">
                <h3 className="font-bold text-lg text-blue-900 mb-2">Expansion Phase</h3>
                <p className="text-gray-700">
                  With increasing demand from the community, the company expanded into branding services and 
                  cereal trading, recognizing opportunities to serve broader customer needs.
                </p>
              </div>
              <div className="border-l-4 border-blue-900 pl-6">
                <h3 className="font-bold text-lg text-blue-900 mb-2">Present Day</h3>
                <p className="text-gray-700">
                  Today, Chien'g Jamondo Services Ltd. stands as a multi-service enterprise that supports digital 
                  access, food security, and financial inclusion for individuals, institutions, and businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="mb-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Leadership and Stakeholders</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Founder & CEO</h3>
                <p className="text-gray-700">Mr. Wicklife Omon</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Director</h3>
                <p className="text-gray-700">Patience Lusinde</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Stakeholders</h3>
                <p className="text-gray-700">
                  Abraham Mulongo • Evans Omon • Erick Amadi • Peter Audi • Elsie Livasia • 
                  Doris Tambata • Mercy Migaya • Tonny Moses
                </p>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Individuals',
                  items: ['Students', 'Professionals', 'Entrepreneurs', 'Job seekers']
                },
                {
                  title: 'Institutions',
                  items: ['Primary schools', 'Junior secondary schools', 'Senior secondary schools']
                },
                {
                  title: 'Small Businesses',
                  items: ['Traders', 'Farmers', 'Startups', 'Retailers']
                },
                {
                  title: 'Investors & Entrepreneurs',
                  items: ['Business registration', 'Compliance services', 'Growth consulting']
                }
              ].map((group, idx) => (
                <div key={idx} className="border-2 border-blue-900 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-blue-900 mb-4">{group.title}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-900">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Unique Selling Proposition */}
          <div className="bg-blue-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Unique Selling Proposition</h2>
            <p className="text-lg leading-relaxed mb-4">
              Chien'g Jamondo Services Ltd. stands out by offering cyber services, branding solutions, 
              cereal trading, and mobile banking services under one roof. This integrated model saves customers 
              time and cost while ensuring quality, convenience, and reliability.
            </p>
            <p className="text-lg">
              Our clients enjoy easy access to digital services, quality food products, and secure financial 
              transactions in one trusted location—making us a dependable partner in everyday business and 
              personal needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
