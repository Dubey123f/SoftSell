import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-800 text-sm rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
