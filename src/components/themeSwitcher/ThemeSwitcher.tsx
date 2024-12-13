import React from 'react';
import { useTheme } from '../../contexts/themeContext';
import { IoSunnyOutline } from 'react-icons/io5';
import { LuMoon } from 'react-icons/lu';

const ThemeSwitcher: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='rounded-lg bg-background hover:bg-foreground/10 px-2 py-2 text-base'
    >
      <IoSunnyOutline className='hidden [html.dark_&]:block' />
      <LuMoon className='hidden [html.light_&]:block' />
      <span className='sr-only'>Toggle theme</span>
    </button>
  );
};

export default ThemeSwitcher;
