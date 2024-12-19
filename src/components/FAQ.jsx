"use client";
import { useState } from "react";
import ButtonPrimary from "./reusableComponents/Button/ButtonPrimary";
import ButtonOutline from "./reusableComponents/Button/ButtonOutline";
import Container from "./Container";
import downArrow from "../../public/icons/downArrow.png";
import upArrow from "../../public/icons/upArrow.png";
import Image from "next/image";

const tabData = [
  {
    name: "Investor",
    faqs: [
      {
        question: "How can i register as an investor?",
        answer:
          "The Corporate VISA Managers simplifies visa management for organizations, reducing administrative hassles, ensuring compliance, and facilitating a smooth and timely visa process for their employees.",
      },
      {
        question:
          "What is the maximum and minimum investment in RSIN Platform?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        question:
          "How can i upgrade my account to a qualified on RSIN Platform?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        question: "What is automatic investment?",
        answer:
          "The Corporate VISA Managers simplifies visa management for organizations, reducing administrative hassles, ensuring compliance, and facilitating a smooth and timely visa process for their employees.",
      },
      {
        question: "When can i receive profits?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
    ],
  },
  {
    name: "Business",
    faqs: [
      {
        question:
          "What is the maximum and minimum investment in RSIN Platform?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        question:
          "How can i upgrade my account to a qualified on RSIN Platform?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
    ],
  },
  {
    name: "Raqamyah",
    faqs: [
      {
        question: "How can i register as an investor?",
        answer:
          "The Corporate VISA Managers simplifies visa management for organizations, reducing administrative hassles, ensuring compliance, and facilitating a smooth and timely visa process for their employees.",
      },
      {
        question:
          "What is the maximum and minimum investment in RSIN Platform?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        question:
          "How can i upgrade my account to a qualified on RSIN Platform?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
    ],
  },
  {
    name: "Shari'a Compliant",
    faqs: [
      {
        question: "How can i register as an investor?",
        answer:
          "The Corporate VISA Managers simplifies visa management for organizations, reducing administrative hassles, ensuring compliance, and facilitating a smooth and timely visa process for their employees.",
      },
      {
        question:
          "How can i upgrade my account to a qualified on RSIN Platform?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
    ],
  },
  {
    name: "Finance Application",
    faqs: [
      {
        question:
          "What is the maximum and minimum investment in RSIN Platform?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        question:
          "What is the maximum and minimum investment in RSIN Platform?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
    ],
  },
];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-5 md:p-10 mt-28 bg-gray-50">
      <Container>
        <p className="text-center text-green-800 font-normal text-xl">Faq</p>
        <p className="text-center text-black font-semibold text-[42px] leading-[60px] mt-4">
          Frequently asked questions
        </p>
        {/* tabs */}
        <div className="flex justify-center gap-8 mb-6 mt-14">
          {tabData.map((tab, id) => (
            <div
              key={id}
              onClick={() => {
                setActiveTab(id);
                setOpenIndex(0);
              }}
            >
              {activeTab === id ? (
                <ButtonPrimary> {tab.name}</ButtonPrimary>
              ) : (
                <ButtonOutline> {tab.name}</ButtonOutline>
              )}
            </div>
          ))}
        </div>
        {/* FAQ items */}
        <div className="mx-auto mt-16">
          {tabData[activeTab].faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 p-4 py-6 cursor-pointer ${
                openIndex === index ? "bg-white" : "bg-transparent"
              }`}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center"
              >
                <h3 className="text-2xl font-medium text-black">
                  {faq.question}
                </h3>
                <span className="">
                  {openIndex === index ? (
                    <Image
                      src={upArrow}
                      alt="upArrow"
                      width={15}
                      height={15}
                    ></Image>
                  ) : (
                    <Image
                      src={downArrow}
                      alt="downArrow"
                      width={15}
                      height={15}
                    ></Image>
                  )}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 font-normal text-lg text-gray-600 pr-16">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
