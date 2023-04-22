import axios from "axios";

const SearchResults = async (setGifs, searchText, page) => {
  try {
    let response;

    if (searchText !== "") {
      response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: import.meta.env.VITE_api_key,
          limit: 16,
          offset: page * 16,
          q: searchText,
        },
      });
    } else {
      response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: import.meta.env.VITE_api_key,
          limit: 16,
          offset: page * 16,
        },
      });
    }

    let data = response.data.data;

    data = data.map((ele) => {
      return { url: ele.images.fixed_width.url, id: ele.id, rating: ele.rating, title: ele.title };
    });

    setGifs(data);
  } catch (err) {
    console.log(err);
  }
};

export default SearchResults;
