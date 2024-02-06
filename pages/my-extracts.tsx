import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function MyExtracts() {
  return (
    <>
      <div className="bg-white antialiased flex flex-col justify-between min-h-full">
        <div className="h-full">
          <Header />

          <div className="bg-secondary relative isolate px-6 pt-14 pb-14 lg:px-8  flex flex-col justify-around">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-primary">
                  Order your Chamber of Commerce extract
                </h1>
                <p className="mt-2 text-lg leading-8 text-gray-900">
                  Search by Chamber of Commerce number or company name and
                  immediately receive your Chamber of Commerce extract.
                </p>

                <form
                  className="mt-4"
                  method="GET"
                  action="/search"
                  data-gtm-form-interact-id="0"
                >
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      name="query"
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border  rounded-lg bg-gray-50 focus:ring-primary border-primary focus:outline "
                      placeholder="Search by name or Chamber of Commerce number"
                      required
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 "
                    >
                      To search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div></div>
          </div>

          <div className="max-w-5xl mx-auto my-12 px-8">
            <div className="text-black grid grid-cols-1 sm:grid-cols-3 sm:gap-8 gap-y-8">
              <div className="col-span-2">
                <h1 className="font-extrabold text-2xl mb-4">
                  What does MijnUittreksels.nl do?
                </h1>
                <p>
                  On MijnUittreksels.nl you can easily search by company name
                  and request the Chamber of Commerce extract for the desired
                  company. MijnUittreksels is an intermediary for requesting
                  Chamber of Commerce extracts. Receive your extract immediately
                  in your mailbox without logging in and after payment.
                </p>

                <h1 className="font-extrabold text-2xl mb-4 mt-8">
                  What is a Chamber of Commerce extract?
                </h1>
                <p>
                  A Chamber of Commerce extract refers to a document provided by
                  the Chamber of Commerce (KVK) in the Netherlands. The Chamber
                  of Commerce is an authority responsible for maintaining the
                  trade register of companies in the Netherlands. A Chamber of
                  Commerce extract is an official document that contains
                  information about a registered business, such as a company,
                  sole proprietorship, partnership, foundation, association,
                  etc. This extract contains important information about the
                  company, such as:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>
                    <span className="font-bold">Basic information</span> : This
                    includes the name of the company, the address of the
                    business location, and other identifying information.
                  </li>
                  <li>
                    <span className="font-bold">Legal form</span> : The type of
                    legal structure of the company, for example BV (private
                    limited company), sole proprietorship, NV (public limited
                    company), etc.
                  </li>
                  <li>
                    <span className="font-bold">Registration number</span> : A
                    unique number assigned to the company upon registration.
                  </li>
                  <li>
                    <span className="font-bold">Activities</span> : The nature
                    of the activities that the company carries out.
                  </li>
                  <li>
                    <span className="font-bold">Directors</span> : The names of
                    the directors, executives or owners of the company.
                  </li>
                  <li>
                    <span className="font-bold">Capital</span> : For companies
                    with share capital, information on share capital is
                    provided.
                  </li>
                  <li>
                    <span className="font-bold">Date of Incorporation</span> :
                    The date the company was incorporated.
                  </li>
                  <li>
                    <span className="font-bold">Historical information</span> :
                    Any previous changes, such as changes of address, changes in
                    management, or changes in business activities.
                  </li>
                  <li>
                    A Chamber of Commerce extract is often used for various
                    business purposes, such as entering into business
                    relationships, applying for financing, entering into
                    contracts, verifying company information, and more. It is a
                    way to obtain reliable and official information about a
                    company.
                  </li>
                </ul>
              </div>
              <div className="sidebar flex flex-col gap-4">
                <Link
                  href="/search"
                  className="peer-checked:bg-secondary cursor-pointer hover:bg-gray-50 overflow-hidden bg-white border border-gray-400 px-4 py-4 shadow-md sm:rounded-md sm:px-6 flex gap-6 flex-col justify-between"
                >
                  <span className="text-2xl font-bold">
                    Digitally certified
                    <br />
                    extract
                  </span>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-semibold text-xl">
                      Direct order
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
                  href="/search"
                  className="peer-checked:bg-secondary cursor-pointer hover:bg-gray-50 overflow-hidden bg-white border border-gray-400 px-4 py-4 shadow-md sm:rounded-md sm:px-6 flex gap-6 flex-col justify-between"
                >
                  <span className="text-2xl font-bold">
                    Uncertified
                    <br />
                    extract
                  </span>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-semibold text-xl">
                      Direct order
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
                  href="/contact"
                  className="peer-checked:bg-secondary mt-auto cursor-pointer hover:bg-gray-50 overflow-hidden bg-white border border-gray-400 px-4 py-4 shadow-md sm:rounded-md sm:px-6 flex gap-6 flex-col justify-between"
                >
                  <span className="text-2xl font-bold">To ask?</span>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-semibold text-xl">
                      Please contact us
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
        <Footer />
      </div>
    </>
  );
}
