"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen bg-neutral flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-dark mb-2">Something went wrong</h2>
          <p className="text-gray-600 font-body mb-6">An unexpected error occurred. Please try again.</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => reset()}
              className="px-6 py-3 rounded-md bg-primary text-white font-body font-semibold hover:bg-opacity-90"
            >
              Try again
            </button>
            <Link href="/" className="px-6 py-3 rounded-md border border-dark text-dark font-body font-semibold hover:bg-dark hover:text-white">
              Go Home
            </Link>
          </div>

          {error?.digest && (
            <p className="mt-4 text-xs text-gray-400">Error ID: {error.digest}</p>
          )}
        </div>
      </body>
    </html>
  );
}




