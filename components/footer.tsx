import Link from "next/link";

export default function Footer({
  secondaryColor = "border-t-secondary",
}: {
  secondaryColor?: string;
}) {
  return (
    <footer
      className={`bg-white border-t-8 border-t-secondary mt-auto ${secondaryColor}`}
    >
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div className="pb-6">
            <Link
              href="/terms"
              target="_blank"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Terms and Conditions
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/privacy"
              target="_blank"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Privacy statement
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/disclaimer"
              target="_blank"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Disclaimer
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/revocation"
              target="_blank"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Revocation
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/faq"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              FAQ
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="/contact"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </nav>

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          © 2023 MyExtracts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
