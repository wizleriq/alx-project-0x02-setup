// pages/about.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About = () => {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6">
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6">
      <Button size="small" shape="rounded-sm">Small Button</Button>
      <Button size="medium" shape="rounded-md">Medium Button</Button>
      <Button size="large" shape="rounded-full">Large Button</Button>
    </div>
    </div>
    
  );
};

export default About;
