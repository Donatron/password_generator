import React from "react";

function Footer() {
  return (
    <div className="footer text-center">
      <strong>
        <span>
          Copyright &copy; {new Date().getFullYear()}
          <a
            href="https://donatron.github.io/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3"
          >
            Don Macarthur
          </a>
        </span>
      </strong>
    </div>
  );
}

export default Footer;
