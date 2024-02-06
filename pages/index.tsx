import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-secondary antialiased flex flex-col justify-between h-screen ">
        <div className="h-full">
          {/* <Header /> */}

          <div className="md:max-w-5xl w-full  mx-auto  px-8">
            <div className="text-white flex justify-center  gap-y-8 h-screen">
              <div className=" justify-center md:items-center flex flex-col gap-4 md:flex-row">
                <Link
                  href="/my-extracts"
                  className="md:h-fit peer-checked:bg-secondary cursor-pointer hover:bg-vat-primary overflow-hidden bg-primary border border-gray-400 px-4 py-4 shadow-md sm:rounded-md sm:px-6 flex gap-6 flex-row justify-between"
                >
                  <span className="text-2xl font-bold">Mijn Uittreksels</span>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-semibold text-xl">
                      {/* Direct order */}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      ></path>
                    </svg>
                  </div>
                </Link>

                <Link
                  href="/my-vat-number"
                  className="md:h-fit peer-checked:bg-secondary cursor-pointer hover:bg-vat-primary overflow-hidden bg-primary border border-gray-400 px-4 py-4 shadow-md sm:rounded-md sm:px-6 flex gap-6 flex-row justify-between"
                >
                  <span className="text-2xl font-bold">Mijn btw nummer</span>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-semibold text-xl">
                      {/* Direct order */}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
