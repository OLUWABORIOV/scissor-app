import React from "react";
import { useState } from "react";
import Header from "../components/Header";
// import Button from "../components/Button";

function GetaQuote() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [primaryUseCase, setPrimaryUseCase] = useState("");
  const [country, setCountry] = useState("");

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    emailAddress: "",
    phoneNumber: "",
    jobTitle: "",
    companySize: "",
    primaryUseCase: "",
    country: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      companyName: "",
      emailAddress: "",
      phoneNumber: "",
      jobTitle: "",
      companySize: "",
      primaryUseCase: "",
      country: "",
    };

    if (!firstName.trim()) {
      newErrors.firstName = "First Name is required";
      valid = false;
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      valid = false;
    }
    if (!companyName.trim()) {
      newErrors.companyName = "Company Name is required";
      valid = false;
    }
    if (!emailAddress.trim()) {
      newErrors.emailAddress = "Email is required";
      valid = false;
    }
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
      valid = false;
    }
    if (!jobTitle.trim()) {
      newErrors.jobTitle = "Job Title is required";
      valid = false;
    }
    if (!companySize.trim()) {
      newErrors.companySize = "Company Size is required";
      valid = false;
    }
    if (!primaryUseCase.trim()) {
      newErrors.primaryUseCase = "Primary Use Case is required";
      valid = false;
    }
    if (!country.trim()) {
      newErrors.country = "Country is required";
      valid = false;
    }
    setError(newErrors);
    return valid;
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (validateForm()) {
      console.log(
        "Form submitted with:",
        firstName,
        lastName,
        companyName,
        emailAddress,
        phoneNumber,
        jobTitle,
        companySize,
        primaryUseCase,
        country
      );
    } else {
      console.log("Form validation failed");
    }
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <div>
        {" "}
        <Header />{" "}
      </div>
      <div className="form w-full flex justify-center">
        <div className="flex mt-10 p-10  w-1/2 ">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className=" flex flex-col gap-7 bg-[#CBD6E0]  ">
              <div className="names flex ">
                <div className="firstname mx-9">
                  <label htmlFor="firstname">First Name </label>
                  <input
                    type="firstname"
                    className={`border w-full rounded-md p-2 border-blue-600 ${error.firstName && "border-red-500"}`}
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setError({ ...error, firstName: "" });
                    }}
                  />
                  {error.firstName && (
                    <p className="text-red-500">{error.firstName}</p>
                  )}
                </div>
                <div className=" lastname mx-9">
                  {/* <p>Last Name</p> */}
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="lastName"
                    className={`border w-full rounded-md p-2 border-blue-600 ${error.lastName && "border-red-500"}`}
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setError({ ...error, lastName: "" });
                    }}
                  />
                  {error.lastName && (
                    <p className="text-red-500">{error.lastName}</p>
                  )}
                </div>
              </div>
              <div className="companyname mx-9">
                <label htmlFor="companyName">company Name</label>
                <input
                  type="text"
                  className={`border w-full rounded-md p-2 border-blue-600 ${error.companyName && "border-red-500"}`}
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    setError({ ...error, companyName: "" });
                  }}
                />
                {error.companyName && (
                  <p className=" text-red-500">${error.companyName} </p>
                )}
              </div>
              <div className="emailaddress mx-9">
                <label htmlFor="emailAddress">Business Email Address</label>
                <input
                  type="text"
                  className={`border w-full rounded-md p-2 border-blue-600 ${error.emailAddress && "border-red-500"}`}
                  value={emailAddress}
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                    setError({ ...error, emailAddress: "" });
                  }}
                />
                {error.emailAddress && (
                  <p className="text-red-500">{error.emailAddress}</p>
                )}
              </div>
              <div className="phonenumber mx-9">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="value"
                  className={`border w-full rounded-md p-2 border-blue-600 ${error.phoneNumber && "border-red-500"}`}
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setError({ ...error, phoneNumber: "" });
                  }}
                />
                {error.phoneNumber && (
                  <p className="text-red-500">{error.phoneNumber}</p>
                )}
              </div>
              <div className="jobtitle mx-9">
                <label
                  htmlFor="selectOption"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Title
                </label>
                <select
                  id="selectOption"
                  name="selectOption"
                  value={jobTitle}
                  onChange={(e) => {
                    setJobTitle(e.target.value);
                    setError({ ...error, jobTitle: "" });
                  }}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Please Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                {error.jobTitle && (
                  <p className="text-red-500">{error.jobTitle}</p>
                )}
              </div>
              <div className="company size mx-9">
                <label
                  htmlFor="selectOption"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Size
                </label>
                <select
                  id="selectOption"
                  name="selectOption"
                  value={companySize}
                  onChange={(e) => {
                    setCompanySize(e.target.value);
                    setError({ ...error, companySize: "" });
                  }}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Please Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                {error.companySize && (
                  <p className="text-red-500">{error.companySize}</p>
                )}
              </div>
              <div className="Primary Use Case mx-9">
                <label
                  htmlFor="selectOption"
                  className="block text-sm font-medium text-gray-700"
                >
                  Primary Use Case
                </label>
                <select
                  id="selectOption"
                  name="selectOption"
                  value={primaryUseCase}
                  onChange={(e) => {
                    setPrimaryUseCase(e.target.value);
                    setError({ ...error, primaryUseCase: "" });
                  }}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Please Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                {error.primaryUseCase && (
                  <p className="text-red-500">{error.primaryUseCase}</p>
                )}
              </div>
              <div className="Country mx-9">
                <label
                  htmlFor="selectOption"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <select
                  id="selectOption"
                  name="selectOption"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setError({ ...error, country: "" });
                  }}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Please Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                {error.country && (
                  <p className="text-red-500">{error.country}</p>
                )}
              </div>
              <p className="mx-9">
                Scissor requires the contact information you provide in order to
                reach out to you regarding our products and services. You have
                the option to unsubscribe from these communications whenever you
                wish. To learn more about how to unsubscribe, our privacy
                practices, and our dedication to safeguarding your privacy,
                please refer to our Privacy Policy.
              </p>
              <div className="getaquote-btn flex justify-center items-center ">
                <button className="bg-[#005AE2] w-1/2 text-white px-0.5 py-3 rounded-full"onClick={handleClick}>
                  {" "}
                  {/* <Button label="Submit" onClick={handleClick} />{" "} */}
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetaQuote;
