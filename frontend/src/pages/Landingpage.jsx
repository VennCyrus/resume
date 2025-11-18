import React, { useState } from 'react'
import {userNavigate} from 'react-router-dom';
import { LayoutTemplate, X, Menu } from 'lucide-react';
import lanndingPageStyles from '../assets/dummystyle.js'

const Landingpage = () => {
const {user} = useContext(UserContext);
const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className={lanndingPageStyles.container}>
      {/*HEADER*/}
      <header className={lanndingPageStyles.header}>
        <div className={lanndingPageStyles.headerContainer}>
          <div className={lanndingPageStyles.logoContainer}>
            <div className={lanndingPageStyles.logoIcon}>
              <LayoutTemplate className={lanndingPageStyles.logoIconInner} />
            </div>
            <span className={lanndingPageStyles.logoText}>
              Resume Builder
            </span>
          </div>
          {/*MOBILE MENU BUTTON*/}
          <button 
            className={lanndingPageStyles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <X size={24} className={lanndingPageStyles.mobileMenuIcon} /> : 
              <Menu size={24} className={lanndingPageStyles.mobileMenuIcon} />
            }
          </button>

          {/*DESKTOP NAVIGATION*/}
          <div className='hidden md:flex items-center'>
{uer ? (
  <ProfileCard />
):(
  <buttton className={landingPageStyles.desktopAuthButton} onClick={() => navigate('/login')}>
    Login
  </buttton>
)}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Landingpage;