import "../styles/ProjectLink.css";

function ProjectLink({ img, title, subTitle, isWork }) {
  return (
    <div className="project-link">
      <img src={img} alt={title} loading="lazy" />
      <p className="project-title" style={isWork && { fontSize: "20px" }}>
        {title}
      </p>
      <p className="project-subtitle">{subTitle}</p>
    </div>
  );
}

export default ProjectLink;
