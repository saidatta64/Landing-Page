import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation('/landing-page')}
              className="flex items-center space-x-2 transition-smooth hover:opacity-80"
            >
              <span className="text-xl font-bold text-foreground">
                <img src="/logo.svg" alt="{alt}" className='w-18 h-20' />
              </span>
            </button>
          </div>


          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">

            <Button
              variant="default"
              className="shadow-cta"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md text-base font-medium transition-smooth ${location.pathname === item.path
                    ? 'text-primary bg-muted' : 'text-text-secondary hover:text-foreground hover:bg-muted'
                    }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.name}</span>
                </button>
              ))}

              <div className="pt-4 space-y-2">
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={handleLogin}
                  className="justify-start text-text-secondary"
                >
                  <Icon name="LogIn" size={20} className="mr-3" />
                  Sign In
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  className="justify-start shadow-cta"
                >
                  <Icon name="Zap" size={20} className="mr-3" />
                  Get Stated
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;