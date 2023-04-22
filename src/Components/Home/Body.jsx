import React from "react";

const Body = ({ gifs }) => {
  return (
    <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">Gif's for you</h2>

      {gifs == null ? (
        <h2>Loading...</h2>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {gifs.map((gif) => (
            <div key={gif.id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={gif.url}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {gif.title}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">something</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
