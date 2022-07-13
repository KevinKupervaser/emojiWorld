import * as React from 'react';

export interface EmojiCardProps {
  code: string;
  emoji: string;
  name: string;
  category: string;
  group: string;
  subgroup: string;
}

const EmojiCard: React.FC<EmojiCardProps> = ({
  code,
  emoji,
  name,
  category,
  group,
  subgroup,
}) => {
  return (
    <React.Fragment>
      <span>{emoji}</span>
      <h3>{name}</h3>
    </React.Fragment>
  );
};

export default EmojiCard;
