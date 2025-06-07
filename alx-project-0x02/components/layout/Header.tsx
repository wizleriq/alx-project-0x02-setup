import Link from "next/link";
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
    {/* <header className="bg-blue-600 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Welcome to ALX Project 2</h1>
    </header> */}
    <div className="flex items-center justify-between lg:w-[200px] lg:bg-transparent">
      <Link href="/home" className="hover:underline">Home</Link>
     <Link href="/about" className="hover:underline">About</Link>
     <Link href="/posts" className="hover:underline">Post</Link>
    </div>
     </div>
  );
};

export default Header;
