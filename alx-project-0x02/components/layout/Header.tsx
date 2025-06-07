import Link from "next/link";
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
    <header className="bg-blue-600 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Welcome to ALX Project 2</h1>
    </header>
     <Link href="/home" className="hover:underline">Home</Link>
     <Link href="/about" className="hover:underline">About</Link>
     </div>
  );
};

export default Header;
