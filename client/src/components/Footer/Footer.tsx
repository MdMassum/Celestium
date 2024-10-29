import React from 'react';
import { Link } from 'react-router-dom';
import call from '../../assets/footer/call.png';
import chat from '../../assets/footer/chat.png';
import mail from '../../assets/footer/mail (2).png';
import fb from '../../assets/footer/fb.png';
import ig from '../../assets/footer/ig.png';
import tweet from '../../assets/footer/twiter.png';
import star from '../../assets/footer/logo.png';

// Define interfaces for the links, features, and contacts
interface LinkItem {
  label: string;
  href: string;
}

interface FeatureItem {
  label: string;
  href: string;
}

interface ContactItem {
  logo: React.ReactNode;
  href: string;
}

const Footer: React.FC = () => {
  
  const links: LinkItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Astrologers', href: '/astrologers' },
    { label: 'About Us', href: '/about' },
    { label: 'Account', href: '/account' },
    { label: 'Terms of Service', href: '/terms' },
  ];

  const features: FeatureItem[] = [
    { label: 'Horoscope', href: '#' },
    { label: 'Tarot Reading', href: '#' },
    { label: 'Palm Reading', href: '#' },
    { label: 'Compatibility', href: '#' },
    { label: 'Natal Chart', href: '#' },
  ];

  const contacts1: ContactItem[] = [
    { logo: <img src={call} alt="Call" className='h-4 mt-2 hover:opacity-75'/>, href: '#' },
    { logo: <img src={chat} alt="Chat" className='h-6 hover:opacity-75'/>, href: '#' },
    { logo: <img src={mail} alt="Mail" className='h-5 hover:opacity-75'/>, href: '#' },
  ];

  const contacts2: ContactItem[] = [
    { logo: <img src={fb} alt="Facebook" className='h-7 mt-3 hover:opacity-75'/>, href: '#' },
    { logo: <img src={ig} alt="Instagram" className='h-7 hover:opacity-75'/>, href: '#' },
    { logo: <img src={tweet} alt="Twitter" className='h-7 hover:opacity-75'/>, href: '#' },
  ];

  return (
    <footer className="hidden md:flex py-6 px-20 bg-[#140F21] text-white pb-6">
      {/* Logo part */}
      <div className="w-[30%] flex flex-col items-center justify-center space-y-2">
        <img src={star} alt="Celestium Logo" className="h-10 mb-3" />
        <h1 className="font-astloch text-5xl text-[#FFD700]">Celestium</h1>
      </div>

      {/* Links part */}
      <div className="w-[25%] flex flex-col justify-center items-center space-y-2 lg:tracking-wider">
        <h2 className="text-lg text-[#FFD700]">Links</h2>
        {links.map((link) => (
          <Link key={link.label} to={link.href} className="text-sm text-[#F5F5F5] hover:text-gray-200">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Features part */}
      <div className="w-[25%] flex flex-col justify-center items-center space-y-2 lg:tracking-wider">
        <h2 className="text-lg  text-[#FFD700]">Features</h2>
        {features.map((feature) => (
          <Link key={feature.label} to={feature.href} className="text-sm text-[#F5F5F5] hover:text-gray-200">
            {feature.label}
          </Link>
        ))}
      </div>

      {/* Contact part */}
      <div className="w-[25%] flex-col space-y-2 justify-center items-center lg:tracking-wider">
        <h2 className="text-lg text-center text-[#FFD700]">Contact Us</h2>
        <div className="flex space-x-10 space-y-4 items-center justify-center">
          {contacts1.map((contact, index) => (
            <Link key={index} to={contact.href}>
                {contact.logo}
            </Link>
          ))}
        </div>
        <div className="flex space-x-10 space-y-4 items-center justify-center">
          {contacts2.map((contact, index) => (
            <Link key={index} to={contact.href}>
                {contact.logo}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
