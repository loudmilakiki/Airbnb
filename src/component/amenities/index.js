import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breackfast from "./breackfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import pet from "./pet.svg";
import airport from "./airport.svg";
import security from "./security.svg";
import service from "./service.svg";
import child from "./child.svg";

export default function Amenities({
  title,
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box shadow className="amenities">
      <Heading border>{title}</Heading>

      {hasPool && <ListItem imageSrc={pool}>Басейн</ListItem>}
      {hasGym && <ListItem imageSrc={gym}>Спортивний зал</ListItem>}
      {hasFreeBreakfast && (
        <ListItem imageSrc={breackfast}>Безкоштовний сніданок</ListItem>
      )}
      {hasFreeWiFi && <ListItem imageSrc={wifi}>Безкоштовний Wi-Fi</ListItem>}
      {hasParking && (
        <ListItem imageSrc={parking}>Безкоштовний вуличний паркінг</ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc={pet}>
          Дозволено розміщення з домашніми тваринами
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc={airport}>Трансфер до/з аеропорту</ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc={security}>Консьєрж-сервіс</ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc={service}>Обслуговування номерів</ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc={child}>Підходить для дітей</ListItem>
      )}
    </Box>
  );
}
