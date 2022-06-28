import ProjectLink from "../components/ProjectLink";
import ReactJSImg from "../public/images/react.jpg";
import ReduxJsImg from "../public/images/redux.jpg";
import LayoutAimate from "../components/LayoutAimate";

function Works() {
  return (
    <LayoutAimate title="works">
      <div className="works">
        <h3 className="works-title">Works</h3>
        <div className="works-projects">
          <ProjectLink
            img="/images/react.jpg"
            title="React JS"
            subTitle="Learn react js"
            isWork={true}
          />
          <ProjectLink
            img="/images/redux.jpg"
            title="Node JS"
            subTitle="Learn node js"
            isWork={true}
          />
          <ProjectLink
            img="/images/react.jpg"
            title="React JS"
            subTitle="Learn react js"
            isWork={true}
          />
          <ProjectLink
            img="/images/redux.jpg"
            title="Node JS"
            subTitle="Learn node js"
            isWork={true}
          />
        </div>
        <hr className="divider" />
        <h3 className="works-title">Collaborations</h3>
        <div className="works-projects">
          <ProjectLink
            img="/images/react.jpg"
            title="React JS"
            subTitle="Learn react js"
            isWork={true}
          />
          <ProjectLink
            img="/images/redux.jpg"
            title="Node JS"
            subTitle="Learn node js"
            isWork={true}
          />
        </div>
        <hr className="divider" />

        <h3 className="works-title">Old works</h3>
        <div className="works-projects">
          <ProjectLink
            img="/images/react.jpg"
            title="React JS"
            subTitle="Learn react js"
            isWork={true}
          />
          <ProjectLink
            img="/images/redux.jpg"
            title="Node JS"
            subTitle="Learn node js"
            isWork={true}
          />
          <ProjectLink
            img="/images/react.jpg"
            title="React JS"
            subTitle="Learn react js"
            isWork={true}
          />
        </div>
      </div>
      <style jsx>{`
        .works {
          width: 100%;
          margin-top: 20px;
        }

        .works-projects {
          width: 100%;
          display: grid;
          grid-gap: 24px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .works-title {
          margin-bottom: 16px;
          font-size: 20px;
          font-family: "M PLUS Rounded 1c";
        }

        .divider {
          opacity: 0.6;
          border-width: 0px 0px 1px;
          border-image: initial;
          border-color: inherit;
          border-style: solid;
          width: 100%;
          margin-top: 24px;
          margin-bottom: 24px;
        }

        @media (max-width: 480px) {
          .works-projects {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </LayoutAimate>
  );
}

export default Works;
