import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex h-20 w-full flex-wrap-reverse items-center justify-between px-4">
      <p>
        Designed by{' '}
        <a target="_blank" href="https://www.linkedin.com/in/mauriciolizama/">
          Mauricio Lizama
        </a>{' '}
        using <a href="https://nextjs.org/">Next.js</a>
      </p>
      <p>© Copyright {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
