import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Terms() {
  return (
    <div className="bg-white antialiased flex flex-col justify-between min-h-full">
      <div className="h-full">
        <Header />
        <section className="mx-auto flex flex-col gap-8 max-w-5xl items-center justify-between p-6 lg:px-8">
          <div className="w-full  overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              <p style={{ verticalAlign: "inherit" }}>Terms and Conditions</p>
            </h2>
            <dl className="space-y-4 divide-y divide-gray-900/10">
              <dd className="mt-2 pr-12 text-black">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  <br />
                  <br />
                  It may sometimes happen that there is a slight delay in
                  sending your product, but this will never take longer than 2
                  hours. Please also check your spam box after this time. Still
                  not found? Please contact us via our contact form. Please
                  include the order number and email address you entered when
                  ordering in your message. We will then still manually send you
                  your product by e-mail.
                  <br />
                  <br />
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  &lsquo;Content here, content here&lsquo;, making it look like
                  readable English. Many desktop publishing packages and web
                  page editors now use Lorem Ipsum as their default model text,
                  and a search for &lsquo;lorem ipsum&lsquo; will uncover many
                  web sites still in their infancy. Various versions have
                  evolved over the years, sometimes by accident, sometimes on
                  purpose (injected humour and the like).
                </p>
              </dd>
            </dl>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
