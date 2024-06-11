import React from "react";
import ContactImage from "../../assets/contact/contact-png.png"; // Import image

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <style>{`
        /* CSS for Contact page */
        .contact-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 2rem;
        }

        .contact-form {
          width: 100%;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #d1d5db; /* Border color */
          border-radius: 0.25rem;
          transition: border-color 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #f59e0b; /* Border color on focus */
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3); /* Box shadow on focus */
        }

        .contact-form button {
          width: 100%;
          padding: 0.75rem;
          border: none;
          border-radius: 0.25rem;
          background-color: #f59e0b; /* Button color */
          color: #fff; /* Text color */
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #d97706; /* Button color on hover */
        }

        .contact-info {
          width: 100%;
          max-width: 400px;
          margin-top: 2rem;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          margin-top: 0.5rem;
        }

        .contact-info-item svg {
          margin-right: 0.5rem;
        }

        .contact-info-item p {
          margin: 0;
        }

        .contact-image {
          display: none;
        }

        @media (min-width: 640px) {
          .contact-container {
            flex-direction: row;
          }

          .contact-form {
            width: 50%;
            padding-right: 2rem;
          }

          .contact-image {
            display: block;
            width: 100%;
            max-width: 400px;
          }
        }

        @media (min-width: 1024px) {
          .contact-form input,
          .contact-form textarea {
            padding: 1rem;
          }

          .contact-form button {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="max-w-7xl w-full p-6 space-y-8">
        <div className="text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We'd love to hear from you! Please fill out the form below to get in touch.
          </p>
        </div>
        <div className="contact-container">
          <div className="contact-form">
            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="contact-input"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="contact-input"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="contact-input"
                    placeholder="Message"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="contact-btn"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="hidden sm:block">
            <img src={ContactImage} alt="Contact" className="contact-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
