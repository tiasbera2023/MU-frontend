import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function ProductSelect() {
  return (
    <div>
      <div className="bg-white antialiased flex flex-col justify-between min-h-full h-screen">
        <div className="h-full">
          <Header />
          <div className="bg-secondary relative isolate px-6 pt-8 pb-8 lg:px-8 ">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <p className="text-lg leading-8 text-gray-900 flex flex-col gap-6 justify-between">
                  <span className="text-xl font-bold tracking-tight text-primary">
                    Unfortunately the payment was not successful.
                  </span>{" "}
                  <span>
                    {" "}
                    <Link
                      href="/search"
                      className="inline-flex gap-2 items-center rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Click here to reorder your product.
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
                    </Link>{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
