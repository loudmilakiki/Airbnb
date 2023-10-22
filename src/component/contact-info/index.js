import "./index.css";

import Heading from "../heading";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <div className="contact__block">
        <Image src={image} name="pic" />

        <div className="contact__block-details">
          <Heading>Господар - {name}</Heading>

          <div className="contact__block-about">
            <span className="contact__block-value">{phone}</span>
            <span className="contact__block-value">
              {response_rate}% відсотків швидкості відгуку
            </span>
            <span className="contact__block-value">{response_time}</span>
          </div>
        </div>
      </div>

      <p className="contact__info">{info}</p>
    </div>
  );
}

function Image({ src, name }) {
  return <img className="pic" src={src} alt={name} />;
}
