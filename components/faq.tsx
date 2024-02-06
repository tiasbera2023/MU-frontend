import { useState } from "react";

export default function FaqComponent({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pt-4" x-data="{ open: false }">
      <dt>
        {" "}
        <button
          type="button"
          className="flex w-full items-start justify-between text-left text-gray-900"
          aria-controls="faq-0"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          <span className="text-base font-semibold leading-7">
            <p style={{ verticalAlign: "inherit" }}>{question}</p>
          </span>{" "}
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
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
                  d="M12 6v12m6-6H6"
                ></path>
              </svg>
            )}{" "}
          </span>{" "}
        </button>
      </dt>
      {isOpen ? (
        <dd className="mt-2 pr-12" id="faq-0">
          <p className="text-black">{answer}</p>
        </dd>
      ) : null}
    </div>
  );
}
