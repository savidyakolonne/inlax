import React from 'react';
import CountUp from 'react-countup'; 
import savidyaImg from "../../assets/savidyaimg.webp";
import aboutImg from "../../assets/aboutcover.webp";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { useEffect } from 'react';


const founders = [
  {
    name: 'Savidya Kolonne',
    role: 'Founder',
    img: savidyaImg,
    linkedin: 'https://www.linkedin.com/in/savidyakolonne/', 
    facebook: 'https://www.facebook.com/share/16X1gaLw6t/',     
    instagram: 'https://www.instagram.com/savidyakolonne?igsh=MTU2ODd1eGY2cmF6Nw==',  
    website: 'https://savidya-portfolio.vercel.app/',        
  },
   
];

const About = () => {

   useEffect(() => {
      document.title = "About | iNLAX";
    }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      {/* Cover Image */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-b-xl shadow-lg">
        <img
          src={aboutImg}
          alt="Cover"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Description & Mission */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-12 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto md:mx-0">
            We’re a passionate team dedicated to crafting cutting-edge software solutions that empower businesses and individuals worldwide. From sleek web apps to powerful backend systems, we bring your ideas to life with clean, modern code.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto md:mx-0">
            To innovate and deliver high-quality software that makes a real impact — pushing boundaries, simplifying lives, and building the future one line of code at a time.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-extrabold text-blue-600">
                <CountUp end={1} duration={3} />+
              </h3>
              <p className="mt-2 text-gray-700 text-lg">Years of Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-green-600">
                <CountUp end={5} duration={3} />+
              </h3>
              <p className="mt-2 text-gray-700 text-lg">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-purple-600">
                <CountUp end={4} duration={3} />+
              </h3>
              <p className="mt-2 text-gray-700 text-lg">Clients Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-white py-12 md:py-20 ">
        <div className="max-w-5xl mx-auto px-6 ">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Leaders</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 ">
            {founders.map(({ name, role, img, linkedin, facebook, instagram, website }) => (
              <div key={name} className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl shadow-2xl">

                <img
                  src={img}
                  alt={name}
                  className="w-40 h-40 rounded-full object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-600">{role}</p>
                <div className="flex gap-4 mt-2 text-gray-600">
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} on LinkedIn`}
                      className="hover:text-blue-700 transition-colors"
                    >
                      <FaLinkedinIn size={18} />
                    </a>
                  )}
                  {facebook && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} on Facebook`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      <FaFacebookF size={18} />
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} on Instagram`}
                      className="hover:text-pink-500 transition-colors"
                    >
                      <FaInstagram size={18} />
                    </a>
                  )}
                  {website && (
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name}'s website`}
                      className="hover:text-gray-800 transition-colors"
                    >
                      <FaGlobe size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
