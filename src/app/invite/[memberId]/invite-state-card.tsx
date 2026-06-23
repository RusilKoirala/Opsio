'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface InviteStateCardProps {
  title: string;
  description: string;
  showSignIn?: boolean;
  callbackPath?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function InviteStateCard({
  title,
  description,
  showSignIn,
  callbackPath,
  ctaHref,
  ctaLabel,
}: InviteStateCardProps) {
  const [signingIn, setSigningIn] = useState(false);
  const router = useRouter();

  return (
    <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center px-6 pt-24 pb-12">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {(showSignIn || ctaHref) && (
          <>
            <CardContent />
            <CardFooter>
              {showSignIn && (
                <Button
                  size="lg"
                  disabled={signingIn}
                  onClick={() => {
                    setSigningIn(true);
                    router.push('/sign-in');
                  }}
                  className="w-full"
                >
                  {signingIn ? (
                    <>
                      <Spinner />
                      Signing in
                    </>
                  ) : (
                    'Sign in to continue'
                  )}
                </Button>
              )}
              {!showSignIn && ctaHref && (
                <Button asChild size="lg" className="w-full">
                  <Link href={ctaHref}>{ctaLabel ?? 'Continue'}</Link>
                </Button>
              )}
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}
