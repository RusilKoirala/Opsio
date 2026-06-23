'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SignInButton() {
  return (
    <Button size="lg" asChild className="w-full">
      <Link href="/sign-in">Continue to sign in</Link>
    </Button>
  );
}
