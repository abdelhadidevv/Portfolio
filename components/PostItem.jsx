import "../styles/PostItem.css";

function PostItem({ img, title }) {
  return (
    <div className="post-item">
      <img src={img} alt={title} loading="lazy" />
      <p className="post-title">{title}</p>
    </div>
  );
}

export default PostItem;
