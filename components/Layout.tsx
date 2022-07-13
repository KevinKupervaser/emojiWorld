import * as React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="max-w-6xl mx-auto p-5 my-8">{children}</div>;
};

export default Layout;
