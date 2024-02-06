import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function MyVatNumber() {
  return (
    <>
      <div className="bg-white antialiased flex flex-col justify-between min-h-full">
        <div className="h-full">
          <Header
            bgPrimary="bg-vat-primary"
            textPrimary="text-vat-primary"
            header1="My"
            header2="VAT"
            header3="number"
            buttonText="Request directly"
            isVat
          />

          <div className="bg-vat-secondary relative isolate px-6 pt-14 pb-14 lg:px-8  flex flex-col justify-around">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-vat-primary">
                  Collect your VAT number
                </h1>
                <p className="mt-2 text-lg leading-8 text-gray-900">
                  Search by Chamber of Commerce number or company name and
                  immediately receive your VAT number.
                </p>

                <form
                  className="mt-4"
                  method="GET"
                  action="/vat-search"
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
                      className="text-white absolute right-2.5 bottom-2.5 bg-vat-primary hover:bg-vat-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 "
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
                  What is a VAT number?
                </h1>
                <p>
                  The VAT number is a unique identification code for companies
                  within the European Union involved in transactions where VAT
                  (Value Added Tax) is charged. This number is essential for the
                  administration of VAT and facilitating trade between EU
                  countries.
                </p>

                <h1 className="font-extrabold text-2xl mb-4 mt-8">
                  Structure of the VAT number
                </h1>
                <p>
                  The VAT number has a specific structure in each EU country,
                  but always starts with a country code consisting of two
                  letters, followed by a series of numbers or letters. For
                  example, in the Netherlands the VAT number starts with the
                  country code &ldquo;NL&ldquo; followed by a combination of
                  numbers and letters.
                </p>

                <h1 className="font-extrabold text-2xl mb-4 mt-8">
                  What is the VAT number used for?
                </h1>

                <ul className="list-disc pl-6 mt-4">
                  <li>
                    <span className="font-bold">Trade within the EU</span> : For
                    transactions between companies from different EU countries,
                    the VAT number is required in order to correctly settle the
                    VAT.
                  </li>
                  <li>
                    <span className="font-bold">Filing a return</span> :
                    Companies use their VAT number when submitting VAT returns.
                  </li>
                  <li>
                    <span className="font-bold">Invoicing</span> : The VAT
                    number must be included on invoices so that both buyers and
                    sellers can document the transaction for their records.
                  </li>
                </ul>

                <h1 className="font-extrabold text-2xl mb-4 mt-8">
                  How does the VAT number differ from the RSIN/FI number?
                </h1>
                <p>
                  In the Netherlands, the VAT number is sometimes confused with
                  the RSIN (Legal Entities and Partnerships Information Number)
                  or FI number (Tax Identification Number). Although the RSIN/FI
                  number is also used for tax purposes, the VAT number is
                  specifically intended for VAT-related transactions.
                </p>

                <h1 className="font-extrabold text-2xl mb-4 mt-8">
                  Important to know:
                </h1>
                <p>
                  It is essential that businesses use their VAT number correctly
                  and consistently, especially when doing business with other EU
                  countries. Incorrect use can lead to fines and other tax
                  complications.
                </p>
              </div>
              <div className="sidebar flex flex-col gap-4">
                <Link
                  href="/vat-search"
                  className="peer-checked:bg-vat-secondary cursor-pointer hover:bg-gray-50 overflow-hidden bg-white border border-gray-400 px-4 py-4 shadow-md sm:rounded-md sm:px-6 flex gap-6 flex-col justify-between"
                >
                  <span className="text-2xl font-bold">
                    Request a VAT
                    <br /> number
                  </span>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-semibold text-xl">
                      Pick up immediately
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
                  className="peer-checked:bg-vat-secondary mt-auto cursor-pointer hover:bg-gray-50 overflow-hidden bg-white border border-gray-400 px-4 py-4 shadow-md sm:rounded-md sm:px-6 flex gap-6 flex-col justify-between"
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
        <Footer secondaryColor="border-t-vat-secondary" />
      </div>
    </>
  );
}
