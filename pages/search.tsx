import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Chamber } from "@/types/chamber";

export default function Search() {
  const router = useRouter();
  const [searchResultData, setSearchResultData] = useState<Chamber[]>([]);
  const [searchKeyword, setSearchKeyword] = useState(router.query.query);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false);
  const getSearchData = async (query: any) => {
    setIsLoading(true);
    const searchResult = await fetch(`/api/search?handelsnaam=${query}`);
    const data = await searchResult.json();
    if (data) {
      setSearchResultData(data.resultaten);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (router?.query?.query) {
      setSearchKeyword(router.query.query);
      getSearchData(router.query.query);
    }
    if (router?.query?.payment_success) {
      setIsShowSuccessMessage(true);
    }
    if (router?.query?.pdf_sent) {
      setIsShowSuccessMessage(true);
    }
  }, [router.query]);

  console.log("router.query", router.query);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSuccessMessage(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-white antialiased flex flex-col justify-between min-h-full">
      <div className="h-full">
        <Header />
        {/* seacrh result with query */}
        {router?.query?.query ? (
          <>
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
                  <form className="mt-4" method="GET" action="/search">
                    {" "}
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
                          {" "}
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
                        autoFocus
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border  rounded-lg bg-gray-50 focus:ring-primary border-primary focus:outline"
                        placeholder="Search by name or Chamber of Commerce number"
                        required
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                      />{" "}
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

            {/* no seeacrh result found */}
            {searchResultData?.length > 0 ? (
              <section className="mx-auto flex max-w-3xl items-center justify-between p-6 lg:px-8">
                <div className="flex flex-col gap-3 w-full">
                  {" "}
                  {searchResultData.map((chamber) => (
                    <>
                      <Link
                        href={`/order/${chamber.kvkNummer}/product-select`}
                        className="items-center hover:bg-gray-50 border shadow-md border-gray-400 overflow-hidden bg-white px-4 py-4 sm:rounded-md sm:px-6 flex justify-between"
                      >
                        <div className="flex flex-col">
                          <div>
                            {" "}
                            <span className="text-xl text-black font-extrabold">
                              {chamber.handelsnaam}
                            </span>{" "}
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                              {chamber.type}
                            </span>
                          </div>
                          <div>
                            {" "}
                            <span className="text-gray-700">
                              {chamber.vestigingsnummer} ·{" "}
                            </span>
                            <span className="text-gray-700">
                              {chamber.kvkNummer} ·{" "}
                            </span>
                            <span className="text-black">{chamber.plaats}</span>
                          </div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          ></path>
                        </svg>{" "}
                      </Link>{" "}
                    </>
                  ))}
                </div>
                <div className="flex flex-col"></div>
              </section>
            ) : !isLoading ? (
              <section className="mx-auto flex max-w-3xl items-center justify-between p-6 lg:px-8">
                <div className="flex flex-col gap-3 w-full">
                  <div className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6 text-black">
                    No results found, try another search.
                  </div>
                </div>
                <div className="flex flex-col"></div>
              </section>
            ) : (
              <div
                role="status"
                className="mx-auto my-2 max-w-3xl p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="bg-secondary relative isolate px-6 pt-14 pb-14 lg:px-8    flex flex-col justify-around">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-primary">
                  Order your Chamber of Commerce extract
                </h1>
                <p className="mt-2 text-lg leading-8 text-gray-900">
                  Search by Chamber of Commerce number or company name and
                  immediately receive your Chamber of Commerce extract.
                </p>
                <form className="mt-4" method="GET" action="/search">
                  {" "}
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
                        {" "}
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
                      autoFocus
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border  rounded-lg bg-gray-50 focus:ring-primary border-primary focus:outline"
                      placeholder="Search by name or Chamber of Commerce number"
                      required
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                    />{" "}
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
          </div>
        )}
      </div>
      <Footer />
      {isShowSuccessMessage ? (
        <div
          id="toast-success"
          className="z-10 fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">
            Pdf sent to your email address.{" "}
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
