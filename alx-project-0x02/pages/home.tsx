// pages/home.tsx
import Card from '@/components/common/Card';

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to the Home Page</h1>
      
      <Card
        title="Getting Started"
        content="This is a simple reusable card component in Next.js with Tailwind CSS."
      />

      <Card
        title="Why Next.js?"
        content="Next.js is a powerful framework for building fast, SEO-friendly web applications with React."
      />

      <Card
        title="Reusable Components"
        content="Creating reusable components helps you keep your code clean, organized, and scalable."
      />
    </div>
  );
}
