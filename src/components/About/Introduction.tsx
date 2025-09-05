import { useState, useEffect } from 'react';
import DesktopIntroduction from './DesktopIntroduction';
import MobileIntroduction from './MobileIntroduction';

export default function Introduction() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return isMobile ? <MobileIntroduction /> : <DesktopIntroduction />;
} 