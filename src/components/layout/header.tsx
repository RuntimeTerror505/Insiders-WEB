import Container from "@/components/layout/container";
import Logo from "@/components/layout/logo";
import NavDesktop from "@/components/layout/nav-desktop";
import NavMobile from "@/components/layout/nav-mobile";

export default function Header() {
  return (
    // Макет: висота 80px, білий 85% + backdrop-blur 4px, без нижнього бордера.
    <header className="bg-header sticky top-0 z-40 w-full backdrop-blur-[4px]">
      <Container
        width="wide"
        className="flex h-20 items-center py-4 lg:px-[120px]"
      >
        <div className="max-w-page flex h-full w-full items-center justify-between gap-6">
          <Logo />
          <NavDesktop />
          <NavMobile />
        </div>
      </Container>
    </header>
  );
}
