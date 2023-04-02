/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
  screens: { 
    tablet: '600px',
    desktop:  '1136px'
  },
};
export const plugins = [];