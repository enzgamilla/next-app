import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex navbar-center bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/admin" className="mr-5">
        Admin
      </Link>
      <Link href="/products" className="mr-5">
        Products
      </Link>
      <Link href="/users" className="mr-5">
        User
      </Link>
      <Link href="/api/auth/signin" className="mr-5">
        Login
      </Link>
    </div>
  );
};

export default NavBar;
