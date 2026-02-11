import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

const Home = () => {
  const { query } = useSelector((store) => store.search);
  console.log(query);
  return (
    <div>
      <div className="text-center p-2 text-xl bg-blue-800 font-semibold">
        Media Search
      </div>
      <SearchBar />
      {query !== "" ? "" : ""}
    </div>
  );
};

export default Home;
