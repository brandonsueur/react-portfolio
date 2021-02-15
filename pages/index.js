import React from "react";
import Link from "next/link";
import Banner from "../components/Banner";
import usePosts from "../utils/getPosts";

const Homepage = (props) => {
  const { data, loading } = usePosts();

  console.log(data);
  return (
    <>
      <Banner />

      <h2 className="font-semibold mb-8 tracking-tight text-2xl text-black dark:text-white">
        Mes articles
      </h2>

      <div>
        {data.map((post) => {
          const url = `/writing/${post.slug}`;
          const { title, date } = post.header;

          return (
            <div className="flex my-5">
              <Link href={url}>
                <a className="text-lg text-indigo-600 border-b-2 border-white hover:border-indigo-600">
                  {title}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
