import Image from "next/image";

export default function PagesHeader({ title, image, alt, text }) {
  return (
    <>
      <div className="container-header">
        <div className="header-item">
          <h1 className="header-item">{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
