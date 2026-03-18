const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-purple-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">Page Not Found</h2>
      <p className="text-gray-500 mt-2">The page you're looking for doesn't exist.</p>

      <a 
        href="/"
        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Go Home
      </a>
    </div>
  );
};

export default PageNotFound;