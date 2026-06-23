'use client';

import { Logo } from '@/components/logo';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { siteConfig } from '@/lib/sitemap';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <Logo size="lg" />
          <DialogTitle className="text-2xl">{siteConfig.name}</DialogTitle>
          <DialogDescription>
            Sync your environment variables across devices securely.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-6">
          <Button asChild size="lg" className="w-full">
            <Link href="/sign-in">Continue to sign in</Link>
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            You will be redirected to the Clerk login experience.
          </p>
        </div>
        <DialogFooter className="text-muted-foreground">
          By signing in, you agree to sync your environment variables securely.
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
