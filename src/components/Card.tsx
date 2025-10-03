import React, {useState} from 'react';

export enum CardVariant {
  outlined= 'outlined',
  primary= 'primary',
}

interface CardProps {
  width: string,
  height: string,
  variant: CardVariant,
  onClick: (num: number) => void,
  children?: React.ReactNode,
}

const Card =
  ({
     width,
     height,
     variant,
     onClick,
     children
  }: CardProps) => {
  const [state, setState] = useState(0)
  return (
    <div style={{width, height,
      border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
      background: variant === CardVariant.primary ? 'lightgrey' : '',
    }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;