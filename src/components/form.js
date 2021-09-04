import emailjs from "emailjs-com";
import React from "react";
import logo from "../img/wa.jpeg";
import "../App.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7jvb8c",
        "template_oqhucki",
        e.target,
        "user_np3AX5bGY2n1uWNcaxwp9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Hello\nThank you for choosing us .\n We will contact you soon"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <h1 class="display-4">UNICORN DECORS</h1>
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div class="text-center">
              <img src={logo} className="img-thumbnail" alt="..." />
            </div>
            <h1 class="display-6">Order</h1>
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Place"
                name="place"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                name="phone"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                name="subject"
              >
                <option selected>Subject</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Farewell</option>
                <option>Others</option>
              </select>
            </div>
            {/* <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div> */}
            <div className="col-8 form-group pt-2 mx-auto">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                name="date"
              >
                <option selected>Date</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                name="month"
              >
                <option selected>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
