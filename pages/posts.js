import PostItem from "../components/PostItem";
import LayoutAimate from "../components/LayoutAimate";

function Posts() {
  return (
    <LayoutAimate title="posts">
      <div className="posts">
        <h3 className="posts-title">Popular Posts</h3>
        <div className="posts-projects">
          <PostItem img="/images/react.jpg" title="React JS" />
          <PostItem img="/images/redux.jpg" title="Redux JS" />
          <PostItem img="/images/react.jpg" title="React JS" />
          <PostItem img="/images/redux.jpg" title="Redux JS" />
          <PostItem img="/images/react.jpg" title="React JS" />
          <PostItem img="/images/redux.jpg" title="Redux JS" />
        </div>
      </div>
      <style jsx>{`
        .posts {
          width: 100%;
          margin-top: 20px;
        }

        .posts-projects {
          width: 100%;
          display: grid;
          grid-gap: 24px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .posts-title {
          margin-bottom: 16px;
          font-size: 20px;
          font-family: "M PLUS Rounded 1c";
        }

        @media (max-width: 480px) {
          .posts-projects {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </LayoutAimate>
  );
}

export default Posts;
