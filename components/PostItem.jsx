
function PostItem({ img, title }) {
  return (
    <div className="post-item">
      <img src={img} alt={title} loading="lazy" />
      <p className="post-title">{title}</p>
      <style jsx>{`
        .post-item {
          text-align: center;
          overflow: hidden;
        }

        .post-item img {
          margin: auto;
          display: block;
          width: 100%;
          height: auto;
          min-width: 196px;
          max-width: 230px;
          min-height: 108px;
          max-height: 186px;
          border-radius: 12px;
          object-fit: fill;
          background: #000;
        }

        .post-title {
          margin-top: 8px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 16px;
          display: block;
          overflow-wrap: break-word;
        }

        @media (max-width: 548px) {
          .post-item img {
            max-width: 410px;
            max-height: 220px;
          }
        }
      `}</style>
    </div>
  );
}

export default PostItem;
