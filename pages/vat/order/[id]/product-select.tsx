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
      router.push("/vat-search");
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
      //     isVat: true,
      //     amount: 39.8,
      //     productName: product?.handelsnaam,
      //     kvkNummer: product?.kvkNummer,
      //     vestigingsnummer: product?.vestigingsnummer,
      //     email: email,
      //     withLogo: false,
      //   }),
      // });
      // const data = await searchResult.json();
      // if (data.redirect_uri) {
      //   window.location.assign(data.redirect_uri);
      // }
      router.push(
        { pathname: "/vat-search", query: { pdf_sent: true } },
        "/vat-search"
      );

      const searchResult = await fetch(`/api/sendPdfMail`, {
        method: "POST",
        body: JSON.stringify({
          kvkNummer: product?.kvkNummer,
          vestigingsnummer: product?.vestigingsnummer,
          email: email,
          withLogo: false,
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
          <Header
            bgPrimary="bg-vat-primary"
            textPrimary="text-vat-primary"
            header1="My"
            header2="VAT"
            header3="number"
            buttonText="Request directly"
            isVat
          />
          <div className="bg-vat-secondary relative isolate px-6 pt-8 pb-8 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="text-center flex flex-col gap-4 items-center justify-around md:flex-row">
                <p className="text-lg leading-8 text-gray-900 flex flex-col md:flex-row gap-2 md:gap-8 justify-between">
                  {" "}
                  <span className="text-xl font-bold tracking-tight text-vat-primary">
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
              value="RD2sbC4Hm6hkC9EftRuLD98564327vlhZdHFznsK"
            />
            <section className="flex-col mx-auto flex max-w-3xl justify-between p-6 lg:px-8">
              <div
                className="grid grid-cols-1 sm:grid-cols-1 gap-3 w-full mt-8"
                id="firstProduct"
              >
                <div>
                  {" "}
                  <label className="h-full peer-checked:bg-vat-secondary overflow-hidden bg-white border border-gray-400 px-4 py-4 shadow-md sm:rounded-md sm:px-6 flex flex-col gap-2 justify-between">
                    {" "}
                    <span className="text-2xl font-bold text-black">
                      Request a VAT number from {product?.handelsnaam}
                    </span>
                    <div>
                      {" "}
                      <span className="inline-flex gap-1 items-center rounded-full py-1 text-xs font-medium text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          {" "}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                        Immediately visible &amp; by email
                      </span>
                    </div>
                    <div className="flex justify-between mt-2">
                      {" "}
                      <span className="text-gray-700 font-semibold text-md">
                        €39.80{" "}
                        <span className="text-xs font-normal">
                          (fixed rate for 2023)
                        </span>
                      </span>
                    </div>{" "}
                  </label>
                </div>
              </div>
              <div
                id="orderForm"
                className="mt-4 mb-8 border border-gray-400 sm:rounded-md px-4 py-4 sm:px-6 shadow-md"
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
                    Your VAT number is visible immediately after payment and
                    will also be sent by e-mail.
                  </p>
                  <div className="mt-6">
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
                        className="block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                  className="mt-6 inline-flex items-center gap-x-2 rounded-md bg-vat-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Pay &amp; collect
                </button>
              </div>
            </section>
          </form>
        </div>
        <Footer secondaryColor="border-t-vat-secondary" />
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
