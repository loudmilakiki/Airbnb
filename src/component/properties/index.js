import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bath from "./bath.svg";

export default function Properties({ title, guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="properties">
      <Heading border>{title}</Heading>

      <ListItem imageSrc={guest}>
        <span>Гості: {guests}</span>
      </ListItem>

      <ListItem imageSrc={bedroom}>
        <span>Спальня: {bedrooms}</span>
      </ListItem>

      <ListItem imageSrc={bed}>
        <span>Ліжко: {beds}</span>
      </ListItem>

      <ListItem imageSrc={bath}>
        <span>Ванна кімната: {baths}</span>
      </ListItem>
    </Box>
  );
}
