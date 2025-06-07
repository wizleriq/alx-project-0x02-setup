// pages/posts.tsx
import React, { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await res.json();

      // Map data to match PostProps
      const formatted = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formatted);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} content={post.content} userId={post.userId} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
