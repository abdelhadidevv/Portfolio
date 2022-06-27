import "../styles/Posts.css";
import PostItem from "../components/PostItem";
import LayoutAimate from "../components/LayoutAimate";
import ReactJSImg from "../assets/react.jpg";
import ReduxJsImg from "../assets/redux.jpg";

function Posts() {
  return (
    <LayoutAimate title="posts">
      <div className="posts">
        <h3 className="posts-title">Popular Posts</h3>
        <div className="posts-projects">
          <PostItem img={ReactJSImg} title="React JS" />
          <PostItem img={ReduxJsImg} title="Redux JS" />
          <PostItem img={ReduxJsImg} title="React JS" />
          <PostItem img={ReactJSImg} title="Redux JS" />
          <PostItem img={ReactJSImg} title="React JS" />
          <PostItem img={ReduxJsImg} title="Redux JS" />
        </div>
      </div>
    </LayoutAimate>
  );
}

export default Posts;
