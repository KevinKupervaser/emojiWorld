import * as React from "react";
import EmojiCard, { EmojiCardProps } from "../components/EmojiCard";

export interface EmojiListProps {
  emojis: EmojiCardProps[];
}

const List: React.FC<EmojiListProps> = ({ emojis }) => {
  return (
    <React.Fragment>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {emojis.map((emoji, index) => {
          return <EmojiCard key={index} {...emoji} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default List;
