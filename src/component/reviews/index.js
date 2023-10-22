import "./index.css";

import Box from "../box";
import Heading from "../heading";
import { Fragment } from "react";

export default function Reviews({ list }) {
  return (
    <div className="review__block">
      <Heading border>Відгуки клієнтів</Heading>
      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review__block">
      <div className="review__author">
        <span className="review__name">{guestName}</span>
        <span>Рейтинг: {rating}</span>
      </div>

      <span className="review__info">{review}</span>
    </Box>
  );
}
