export const variables = {  
  colors: {
    primary: `#f24738`,
    secondary: `#1acbbf`,
    black: `#1c1b20`,
    light: `#f8f8f8`,
  },

  spacing: {
    spacing: `3rem`,
  },

  fonts: {
    heading: `Khula`,
    italic: `Libre Baskerville`,
    script: `Dancing Script`,
    body: `Montserrat`
  },

  breakpoints: {
    xl: 2200,
    lg: 1300,
    md: 768,
    sm: 600,
    xs: 400
  },

  sprites: {
    shooterBg: `url("data:image/svg+xml,%0A%3Csvg width='26px' height='32px' viewBox='0 0 26 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Group' fill='%231C1B20'%3E%3Cpolygon id='Path' points='11.44 15.319 11.44 20.573 14.56 20.573 14.56 15.319 13 13.201'%3E%3C/polygon%3E%3Cpath d='M0.517,16.949 L0.517,32 L5.288,26.976 L20.714,26.976 L25.483,32 L25.483,16.949 L13,0.001 L0.517,16.949 Z M15.56,21.573 L10.44,21.573 L10.44,14.991 L13,11.515 L15.56,14.991 L15.56,21.573 Z' id='Shape' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    invaderBg: `url("data:image/svg+xml,%0A%3Csvg width='79px' height='60px' viewBox='0 0 79 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Group' fill='%231C1B20'%3E%3Cpath d='M10.1,59.4 L19.9,59.4 L29.7,59.4 L29.7,49.6 L19.9,49.6 L19.9,39.8 L59,39.8 L59,49.6 L49.2,49.6 L49.2,59.4 L59,59.4 L68.8,59.4 L68.8,49.6 L78.6,49.6 L78.6,30 L68.8,30 L68.8,10.4 L59,10.4 L59,0.6 L19.9,0.6 L19.9,10.4 L10.1,10.4 L10.1,30 L0.3,30 L0.3,49.6 L10.1,49.6 L10.1,59.4 Z M49.2,20.2 L59,20.2 L59,30 L49.2,30 L49.2,20.2 Z M19.9,20.2 L29.7,20.2 L29.7,30 L19.9,30 L19.9,20.2 Z' id='Shape' fill-rule='nonzero'%3E%3C/path%3E%3Crect id='Rectangle' x='68.8' y='0.6' width='9.8' height='9.8'%3E%3C/rect%3E%3Crect id='Rectangle' x='0.3' y='0.6' width='9.8' height='9.8'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    deadBg: `url("data:image/svg+xml,%0A%3Csvg width='59px' height='59px' viewBox='0 0 59 59' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round'%3E%3Cpath d='M56.5,56.5 L37.5,37.5' id='Line-2-Copy' stroke='%23DE0000' stroke-width='5'%3E%3C/path%3E%3Cpath d='M22.5,22.5 L3.5,3.5' id='Line-2-Copy-2' stroke='%23DE0000' stroke-width='5'%3E%3C/path%3E%3Cpath d='M21.5,56.5 L2.5,37.5' id='Line-2-Copy-3' stroke='%23DE0000' stroke-width='5' transform='translate(12.000000, 47.000000) scale(-1, 1) translate(-12.000000, -47.000000) '%3E%3C/path%3E%3Cpath d='M56.5,21.5 L37.5,2.5' id='Line-2-Copy-4' stroke='%23DE0000' stroke-width='5' transform='translate(47.000000, 12.000000) scale(-1, 1) translate(-47.000000, -12.000000) '%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
  }
};

export const mediaQueries = (breakpoint, { unit = `px`, feature = `max-width` } = {}) => (
  styles => `@media (${feature}: ${variables.breakpoints[breakpoint] ? variables.breakpoints[breakpoint] : breakpoint}${unit}) { ${styles} }`
);