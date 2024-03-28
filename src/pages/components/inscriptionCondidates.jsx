import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "next-i18next";

function InscriptionCondidates() {
  const { t } = useTranslation("candidates");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tele: "",
    email: "",
    pdf: null,
  });

  const fileInputRef = useRef(null); // Create a ref for the file input

  const sendPdf = async (e) => {
    e.preventDefault();
    if (!formData.firstName) {
      return toast.error("Please enter your First Name");
    }
    if (!formData.lastName) {
      return toast.error("Please enter your Last Name");
    }
    if (!formData.tele) {
      return toast.error("Please enter your phone number");
    }
    if (!formData.pdf) {
      return toast.error("Please upload your pdf");
    }
    const formDataToSend = new FormData();
    formDataToSend.append("file", formData.pdf);
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("tele", formData.tele);
    formDataToSend.append("email", formData.email);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.status === 200) {
        setFormData({
          firstName: "",
          lastName: "",
          tele: "",
          email: "",
          pdf: null,
        });
        toast.success(
          `Hey ${formData.firstName}, your message was sent successfully! I will contact you soon! 👋`,
          {
            position: "bottom-right",
            duration: 7000,
          }
        );
        // Reset the file input field using the ref
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Reset the input value to empty
        }
      } else {
        toast.error(
          `Hello ${formData.firstName}, it appears that your previous message was not sent successfully. Please try sending it again later.`,
          {
            position: "bottom-right",
            duration: 7000,
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      pdf: file,
    });
  };

  return (
    <div className="space-y-4">
      <div className=" flex justify-center ">
        <h2>
          <span className=" capitalize text-center font-bold text-md lg:text-2xl text-[#0149a6]">
            {t("inscriptionCondidates.title")}
          </span>
        </h2>
      </div>
      <form className="container flex flex-col gap-4" onSubmit={sendPdf}>
        <Toaster
          toastOptions={{
            className: "dark:bg-[#121212] dark:text-white bg-white text-black ",
          }}
        />
        <input
          value={formData.firstName}
          onChange={handleInputChange}
          type="text"
          name="firstName"
          className="bg-[#ffffff] h-8 w-full font-semibold border p-4 rounded-md text-xs"
          placeholder={t("inscriptionCondidates.firstName")}
        />
        <input
          value={formData.lastName}
          onChange={handleInputChange}
          type="text"
          name="lastName"
          className="bg-[#ffffff] w-full font-semibold h-8 border p-4 rounded-md text-xs"
          placeholder={t("inscriptionCondidates.lastName")}
        />

        <input
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          name="email"
          className="bg-[#ffffff] w-full font-semibold h-8 border p-4 rounded-md text-xs"
          placeholder={t("inscriptionCondidates.email")}
        />
        <input
          value={formData.tele}
          onChange={handleInputChange}
          type="tel"
          name="tele"
          className="bg-[#ffffff] w-full font-semibold h-8 border p-4 rounded-md text-xs"
          placeholder={t("inscriptionCondidates.tele")}
        />
        <div className="flex flex-col gap-2 items-center capitalize">
          <label htmlFor="pdf" className=" font-bold">
            {" "}
            {t("inscriptionCondidates.pdf")}
          </label>
          <input
            id="pdf"
            ref={fileInputRef} // Assign the ref to the file input
            onChange={handleFileChange}
            type="file"
            name="pdf"
            accept="application/pdf"
            className="bg-[#ffffff] w-full font-semibold  border p-4 rounded-md text-xs file:bg-[#0149a6] file:text-white file:rounded file:mr-4 file:py-2 file:px-4 file:border-none file:text-sm file:font-semibold"
          />
        </div>

        <button className="px-12 py-1 w-full rounded font-bold border-4 duration-700 hover:bg-white hover:text-[#0149a6] border-[#0149a6] bg-[#0149a6] text-white">
          {t("inscriptionCondidates.Inscription")}
        </button>
      </form>
    </div>
  );
}

export default InscriptionCondidates;
