import axios from "axios";

const initialFetch = async (setTotalPages) => {
  try {
    const response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: import.meta.env.VITE_api_key,
        limit: 16,
        offset: 0,
      },
    });
    const data = response.data.data;
    setTotalPages(Math.ceil(response.data.pagination.total_count / 16));
    return data.map((ele) => {
      return { url: ele.images.fixed_width.url, id: ele.id, rating: ele.rating, title: ele.title };
    });
  } catch (err) {
    console.log(err);
  }
};

export default initialFetch;
