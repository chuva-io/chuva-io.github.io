import { Link } from "@tanstack/react-router";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";

export default function Header() {
  return (
    <header className="p-2 flex gap-2 justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>
      </nav>
      <div className="flex gap-4">
        <SignInButton />
        <SignUpButton />
      </div>
    </header>
  );
}
