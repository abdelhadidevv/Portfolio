import LayoutAimate from "../components/LayoutAimate";
import { Helmet } from "react-helmet";

function _404() {
  return (
    <LayoutAimate title="_404">
      <div>
        <Helmet>
          <title>Error 404 - Abd Elhaid</title>
        </Helmet>
        <br />
        <br />
        <br />
        <h1>Error 404</h1>
        <p className="apple-font">The page you're looking for was not found.</p>
        <br />
        <br />
        <button className="portfolio-btn">
          <a href="/" className="apple-font" target="_self">
            Return to home
          </a>
        </button>
      </div>
    </LayoutAimate>
  );
}

export default _404;
