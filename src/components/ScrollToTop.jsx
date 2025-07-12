import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      setVisible(window.pageYOffset > 300);

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition z-50"
      >
        <FaArrowUp />
      </button>
    )
  );
}
