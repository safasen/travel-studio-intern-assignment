import Link from "next/link";


export default function Home() {
  /**
   * Home component that serves as the landing page for the Travel Studio application.
   */
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <h1 className="text-4xl font-bold mb-4">Welcome to Travel Studio</h1>
    <p className="text-lg mb-8">Your travel requests dashboard</p>
    <Link href="/dashboard" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Go to Dashboard
    </Link>
    </div>
  );
}
