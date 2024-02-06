import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { Chamber } from "@/types/chamber";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

export default function ProductSelect() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState<Chamber | null>(null);
  console.log(router.query);

  const getSearchData = async (kvkNummer: any) => {
    const searchResult = await fetch(
      `/api/search?kvkNummer=${kvkNummer}&type=hoofdvestiging`
    );
    const data = await searchResult.json();
    if (data?.resultaten) {
      setProduct(data?.resultaten?.[0]);
    } else {
      console.log("coming hre");
      router.push("/search");
    }
  };

  useEffect(() => {
    if (router?.query?.id) {
      getSearchData(router.query.id);
    }
  }, [router.query]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      // const searchResult = await fetch(`/api/checkout_sessions`, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     isVat: false,
      //     amount: selectedProduct === "certified" ? 36.6 : 28.8,
      //     productName: product?.handelsnaam,
      //     kvkNummer: product?.kvkNummer,
      //     vestigingsnummer: product?.vestigingsnummer,
      //     withLogo: selectedProduct === "certified" ? false : true,
      //     email: email,
      //   }),
      // });

      // const data = await searchResult.json();
      // if (data.redirect_uri) {
      //   window.location.assign(data.redirect_uri);
      // }
      router.push(
        { pathname: "/search", query: { pdf_sent: true } },
        "/search"
      );
      const searchResult = await fetch(`/api/sendPdfMail`, {
        method: "POST",
        body: JSON.stringify({
          kvkNummer: product?.kvkNummer,
          vestigingsnummer: product?.vestigingsnummer,
          withLogo: selectedProduct === "certified" ? false : true,
          email: email,
        }),
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <div className="bg-white antialiased flex flex-col justify-between min-h-full">
        <div className="h-full">
          <Header />
          <div className="bg-secondary relative isolate px-6 pt-8 pb-8 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="text-center flex flex-col gap-4 items-center justify-around md:flex-row">
                <p className="text-lg leading-8 text-gray-900 flex flex-col md:flex-row gap-2 md:gap-8 justify-between">
                  {" "}
                  <span className="text-xl font-bold tracking-tight text-primary">
                    {product?.handelsnaam}
                  </span>{" "}
                  <span>{product?.kvkNummer}</span>{" "}
                  <span>{product?.plaats}</span>{" "}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_token"
              value="4w1IrnSRZfagQYqMahFuF2kywQ628yKkVPIWEU0H"
            />
            <section className="flex-col mx-auto flex max-w-3xl justify-between p-6 lg:px-8">
              <h1 className="text-xl font-bold tracking-tight text-primary">
                Select a product
              </h1>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-8"
                id="firstProduct"
              >
                <div onClick={() => setSelectedProduct("certified")}>
                  <input
                    type="radio"
                    x-model="product"
                    name="product"
                    value="authenticated"
                    id="authenticated"
                    className="hidden peer"
                    checked={selectedProduct === "certified"}
                    readOnly
                  />{" "}
                  <label className="h-full peer-checked:bg-secondary cursor-pointer hover:bg-gray-50 overflow-hidden bg-white border border-gray-400 px-4 py-4 shadow-md sm:rounded-md sm:px-6 flex flex-col gap-2 justify-between">
                    <div className="flex flex-col">
                      {" "}
                      <span className="text-2xl text-black  font-bold mb-2">
                        Certified
                        <br />
                        extract
                      </span>{" "}
                      <span className="inline-flex gap-1 items-center rounded-full  py-1 text-xs font-medium text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                        Suitable for official use
                      </span>{" "}
                      <span className="inline-flex gap-1 items-center rounded-full  py-1 text-xs font-medium text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                        Dutch English
                      </span>
                    </div>
                    <div className="flex justify-between mt-6">
                      {" "}
                      <span className="text-gray-700 font-semibold text-xl">
                        €36.60
                      </span>
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
                      </svg>
                    </div>{" "}
                  </label>
                </div>
                <div onClick={() => setSelectedProduct("uncertified")}>
                  <input
                    type="radio"
                    x-model="product"
                    name="product"
                    value="unauthenticated"
                    id="unauthenticated"
                    className="hidden peer"
                    checked={selectedProduct === "uncertified"}
                    readOnly
                  />{" "}
                  <label className="h-full peer-checked:bg-secondary cursor-pointer hover:bg-gray-50 overflow-hidden bg-white border border-gray-400 px-4 py-4 shadow-md sm:rounded-md sm:px-6 flex gap-6 flex-col justify-between">
                    <div className="flex flex-col">
                      {" "}
                      <span className="text-2xl text-black font-bold mb-2">
                        Uncertified
                        <br />
                        extract
                      </span>{" "}
                      <span className="inline-flex gap-1 items-center rounded-full  py-1 text-xs font-medium text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                        Dutch
                      </span>
                    </div>
                    <div className="flex justify-between">
                      {" "}
                      <span className="text-gray-700 font-semibold text-xl">
                        €28.80
                      </span>
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
                      </svg>
                    </div>{" "}
                  </label>
                </div>
              </div>
              {!!selectedProduct && (
                <div
                  id="orderForm"
                  className="mt-4 border border-gray-400 sm:rounded-md px-4 py-4 sm:px-6 shadow-md"
                  // x-transition:enter="transition ease-out duration-300"
                  // x-transition:enter-start="opacity-0 transform"
                  // x-transition:enter-end="opacity-100 transform"
                  // x-transition:leave="transition ease-in duration-300"
                  // x-transition:leave-start="opacity-100 transform scale-100"
                  // x-transition:leave-end="opacity-0 transform scale-90"
                >
                  <section aria-labelledby="contact-info-heading">
                    <h2
                      id="contact-info-heading"
                      className="text-xl font-semibold text-gray-900"
                    >
                      Complete order
                    </h2>
                    <p className="text-black">
                      You will receive your extract by email within 1 minute.
                    </p>
                  </section>
                  {selectedProduct === "certified" && (
                    <section
                      className="my-4"
                      x-show="product === 'authenticated'"
                      aria-labelledby="contact-info-heading"
                    >
                      <div className="mt-4">
                        {" "}
                        <label className="block text-sm font-medium text-gray-700">
                          Language of extract
                        </label>{" "}
                        <select
                          id="language"
                          name="language"
                          className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          {" "}
                          <option value="dutch">Dutch</option>{" "}
                          <option value="english">English</option>{" "}
                        </select>
                      </div>
                    </section>
                  )}
                  <section>
                    <div className="mt-4">
                      {" "}
                      <label className="block text-sm font-medium text-gray-700">
                        E-mail address
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          type="email"
                          tabIndex={-1}
                          id="email-address"
                          name="email"
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </section>
                  <section
                    className="my-4"
                    aria-labelledby="contact-info-heading"
                  >
                    <div className="mt-4">
                      {" "}
                      <label className="block text-sm font-medium text-gray-700">
                        select your bank
                      </label>{" "}
                      <select
                        id="issuer"
                        name="issuer"
                        className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        {" "}
                        <option value="abn_amro">ABN Amro</option>{" "}
                        <option value="asn_bank">ASN Bank</option>{" "}
                        <option value="bunq">Bunq</option>{" "}
                        <option value="handelsbanken">Commercial banks</option>{" "}
                        <option value="ing" selected>
                          ING
                        </option>{" "}
                        <option value="knab">Knab</option>{" "}
                        <option value="moneyou">Moneyou</option>{" "}
                        <option value="rabobank">Rabobank</option>{" "}
                        <option value="regiobank">Regional bank</option>{" "}
                        <option value="revolut">Revolution</option>{" "}
                        <option value="sns_bank">SNS Bank</option>{" "}
                        <option value="triodos_bank">Triodos Bank</option>{" "}
                        <option value="van_lanschot">Van Lanschot</option>{" "}
                      </select>
                    </div>
                  </section>{" "}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-x-2 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Order pay
                    <svg
                      className="-mr-0.5 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>{" "}
                  </button>
                </div>
              )}
            </section>
          </form>
        </div>
        <Footer />
      </div>
      <style jsx>
        {`
          select {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
            background-position: right 0.5rem center;
            background-repeat: no-repeat;
            background-size: 1.5em 1.5em;
            padding-right: 2.5rem;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            appearance: none;
          }

          [type="email"] {
            appearance: none;
            background-color: #fff;

            border-width: 1px;

            padding: 0.5rem 0.75rem;
          }
        `}
      </style>
    </div>
  );
}
