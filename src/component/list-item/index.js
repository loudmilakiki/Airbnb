import "./index.js";

export default function ListItem({ children, imageSrc, title }) {
  return (
    <li className="list-item">
      {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon" />}

      <div className="list-item__block">
        {title && <strong className="list-item__title">{title}</strong>}
        <div className="list-item__component">{children}</div>
      </div>
    </li>
  );
}
