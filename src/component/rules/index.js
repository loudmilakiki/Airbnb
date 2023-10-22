import "./index.css";

import Box from "../box";
import Heading from "../heading";
import Description from "../description";

export default function Rules({
  rules,
  policy,
  transport,
  language,
  offers,
  instruction,
}) {
  return (
    <Box shadow className="details">
      <Heading border>Додаткові властивості</Heading>
      <Description>
        <span className="content">Правила дому:</span>
        {rules}
      </Description>

      <Description>
        <span className="content">Правила дому:</span>
        {rules}
      </Description>

      <Description>
        <span className="content">Правила дому:</span>
        {rules}
      </Description>

      <Description>
        <span className="content">Правила дому:</span>
        {rules}
      </Description>

      <Description>
        <span className="content">Правила дому:</span>
        {rules}
      </Description>
    </Box>
  );
}
