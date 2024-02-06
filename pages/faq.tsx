import FaqComponent from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Faq() {
  return (
    <div className="bg-white antialiased flex flex-col justify-between min-h-full">
      <div className="h-full">
        <Header />
        <section className="mx-auto flex flex-col gap-8 max-w-5xl items-center justify-between p-6 lg:px-8">
          <div className="w-full  overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              <p style={{ verticalAlign: "inherit" }}>
                Frequently Asked Questions
              </p>
            </h2>
            <dl className="space-y-4 divide-y divide-gray-900/10">
              <FaqComponent
                question="I have not received an email from you, but I have paid?"
                answer="It may sometimes happen that there is a slight delay in
                    sending your product, but this will never take longer than 2
                    hours. Please also check your spam box after this time.
                    Still not found? Please contact us via our contact form.
                    Please include the order number and email address you
                    entered when ordering in your message. We will then still
                    manually send you your product by e-mail."
              />
              <FaqComponent
                question="Who are you?"
                answer="My Extracts is an intermediary for requesting extracts and
                other Chamber of Commerce products, but is not part of the
                Chamber of Commerce."
              />
              <FaqComponent
                question="I have lost my RSIN, is it in the extract?"
                answer="With a Private Company you have a unique RSIN. You will also
                find this on the extract, provided it concerns a BV."
              />

              <FaqComponent
                question="Can I still cancel my order?"
                answer="Unfortunately, you cannot cancel your order after payment
                and you are not entitled to cancellation or any form of
                refund. Immediately after your payment, our systems collect
                the necessary data you have requested from the Chamber of
                Commerce and these are purchased immediately. Even if you
                have not received the product by email, you cannot claim a
                refund for this reason, but only request us to resend your
                product to the same or a different email address. It goes
                without saying that we will help you with this quickly."
              />

              <FaqComponent
                question="I have lost my VAT number, what now?"
                answer={`You can request your VAT number again at${" "}${(
                  <a href="www.mijnbtwnummer.nl" target="_blank">
                    <span style={{ textDecoration: "underline" }}>
                      www.mijnbtwnummer.nl
                    </span>
                  </a>
                )}`}
              />

              <FaqComponent
                question="There are still old details on my extract"
                answer={`After a change in the Trade Register, it may take a number
                of working days before these changes are processed. You will
                receive confirmation from the Chamber of Commerce when the
                changes have been implemented. Only then will the adjusted
                data be visible on the extract you order. So take this into
                account and order your extract after confirmation of the
                change.`}
              />
            </dl>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
