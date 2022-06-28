// import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <p>
        © 2022 Abd Elhadi. All Rights Reserved to<span>&nbsp;</span>
      </p>
      <a
        href="https://www.craftz.dog/"
        target="_blank"
        className="craftz"
        rel="noreferrer"
      >
        Craftz Dog.
      </a>
      <style jsx>{`
        .footer {
          margin: auto;
          padding-top: 24px;
          padding-bottom: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer p {
          opacity: 0.4;
          text-align: center;
          font-size: 14px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }

        .craftz {
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          padding: 2px;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}

export default Footer;
