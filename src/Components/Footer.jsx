import React from "react";
import MainLogo from '../assets/img/ReactShoesLogo.png';
import InstLogo from '../assets/img/instagram_icon.svg';
import FbLogo from '../assets/img/facebook_icon.svg';
import VkLogo from '../assets/img/vk_icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <a href="./">
        <img className="footer_logo" src={MainLogo} alt="logo" />
      </a>
      <div className="footer_social">
        <a href="./">
          <img src={InstLogo} width="50px" alt="Instagram" />
        </a>
        <a href="./">
          <img src={FbLogo} width="50px" alt="Facebook" />
        </a>
        <a href="./">
          <img src={VkLogo} width="50px" alt="Vkontakte" />
        </a>
      </div>
      <p>Разработано: Nick08</p>
    </footer>
  );
}

export default Footer;
