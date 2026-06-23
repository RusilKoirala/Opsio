'use client';
import { UserDropdown } from '@/components/layouts/user-control';
import { Logo } from '@/components/logo';
import { NotificationBell } from '@/components/notifications';
import { Button } from '@/components/ui/button';
import { ModeSwitcher } from '@/components/ui/theme-toggle';
import { useSession } from '@/lib/clerk-adapter';
import { siteConfig } from '@/lib/sitemap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Navbar() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <>
      <header className="fixed top-3 z-50 w-full px-3 sm:top-4 sm:px-4">
        <div className="mx-auto flex h-12 w-full max-w-4xl items-center justify-between rounded-full border bg-background/70 pr-2 pl-4 shadow-sm shadow-black/5 backdrop-blur supports-backdrop-filter:bg-background/60">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-80"
          >
            <Logo size="md" />
            <span className="text-lg font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </Link>

          <div className="flex items-center gap-1.5">
            <ModeSwitcher />
            {status === 'loading' ? (
              <div className="size-8 animate-pulse rounded-full bg-muted" />
            ) : session ? (
              <>
                <NotificationBell />
                <UserDropdown />
              </>
            ) : (
              <Button
                onClick={() => router.push('/sign-in')}
                size="sm"
                className="rounded-full"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
