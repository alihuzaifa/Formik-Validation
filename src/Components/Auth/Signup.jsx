import React from "react";
import "./signup.css";
import { useFormik } from "formik";

const Signup = () => {
  // const init==

  useFormik({
    // initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Responsive Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className>
              <form>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    // value={}
                    // onChange={}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    // value={}
                    // onChange={}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Re-type Password"
                    // value={}
                    // onChange={}
                  />
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user" />
                      </span>
                      <input
                        type="text"
                        name="fname"
                        placeholder="First Name"
                        // value={}
                        // onChange={}
                      />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user" />
                      </span>
                      <input
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                        // value={}
                        // onChange={}
                      />
                    </div>
                  </div>
                </div>
                <div className="input_field radio_option">
                  <input type="radio" name="radiogroup1" id="rd1" />
                  <label htmlFor="rd1">Male</label>
                  <input type="radio" name="radiogroup1" id="rd2" />
                  <label htmlFor="rd2">Female</label>
                </div>
                <div className="input_field select_option">
                  <select>
                    <option>Select a country</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                  <div className="select_arrow" />
                </div>
                <div className="input_field checkbox_option">
                  <input type="checkbox" id="cb1" />
                  <label htmlFor="cb1">I agree with terms and conditions</label>
                </div>
                <div className="input_field checkbox_option">
                  <input type="checkbox" id="cb2" />
                  <label htmlFor="cb2">I want to receive the newsletter</label>
                </div>
                <input
                  className="button"
                  type="submit"
                  defaultValue="Register"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
