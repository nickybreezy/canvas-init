import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-8 text-center">Hello! This is our Onboarding Tool!</h1>
      <Link href="/chapter-summary">
        <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
          Go to Chapter Summary
        </button>
      </Link>
    </div>
  );
};

export default Home;