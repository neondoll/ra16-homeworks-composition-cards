import { PropsWithChildren } from 'react';

function CardText({ children }: PropsWithChildren) {
  return <p className="card-text">{children}</p>;
}

export default CardText;
