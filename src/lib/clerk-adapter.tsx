'use client';

import { useAuth } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

type SessionStatus = 'loading' | 'authenticated' | 'unauthenticated';

export function useSession(): { data: any | null; status: SessionStatus } {
  const { isLoaded, isSignedIn } = useAuth();
  const { user, isLoaded: userLoaded } = useUser();

  const status: SessionStatus = !isLoaded || !userLoaded ? 'loading' : isSignedIn ? 'authenticated' : 'unauthenticated';

  const data = isSignedIn && user
    ? {
        user: {
          id: user.id,
          name: (user.firstName || (user as any).fullName || user.username) ?? null,
          email:
            // Clerk may expose primaryEmailAddress or emailAddresses
            (user.primaryEmailAddress as any)?.emailAddress ?? (user.emailAddresses?.[0] as any)?.emailAddress ?? null,
          image: (user as any).profileImageUrl ?? (user as any).imageUrl ?? null,
        },
      }
    : null;

  return { data, status };
}
