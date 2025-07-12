import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-xl text-gray-700 dark:text-yellow-300 hover:text-blue-600 transition"
      title="Toggle light/dark mode"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
