'use client';

import { SignIn } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

export default function SignInPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <div className="min-h-screen bg-background px-4 py-24 text-foreground">
      <div className="mx-auto max-w-md rounded-3xl border border-border bg-card/95 p-8 shadow-lg shadow-black/5 backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold">Sign in to Opsio</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Use Clerk to sign in and sync your environments securely.
          </p>
        </div>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </div>
  );
}
