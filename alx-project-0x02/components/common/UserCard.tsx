// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  const { name, email, address } = user;
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
    </div>
  );
};

export default UserCard;





// import { UserProps } from '@/interfaces'
// import React from 'react'

// const UserCard: React.FC<UserProps> = ({id, name, username, email, address, phone, website, company, }) => {
//   return (
//     <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//       <div className="mb-4">
//         <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
//          <h2 className="text-[18px] font-normal text-gray-800">{username}</h2>
//          <h2 className="text-[18px] font-normal text-gray-800">{email}</h2>
//          <h2 className="text-[18px] font-normal text-gray-800">{company.name}, {company.catchPhrase}, {company.bs}</h2>
//         <h2 className="text-[18px] font-normal text-gray-800">{website}</h2>
//       </div>
//       <p className="text-gray-600 text-[18px] font-normal">{address.street}, {address.suite}, {address.city}, {address.zipcode}, {address.geo.lat}, {address.geo.lng}</p>
//       <div className="mt-4 flex items-center justify-between text-sm text-gray-500 text-[14px] font-normal">
//         <span>Phone: {phone}</span>
//         <span>User ID: {id}</span>
//       </div>
//     </div>
//   );
// }
// export default UserCard