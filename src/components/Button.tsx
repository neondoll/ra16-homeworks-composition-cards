import { PropsWithChildren } from 'react';

type Props = { href?: string; variant: 'primary' | 'secondary' };

function Button({ children, href, variant = 'secondary' }: PropsWithChildren<Props>) {
  const attrs = { children, className: `btn btn-${variant}` };

  return href ? <a {...attrs} href={href} /> : <button {...attrs} type="button" />;
}

export default Button;