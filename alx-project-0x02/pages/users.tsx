import { UserProps } from '../interfaces';
import UserCard from '../components/common/UserCard';
import Header from '@/components/layout/Header';

interface UsersPageProps {
  posts: UserProps[];
}

const UsersPage = ({ posts }: UsersPageProps) => {
  return (
    <div style={{ padding: '2rem' }}>
        <div>
            <Header />
        </div>
      <h1>Users</h1>
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default UsersPage;



// import { UserProps } from '@/interfaces'
// import React from 'react'
// import UserCard from '@/components/common/UserCard'
// import 
// const users: React.FC<UserProps> = ( {users}) => {
//     const [isMO]
//   return (
//     <div>users</div>
//   )
// }

// export default users