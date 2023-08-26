import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { TiSocialYoutube } from 'react-icons/ti';

function SocialIcons() {
  const socialLinks = [
    { icon: <FaFacebook size={30} />, link: 'https://www.facebook.com/chayon333' },
    { icon: <FaTwitter size={30} />, link: 'https://twitter.com/ChayonMondol4' },
    { icon: <FaInstagram size={30} />, link: 'https://www.instagram.com/chayon_mondol_' },
    { icon: <FaLinkedin size={30} />, link: 'https://www.linkedin.com/in/chayon-mondol' },
    { icon: <AiFillGithub size={30} />, link: 'https://github.com/chayon111' },
    { icon: <TiSocialYoutube size={30} />, link: 'https://www.youtube.com/@chayonmondol111' },
    // Add more icons and links as needed
  ];

  return (
    <div className="social-icons">
      {socialLinks.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
