import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import CategoryCard from "../components/CategoryCard";

import Layout from "../components/Layout";
import List from "../components/List";
import emojisData from "../data/emojis";

const Home: NextPage = () => {
  const [filteredEmojis, setFilteredEmojis] = React.useState(
    emojisData.slice(0, 100)
  );

  function handleFilterBySearch(search: string) {
    if (search.trim().length > 0) {
      setFilteredEmojis(
        emojisData.filter((emoji) =>
          emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        )
      );
    } else {
      setFilteredEmojis(emojisData.slice(0, 100));
    }
  }

  function handleFilterByCategory(category: string) {
    setFilteredEmojis(
      emojisData.filter((emoji) =>
        emoji.group.toUpperCase().includes(category.toUpperCase().trim())
      )
    );
  }

  return (
    <Layout>
      <h1 className='text-2xl md:text-5xl font-bold text-gray-700 text-center tracking-wide'>
        Welcome to EmojiWorld 💻
      </h1>
      <div className='flex justify-center'>
        <input
          className='w-full max-w-xl border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1'
          id='name'
          type='text'
          placeholder='Search for Emojis'
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-8'>
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji='😀'
          group={"Smileys & Emotion"}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji='👨🏻'
          group={"People & Body"}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji='🐶'
          group={"Animals & Nature"}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji='🍔'
          group={"Food & Drink"}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji='⚽️'
          group='Activities'
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji='🏨'
          group={"Travel & Places"}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji='💡'
          group='Objects'
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji='⚛️'
          group='Symbols'
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji='🚩'
          group='Flags'
        />
      </div>
      <List emojis={filteredEmojis.slice(0, 100)} />
    </Layout>
  );
};

export default Home;
