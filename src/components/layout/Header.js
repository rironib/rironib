"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { atomic_age } from "@/config/fonts";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Link
          href="/"
          aria-label="RONiB"
          className={`${atomic_age.className} text-2xl font-bold text-[#FF4240] lg:text-4xl`}
        >
          RON𝒾B
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden gap-4 text-lg font-medium sm:flex"
        justify="center"
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
