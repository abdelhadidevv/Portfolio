import "../styles/Works.css";
import ProjectLink from "../components/ProjectLink";
import ReactJSImg from "../assets/react.jpg";
import ReduxJsImg from "../assets/redux.jpg";
import LayoutAimate from "../components/LayoutAimate";

function Works() {
  return (
    <LayoutAimate title="works">
      <div className="works">
        <h3 className="works-title">Works</h3>
        <div className="works-projects">
          <ProjectLink
            img={ReactJSImg}
            title="React JS"
            subTitle="Learn react js"
            isWork={true}
          />
          <ProjectLink
            img={ReduxJsImg}
            title="Node JS"
            subTitle="Learn node js"
            isWork={true}
          />
          <ProjectLink
            img={ReduxJsImg}
            title="React JS"
            subTitle="Learn react js"
            isWork={true}
          />
          <ProjectLink
            img={ReactJSImg}
            title="Node JS"
            subTitle="Learn node js"
            isWork={true}
          />
        </div>
        <hr className="divider" />
        <h3 className="works-title">Collaborations</h3>
        <div className="works-projects">
          <ProjectLink
            img={ReactJSImg}
            title="React JS"
            subTitle="Learn react js"
            isWork={true}
          />
          <ProjectLink
            img={ReduxJsImg}
            title="Node JS"
            subTitle="Learn node js"
            isWork={true}
          />
        </div>
        <hr className="divider" />

        <h3 className="works-title">Old works</h3>
        <div className="works-projects">
          <ProjectLink
            img={ReduxJsImg}
            title="React JS"
            subTitle="Learn react js"
            isWork={true}
          />
          <ProjectLink
            img={ReactJSImg}
            title="Node JS"
            subTitle="Learn node js"
            isWork={true}
          />
          <ProjectLink
            img={ReactJSImg}
            title="React JS"
            subTitle="Learn react js"
            isWork={true}
          />
        </div>
      </div>
    </LayoutAimate>
  );
}

export default Works;
