import Link from "next/link";
import {
  RiFacebookFill,
  RiTelegram2Line,
  RiTwitterXLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { atomic_age } from "@/config/fonts";

const Footer = () => {
  return (
    <footer className="mx-auto w-11/12 border-t border-slate-300 text-[#000000B3] dark:border-default-100 dark:text-slate-400">
      <div className="flex flex-col items-center justify-center gap-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-3 gap-y-2">
          <Link href="/" aria-label="Home">
            Home
          </Link>
          <Link href="/about" aria-label="About">
            About
          </Link>
          <Link href="/skills" aria-label="Add New Website">
            Skills
          </Link>
          <Link href="/projects" aria-label="Privacy Policy">
            Projects
          </Link>
          <Link href="/contact" aria-label="Contact">
            Contact
          </Link>
          <Link href="/sitemap.xml" aria-label="Sitemap">
            Sitemap
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 text-3xl font-bold">
          <Link
            href="https://web.facebook.com/sitelikeme"
            aria-label="Facebook"
          >
            <RiFacebookFill />
          </Link>
          <Link href="#" aria-label="Twitter">
            <RiTwitterXLine />
          </Link>
          <Link href="#" aria-label="Youtube">
            <RiYoutubeLine />
          </Link>
          <Link href="#" aria-label="Telegram">
            <RiTelegram2Line />
          </Link>
        </div>
        <div className="text-center">
          <h3>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <strong className={atomic_age.className}>RONiB</strong>. All Rights
            Reserved.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
