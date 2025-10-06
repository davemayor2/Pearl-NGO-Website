import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-neutral flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-5xl font-heading font-extrabold text-dark mb-2">404</h1>
        <h2 className="text-xl font-heading font-bold text-dark mb-3">Page not found</h2>
        <p className="text-gray-600 font-body mb-6">The page you are looking for does not exist or may have been moved.</p>
        <Link href="/" className="inline-block px-6 py-3 rounded-md bg-primary text-white font-body font-semibold hover:bg-opacity-90">
          Back to Home
        </Link>
      </div>
    </div>
  );
}




