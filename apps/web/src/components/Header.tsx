import { Link } from "@tanstack/react-router";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";

export default function Header() {
  return (
    <header className="flex justify-between p-2 gap-2">
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
