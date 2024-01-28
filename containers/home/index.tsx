import FilterList from "@/components/filter/filterList";
import MovieList from "@/components/movie/movieList";
import React from "react";

const HomeContainer = () => {
  return (
    <>
      <main className="container">
        <section className="mt-16">
          <FilterList />
        </section>
        <section className="mt-6">
          <MovieList />
        </section>
      </main>
    </>
  );
};

export default HomeContainer;
