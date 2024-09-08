import cn from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  imgAlt?: string;
  imgBottom?: boolean;
  imgLeft?: boolean;
  imgRight?: boolean;
  imgSrc?: string;
  imgTop?: boolean;
  style?: HTMLAttributes<HTMLDivElement>['style'];
  title?: string;
}

function Card({ children, className, imgAlt, imgBottom, imgLeft, imgRight, imgSrc, imgTop, style, title }: PropsWithChildren<Props>) {
  return (
    <div className={cn("card", className)} style={style}>
      {imgTop ? <img alt={imgAlt} className="card-img-top" src={imgSrc} /> : null}
      {imgLeft ? <img alt={imgAlt} className="card-img-left" src={imgSrc} /> : null}
      <div className="card-body">
        {title ? <h5 className="card-title">{title}</h5> : null}
        {children}
      </div>
      {imgRight ? <img alt={imgAlt} className="card-img-right" src={imgSrc} /> : null}
      {imgBottom ? <img alt={imgAlt} className="card-img-bottom" src={imgSrc} /> : null}
    </div>
  );
}

export default Card;
