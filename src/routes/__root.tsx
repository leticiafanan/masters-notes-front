import { Logo } from '@/components/native/logo';
import { Outlet, createRootRoute } from '@tanstack/react-router';
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <main className="mx-auto  flex flex-col gap-2 w-full max-w-screen-lg ">
      <header className="px-6 py-4 border-b h-fit w-full">
        <Logo />
      </header>
      <Outlet />
    </main>
  );
}
