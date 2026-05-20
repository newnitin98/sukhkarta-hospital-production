import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-brand-blue-100 font-display mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 font-display mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved. Please
          use the navigation or return to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-brand-blue-600 text-brand-blue-600 hover:bg-brand-blue-50 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
