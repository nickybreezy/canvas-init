import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Hello, Next.js World! this is the home page</h1>
      <Link href="/chapter-summary">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Go to Chapter Summary
        </button>
      </Link>
    </div>
  );
};

export default Home;