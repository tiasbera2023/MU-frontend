import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header({
  bgPrimary = "bg-primary",
  textPrimary = "text-primary",
  header1 = "My",
  header2 = "Extracts",
  header3,
  buttonText = "Direct order",
  isVat = false,
}: {
  bgPrimary?: string;
  textPrimary?: string;
  header1?: string;
  header2?: string;
  header3?: string;
  buttonText?: string;
  isVat?: boolean;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header
      className="bg-white shadow-lg relative z-10 "
      x-data="{ open: false, mobileOpen: false }"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <Link href="/" className="cursor-pointer">
            <Image src="/logo.svg" alt="logo" width="40" height="40" />
          </Link>
        </div>
        <div className="flex lg:flex-1 items-center">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-2xl flex items-center gap-1"
          >
            <Image
              className="hidden lg:block"
              src="/logo.svg"
              alt="logo"
              width="40"
              height="40"
            />
            <span>
              <span className="text-black lg:ml-2">{header1}</span>
              <strong className={` text-primary ${textPrimary}`}>
                {" "}
                {header2}
              </strong>
              {header3 ? <span className="text-black"> {header3}</span> : null}
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary ${textPrimary}`}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={`text-sm font-semibold leading-6 text-gray-900 hover:text-primary ${textPrimary}`}
          >
            Home
          </Link>
          <Link
            href="/faq"
            className={`text-sm font-semibold leading-6 text-gray-900 hover:text-primary ${textPrimary}`}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-semibold leading-6 text-gray-900 hover:text-primary ${textPrimary}`}
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={isVat ? "/vat-search" : "/search"}
            className={`flex gap-2 items-center rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${bgPrimary}`}
          >
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </Link>
        </div>
      </nav>

      <div
        className="lg:hidden"
        role="dialog"
        aria-modal="true"
        style={{ display: mobileOpen ? "block" : "none" }}
      >
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5 text-2xl flex items-center gap-1"
            >
              <span>
                My
                <strong className={` text-primary ${textPrimary}`}>
                  {" "}
                  Extracts
                </strong>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/faq"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href={isVat ? "/vat-search" : "/search"}
                  className={`flex gap-2 items-center rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${bgPrimary}`}
                >
                  {buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
