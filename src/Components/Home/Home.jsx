import { useState, useEffect } from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import { initialFetch } from "../../Fetch";

const Home = ({ isLoggedIn, gifs, setGifs }) => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchGifs = async () => {
      const fetchedGifs = await initialFetch(setTotalPages);
      setGifs(fetchedGifs);
    };
    fetchGifs();
  }, []);

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        setGifs={setGifs}
        setPage={setPage}
        setTotalPages={setTotalPages}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Body gifs={gifs} />
      {gifs && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          searchText={searchText}
          setGifs={setGifs}
        />
      )}
    </div>
  );
};

export default Home;
