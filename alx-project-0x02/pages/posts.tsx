// pages/posts.tsx
import React from 'react';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';
import Header from '@/components/layout/Header';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
