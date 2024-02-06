import Footer from "@/components/footer";
import Header from "@/components/header";
import { Contact } from "@/types/contact";
import { useState } from "react";

const initial_contact = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  subject: "",
  order_number: "",
  chamber_commerce_number: "",
  message: "",
};

export default function Contact() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [contact, setContact] = useState<Contact>(initial_contact);

  const { subject } = contact;

  const onValueChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.info(contact);
    const addContact = await fetch(`/api/addContact`, {
      body: JSON.stringify(contact),
      method: "POST",
    });
    const data = await addContact.json();
    console.info("data", data);
    if (addContact.status == 200) {
      setContact(initial_contact);
      setSubmitSuccess(true);
    }
  };
  return (
    <div>
      <div className="bg-white antialiased flex flex-col justify-between min-h-full">
        <div className="h-full">
          <Header />
          <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
              <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                  <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-secondary lg:w-1/2"></div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    <p style={{ verticalAlign: "inherit" }}>
                      Please contact us
                    </p>
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    My Extracts is an intermediary for requesting extracts and
                    other Chamber of Commerce products, but is not part of the
                    Chamber of Commerce.
                  </p>
                  <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        {" "}
                        <span className="sr-only">Address</span>
                        <svg
                          className="h-7 w-6 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          {" "}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                          ></path>
                        </svg>
                      </dt>
                      <dd>
                        <span>
                          <p style={{ verticalAlign: "inherit" }}>
                            My Extracts
                          </p>
                        </span>

                        <p style={{ verticalAlign: "inherit" }}>
                          Fornheselaan 202074, 3734GE, Den Dolder
                        </p>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        {" "}
                        <span className="sr-only">
                          <p style={{ verticalAlign: "inherit" }}>Telephone</p>
                        </span>
                        <svg
                          className="h-7 w-6 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          {" "}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          ></path>
                        </svg>
                      </dt>
                      <dd>
                        <a
                          className="hover:text-gray-900"
                          href="tel:+31 85 060 24 90?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=nui"
                        >
                          <p style={{ verticalAlign: "inherit" }}>
                            +31 85 060 24 90
                          </p>
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        {" "}
                        <span className="sr-only">
                          <p style={{ verticalAlign: "inherit" }}>E-mail</p>
                        </span>
                        <svg
                          className="h-7 w-6 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          {" "}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          ></path>
                        </svg>
                      </dt>
                      <dd>
                        <a
                          className="hover:text-gray-900"
                          href="mailto:info@mijnuittreksels.nl"
                        >
                          <p style={{ verticalAlign: "inherit" }}>
                            info@mijnuittreksels.nl
                          </p>
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <form
                className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="_token"
                  value="Qsg4MQNXrfjAoHVc1DmzUrh5G650XYGvsHLTCosE"
                  required
                />
                <div
                  className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg"
                  x-data="{ subject: null }"
                >
                  {submitSuccess && (
                    <div className="rounded-md bg-green-50 p-4 mb-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-800">
                            Uw bericht is succesvol verzonden.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <p className="mb-4 text-black">
                    If you have a question intended for the Chamber of Commerce,
                    it is best to contact them via{" "}
                    <a
                      href="www.kvk.nl/hulp-en-contact/"
                      target="_blank"
                      className="underline hover:no-underline"
                    >
                      www.kvk.nl/hulp-en-contact/
                    </a>
                  </p>
                  <div className="text-black grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      {" "}
                      <label className="block text-sm font-semibold leading-6 text-gray-900">
                        <p style={{ verticalAlign: "inherit" }}>
                          First name <span className="text-red-700">*</span>
                        </p>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first_name"
                          id="first-name"
                          autoComplete="given-name"
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={onValueChange}
                          value={contact.first_name}
                        />
                      </div>
                    </div>
                    <div>
                      {" "}
                      <label className="block text-sm font-semibold leading-6 text-gray-900">
                        <p style={{ verticalAlign: "inherit" }}>
                          Last name <span className="text-red-700">*</span>
                        </p>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="last_name"
                          id="last-name"
                          autoComplete="family-name"
                          required
                          onChange={onValueChange}
                          value={contact.last_name}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      {" "}
                      <label className="block text-sm font-semibold leading-6 text-gray-900">
                        <p style={{ verticalAlign: "inherit" }}>
                          E-mail address <span className="text-red-700">*</span>
                        </p>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          required
                          onChange={onValueChange}
                          value={contact.email}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      {" "}
                      <label className="block text-sm font-semibold leading-6 text-gray-900">
                        <p style={{ verticalAlign: "inherit" }}>
                          Phone number <span className="text-red-700">*</span>
                        </p>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="tel"
                          name="phone"
                          id="phone-number"
                          autoComplete="tel"
                          required
                          onChange={onValueChange}
                          value={contact.phone}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      {" "}
                      <label className="block text-sm font-semibold leading-6 text-gray-900">
                        <p style={{ verticalAlign: "inherit" }}>
                          Subject <span className="text-red-700">*</span>
                        </p>
                      </label>
                      <div className="mt-2.5">
                        {" "}
                        <select
                          id="subject"
                          x-model="subject"
                          name="subject"
                          className="mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={subject}
                          onChange={(event) => onValueChange(event)}
                          required
                        >
                          {" "}
                          <option value="">make a choice</option>
                          <option value="request_invoice">
                            I want to request an invoice for my order
                          </option>
                          <option value="cancel_order">
                            I want to cancel my order
                          </option>
                          <option value="resend_order">
                            Resend my order by email
                          </option>
                          <option value="other">I have another question</option>
                        </select>
                      </div>
                    </div>
                    {(subject === "request_invoice" ||
                      subject === "resend_order") && (
                      <div
                        className="sm:col-span-2"
                        x-show="subject === 'request_invoice' || subject === 'resend_order'"
                      >
                        {subject === "request_invoice" && (
                          <span>
                            <p
                              x-show="subject === 'request_invoice'"
                              style={{ verticalAlign: "inherit" }}
                            >
                              Please enter the order number and Chamber of
                              Commerce number of your order and click send
                              message. We will send you the invoice by email
                              within 1 working day.
                            </p>
                          </span>
                        )}
                        {subject === "resend_order" && (
                          <span>
                            <p
                              x-show="subject === 'resend_order'"
                              style={{ verticalAlign: "inherit" }}
                            >
                              Please enter the order number and Chamber of
                              Commerce number of your order and click send
                              message. We will send you the order manually by
                              e-mail within 1 working day.
                            </p>
                          </span>
                        )}{" "}
                        <label className="mt-4 block text-sm font-semibold leading-6 text-gray-900">
                          <p style={{ verticalAlign: "inherit" }}>
                            Order number <span className="text-red-700">*</span>
                          </p>
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="number"
                            name="order_number"
                            id="order-number"
                            autoComplete="order_id"
                            required
                            onChange={onValueChange}
                            value={contact.order_number}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    )}
                    {(subject === "request_invoice" ||
                      subject === "resend_order") && (
                      <div
                        className="sm:col-span-2"
                        x-show="subject === 'request_invoice' || subject === 'resend_order'"
                      >
                        {" "}
                        <label className="block text-sm font-semibold leading-6 text-gray-900">
                          <p style={{ verticalAlign: "inherit" }}>
                            Chamber of Commerce number{" "}
                            <span className="text-red-700">*</span>
                          </p>
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="number"
                            name="chamber_commerce_number"
                            id="kvk-number"
                            autoComplete="kvk-number"
                            required
                            onChange={onValueChange}
                            value={contact.chamber_commerce_number}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    )}
                    {subject === "cancel_order" && (
                      <div
                        className="sm:col-span-2"
                        x-show="subject === 'cancel_order'"
                      >
                        <p style={{ verticalAlign: "inherit" }}>
                          Immediately after payment, MijnUittreksels collects
                          the necessary and requested data from the Chamber of
                          Commerce via automatic systems and these are purchased
                          immediately. Even if you have not received the product
                          by email, you cannot claim a refund for this reason,
                          but only request us to resend the product to the same
                          or a different email address. You can do this by
                          choosing the option “Resend my order by email” in the
                          subject of this contact form.
                        </p>
                      </div>
                    )}
                    {subject === "other" && (
                      <div
                        className="sm:col-span-2"
                        x-show="subject === 'other'"
                      >
                        {" "}
                        <label className="block text-sm font-semibold leading-6 text-gray-900">
                          <p style={{ verticalAlign: "inherit" }}>
                            Message <span className="text-red-700">*</span>
                          </p>
                        </label>
                        <div className="mt-2.5">
                          {" "}
                          <textarea
                            name="message"
                            id="message"
                            rows={4}
                            required
                            onChange={onValueChange}
                            value={contact.message}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          ></textarea>
                        </div>
                      </div>
                    )}
                  </div>
                  {subject !== "cancel_order" && (
                    <div
                      className="mt-8 flex justify-end"
                      x-show="subject !== 'cancel_order'"
                    >
                      {" "}
                      <button
                        type="submit"
                        className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        <p style={{ verticalAlign: "inherit" }}>Send Message</p>
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <style jsx>
        {`
          select {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
            background-position: right 0.5rem center;
            background-repeat: no-repeat;
            background-size: 1.5em 1.5em;
            padding-right: 2.5rem;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            appearance: none;
          }
        `}
      </style>
    </div>
  );
}
