import { useState } from "react";
import magicwand from "../assets/images/magicwand.svg";
import { Link } from "react-router-dom"

function UrlSection() {
  const [domain, setDomain] = useState("");
  const [errors, setErrors] = useState({ domain: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Form submitted with:", domain);
    } else {
      console.log("Form validation failed");
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { domain: "" };

    if (!domain.trim()) {
      newErrors.domain = "Select a domain";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleDomainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDomain(event.target.value);
  };

  return (
    <>
      <div className="third-sec bg-[#1E3448] flex justify-center p-12" id="url">
        <div className="bg-white w-[476px] h-[355px] p-9 mx-auto">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Paste URL here..."
              className="border border-black-100 p-1 w-full rounded-md"
            />

            <div className="flex gap-16 mt-8 w-[392px]">
              <div className="">
                <label
                  htmlFor="domain"
                  className="block text-sm font-medium text-gray-700"
                >
                </label>
                <select
                  id="domain"
                  name="domain"
                  value={domain}
                  onChange={handleDomainChange}
                  aria-placeholder="select domain"
                  className="border border-black-100 p-1 rounded-md"
                >
                  <option value="">Select Domain</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                {errors.domain && <p className="text-red-500">{errors.domain}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type Alias here"
                  className="border border-black-100 p-1  text-blue-700 rounded-md"
                />
              </div>
            </div>
            <Link to="/Login">
            <button className="pl-9 pr-9 pt-2 pb-2 bg-blue-700 mt-9 rounded-full w-full text-white flex justify-center">
              Trim
              <img src={magicwand} alt="trim-want" />
            </button>
            </Link>
            <p className="text-blue-500 mt-5 text-sm">
              By clicking TrimURL, I agree to the{" "}
              <span className="font-bold">Terms of Service, Privacy Policy</span> and Use of Cookies.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default UrlSection;
