import React from 'react';
import { useThemeContext } from '../context/theme-context';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Button } from 'ui';

const ThemeToggler: React.FC = () => {
  const { theme, toggle } = useThemeContext();

  const themeIconColor = () => {
    return theme === 'dark' ? 'white' : 'dark';
  };

  const themeIcon = () => {
    if (theme === 'dark') return <FiSun size={18} color={themeIconColor()} />;
    return <FiMoon size={18} color={themeIconColor()} />;
  };

  return (
    <Button className="h-10 w-10" aria-label="Toggle Theme" onClick={toggle}>
      <div className="inline-flex self-center">{themeIcon()}</div>
    </Button>
  );
};

export default ThemeToggler;
