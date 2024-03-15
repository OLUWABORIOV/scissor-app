// import React from 'react'
const handleSubmit = (event: any) => {
    event.preventDefault();

    // if (validateForm()) {
    //   // Perform your login logic here if the form is valid
    //   console.log("Form submitted with:", email, password);
    // } else {
    //   console.log("Form validation failed");
    // }
  };


function Input() {
  return (
    <div>
        <div className="  form-section flex justify-center items-center">
              <form
                onSubmit={handleSubmit}
                className="flex p-6 flex-col gap-6 w-full justify-center"
              >
                <div className="email mx-9">
                  {" "}
                  <input
                    type="text"
                    placeholder="Email address or Username"
                    className={`border  rounded-md p-2 h-[46px] w-[462px] border-blue-600`}
                    value={''}
                  />
                </div>

                <div className="password mx-9">
                  <input
                    type="password"
                    placeholder="Password"
                    className={`border p-2 h-[46px] w-[462px] rounded-md border-blue-600`}
                    value={''}
                  />
                
                </div>
              </form>
            </div>
    </div>
  )
}

export default Input
