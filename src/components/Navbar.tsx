import { Button } from '@/components/ui/button';

interface NavbarProps {
  isAuthenticated?: boolean;
  onSignOut?: () => void;
}

export function Navbar({ isAuthenticated = false, onSignOut }: NavbarProps) {
  console.log('Navbar: Component rendering...');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-primary">PrimeHive</div>
          <Button variant="ghost">Test Button</Button>
        </div>
      </div>
    </nav>
  );
}