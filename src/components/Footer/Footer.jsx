import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer px-4 py-10 bg-main-footer1 text-mainText-p">
        <aside>
          <img
            src="/vite.svg"
            alt="Footer"
            width={80}
            height={80}
            className="mb-3"
          />
          <p className="max-w-xs text-lg">
            Thousands of jobs in the computer, engineering and technology
            sectors are waiting for you.
          </p>
        </aside>
        <div className="flex gap-6 justify-center  flex-wrap">
          <nav className="flex flex-col gap-3 ">
            <header className="footer-title">Company</header>
            <Link to="/" className="link link-hover">
              About us
            </Link>
            <Link to="/" className="link link-hover">
              Contact
            </Link>
            <Link to="/" className="link link-hover">
              Jobs
            </Link>
            <Link to="/" className="link link-hover">
              Press kit
            </Link>
          </nav>
          <nav className="flex flex-col gap-3 ">
            <header className="footer-title">Legal</header>
            <Link to="/" className="link link-hover">
              Terms of use
            </Link>
            <Link to="/" className="link link-hover">
              Privacy policy
            </Link>
            <Link to="/" className="link link-hover">
              Cookie policy
            </Link>
            <Link to="/" className="link link-hover">
              QAF
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
