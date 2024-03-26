import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { CheckCircle } from "react-feather";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "contact",
        "navbar",
        "employers",
      ])),
    },
  };
}
export default function Candidates() {
  const { t } = useTranslation("employers");
  const Services = [
    {
      id: 1,
      title: "Training/ Formation (Language and Nursing)",
      description: [
        "Online and onsite German courses (A1 to B2 level)",
        "Online and onsite Nursing courses in English",
        "With participation certificate when level is completed",
        "Free material given during the class",
        "Affordable fees",
        "With WhatsApp Group Support",
        "Internationally qualified and competent teachers",
        "Special focus for individual weaknesses",
        "High guaranteed success rate",
        "Proposed Time slots",
      ],
    },
    {
      id: 2,
      title: "Job Placement",
      description: [
        "Examination of candidate’s diploma and certificate",
        "Creation of candidates’ profile",
        "Professional CV creation",
        "Connecting candidates with employers",
        "Arranging job interviews with provided interpreter support",
        "Preparation for an online or face-to-face interview",
        "Ensuring a bilingual employment contract is in place",
      ],
    },
    {
      id: 3,
      title: "Vocational Training Placement",
      description: [
        "Assistance in finding vocational training in Germany",
        "Professional CV creation highlighting skills and achievements",
        "Support with bilingual training contracts",
        "German language courses to enhance proficiency",
        "Guidance and assistance with visa processes",
        "Ongoing support upon arrival, including accommodation search",
      ],
    },
    {
      id: 4,
      title:
        "Degree recognition in collaboration with the employers and our global partners",
      description: [
        "Application for the deficit notice",
        "Application for ZAV approval",
        "Creation of a candidate-specific further education agreement according to the requirements of the licensing authorities",
        "Recognition management until receipt of the professional certificate",
      ],
    },
    {
      id: 5,
      title:
        "Professional qualification in collaboration with employers and our global partners",
      description: ["Knowledge test preparation course", "Knowledge test"],
    },
    {
      id: 6,
      title:
        "On-boarding and Integration in collaboration with employers and our global partners",
      description: [
        "Applying for visas and work permits",
        "Scheduling and organization of arrival",
        "Registration at the responsible municipality",
        "Opening a bank account",
        "Registration with the statutory health insurance",
        "Apartment search",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8 pb-16   bg-[#F5F5F5] ">
        <div className="flex flex-col gap-10">
          <div className="relative">
            <Image
              src="/image/candidates/SactionCandidates.jpg"
              className="h-auto max-w-full w-full  "
              width={6240}
              height={2528}
              alt="Explorem"
            />

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-[#ffff]  w-full items-center flex flex-col gap-2 capitalize p-2 lg:p-9 text-[#0149A6]">
                <div className="lg:text-4xl text-md font-bold">
                  <h1>Our Best Services for Candidates</h1>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="container">
          <div className="px-2 grid grid-cols-1 lg:grid-cols-2   gap-4  list-outside ">
            {Services.map((ele, index) => (
              <div
                key={index}
                className=" flex flex-col  bg-white shadow  rounded-lg "
              >
                <span className="text-sm md:text-base  font-semibold mb-4 text-white rounded-t-lg p-4 bg-[#0149a6]">
                  {ele.title}
                </span>
                <ul className="p-3 pl-4 flex flex-col gap-2    ">
                  {ele.description.map((ele, index) => (
                    <li
                      key={index}
                      className=" text-xs md:text-sm capitalize  border-[#0149a6] border-l-4 pl-4 "
                    >
                      {ele}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <form>
            
          </form>
        </div>
      </div>
    </>
  );
}
