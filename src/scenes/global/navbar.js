import React, { useState, useEffect } from 'react';

export default function navbar() {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
}