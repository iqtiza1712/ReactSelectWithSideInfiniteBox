import { React, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./styles.css";

export default function Infinite() {
  const [todos, setData] = useState([]);
  const [isNext, setIsNext] = useState(true);
  const [page, setPage] = useState(0);
  const url = [
    `https://my-json-server.typicode.com/rivitest001/task01/posts`,
    `https://my-json-server.typicode.com/rivitest001/task02/posts`,
    `https://my-json-server.typicode.com/rivitest001/task03/posts`,
    `https://my-json-server.typicode.com/rivitest001/task04/posts`
  ];
  const fetchData = async () => {
    fetch(url[page])
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData((prev) => [...todos, ...json]);
      })
      .catch(console.log);
  };
  const fetchMoreData = () => {
    fetchData();
    setPage(page + 1);
    if (page === 4) {
      setIsNext(false);
    }
  };
  useEffect(() => {
    fetchMoreData();
  }, []);
  return (
    <div className="Glass1" style={{ width: "50%", float: "right" }}>
      <InfiniteScroll
        dataLength={todos.length} //This is important field to render the next data
        next={() => {
          setTimeout(() => {
            fetchMoreData();
          }, 1000);
        }}
        hasMore={isNext}
        loader={
          <div className="centerload">
            <h4 className="load loader">Loading</h4>
          </div>
        }
        endMessage={
          <p className="load">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="books">
          {todos.map((book) => {
            return (
              <div className="book" key={book.id}>
                <div className="details">
                  <p>{book.activity}</p>
                </div>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}
