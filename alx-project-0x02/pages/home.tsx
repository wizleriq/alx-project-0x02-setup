import React, { useState } from 'react'
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card'
import { CardProps } from '@/interfaces';
import PostModal from '@/components/common/PostModal';

const home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [post, setPosts] = useState<CardProps[]>([]);

  const handleNewPost = (title: string, content: string) => {
    setPosts([...post, {title, content}]);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <Header />
        {/* Create Post Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create Post
        </button>

        {/* Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleNewPost}
        />

        {/* Posts List */}
        <div className="space-y-4">
          {post.map((postItem, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{postItem.title}</h3>
              <p className="text-gray-700">{postItem.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default home


// // pages/home.tsx
// import Card from '@/components/common/Card';

// export default function HomePage() {
//   return (
//     <div className="max-w-2xl mx-auto mt-10">
//       <h1 className="text-3xl font-bold text-center mb-6">Welcome to the Home Page</h1>
      
//       <Card
//         title="Getting Started"
//         content="This is a simple reusable card component in Next.js with Tailwind CSS."
//       />

//       <Card
//         title="Why Next.js?"
//         content="Next.js is a powerful framework for building fast, SEO-friendly web applications with React."
//       />

//       <Card
//         title="Reusable Components"
//         content="Creating reusable components helps you keep your code clean, organized, and scalable."
//       />
//     </div>
//   );
// }
