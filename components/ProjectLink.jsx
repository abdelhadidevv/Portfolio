import Image from "next/image";
import Link from "next/link";

function ProjectLink({ img, title, subTitle, isWork, link = "" }) {
  return (
    <div className="project-link">
      <Link href={link} passHref>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            style={{ borderRadius: "12px" }}
            width={230}
            height={128}
            src={img}
            alt={title}
            loading="lazy"
          />
        </a>
      </Link>

      <p className="project-title" style={isWork && { fontSize: "20px" }}>
        {title}
      </p>
      <p className="project-subtitle">{subTitle}</p>
      <style jsx>{`
        .project-link {
          text-align: center;
          overflow: hidden;
        }

        .project-link img {
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

        .project-title {
          margin-top: 8px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 16px;
          display: block;
          overflow-wrap: break-word;
        }

        .project-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 14px;
          display: block;
          overflow-wrap: break-word;
        }

        @media (max-width: 548px) {
          .project-link img {
            max-width: 410px;
            max-height: 220px;
          }
        }
      `}</style>
    </div>
  );
}

export default ProjectLink;
