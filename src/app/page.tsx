import Link from 'next/link';

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Application</h1>
      <p>Please sign in or sign up to continue.</p>
      <div>
        <Link href="/auth/signin">
          Sign In
        </Link>
        <Link href="/auth/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}