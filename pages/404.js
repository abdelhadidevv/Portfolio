import LayoutAimate from "../components/LayoutAimate";
import Link from "next/link";

function _404() {
  return (
    <LayoutAimate title="_404">
      <div>
        <br />
        <br />
        <br />
        <h1>Error 404</h1>
        <p className="apple-font">The page you are looking for was not found.</p>
        <br />
        <br />
        <button className="portfolio-btn">
          <Link href="/">
            <a className="apple-font"> Return to home</a>
          </Link>
        </button>
      </div>
    </LayoutAimate>
  );
}

export default _404;
