import { Logo } from "./logo";

function Header() {
  return (
    <header className="py-5 w-full flex justify-center items-center bg-gray-700 border-b border-gray-600 ">
      <Logo />
    </header>
  );
}

export default Header;
