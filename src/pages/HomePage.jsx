import React, { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../components/Header";
import BookCard from "../components/CardComponents/Card";
import { searchValContext } from "../context/searchValContext";
import Menu from "../components/Menu";
import HomePageTopHeroComponent from "../components/HomePageTopHero-Component";
import Loading from "../components/Loading";

const HomePage = () => {
  const searchContext = useContext(searchValContext);
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data.json");
        const data = await response.json();

        const filtered = data.filter((item) =>
          `${item.class} ${item.desc}`
            .toLowerCase()
            .includes(searchContext.searchVal.toLowerCase())
        );

        setFilterData(filtered);
      } catch (err) {
        console.error("JSON error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [searchContext.searchVal]);

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (filterData.length === 0) {
    content = <p className="no-data">
  No books found 📚 <br />
  Try searching by class or subject.
</p>

  } else {
    content = (
      <>
        {chunkArray(filterData, 2).map((group, index) => (
          <div className="card-cont" key={index}>
            {group.slice(0, 10).map((bookData, i) => (
              <BookCard key={i} value={bookData} />
            ))}
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="homeMainDiv">
        <Menu />
        <HomePageTopHeroComponent />
        <div className="home-card-div">{content}</div>
      </div>
    </>
  );
};

export default HomePage;
