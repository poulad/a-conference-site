import React from "react";
import { Form } from "react-bootstrap";
import Link from "next/link";
import { SITE_TITLE } from "./layout";
import { useTheme } from "../providers/use-theme";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      throw new Error(`Unexpected theme ${theme}`);
    }
  };

  const themeIconName = theme === "dark" ? "moon" : "sun";

  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">
                Add some information about the album below, the author, or any
                other background context. Make it a few sentences long so folks
                can pick up some informative tidbits. Then, link them off to
                some social networking sites or contact information.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Follow on Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Like on Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Email me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center">
              <img
                src="logo.svg"
                alt="logo"
                width="50"
                height="50"
                className="mr-2 rounded-circle"
              />
              <strong>{SITE_TITLE}</strong>
            </a>
          </Link>
          <Form.Switch
            type="switch"
            id="theme-switch"
            onChange={toggleTheme}
            checked={theme === "dark"}
            label={
              <img
                src={`https://unpkg.com/bootstrap-icons@%5E1/icons/${themeIconName}.svg`}
                alt="theme icon"
                aria-disabled="true"
                style={{
                  filter:
                    "invert(93%) sepia(84%) saturate(764%) hue-rotate(333deg) brightness(106%) contrast(103%)",
                }}
              />
            }
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
