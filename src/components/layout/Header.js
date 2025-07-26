"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { atomic_age } from "@/config/fonts";
import { Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import Link from "next/link";
import { RiDownloadCloud2Line } from "react-icons/ri";

const Header = () => {
  return (
    <Navbar isBordered isBlurred maxWidth="full">
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
        <Link
          className="hidden items-center gap-2 rounded border border-secondary-400 px-4 py-1 font-medium sm:flex"
          href="https://rironib.vercel.app/files/Resume-[RONiB].pdf"
          target="_blank"
        >
          <RiDownloadCloud2Line />
          Resume
        </Link>
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
