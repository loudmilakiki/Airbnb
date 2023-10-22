import "./index.css";

import ListItem from "../list-item";
import Heading from "../heading";
import { Fragment } from "react";

export default function Attraction({ list }) {
  return (
    <div className="attraction">
      <Heading border>Пам'ятки поблизу</Heading>

      <div className="attraction__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ name, link }) {
  return (
    <ListItem
      children={
        <a className="link" href={link}>
          {name}
        </a>
      }
    ></ListItem>
  );
}
