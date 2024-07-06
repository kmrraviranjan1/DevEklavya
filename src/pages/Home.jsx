import { Link, createSearchParams } from "react-router-dom";
import { topics } from "../data/topic";
const Home = () => {
  return (
    <div>
      <p className="font-bold text-center my-2">Select an topic to start</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics?.map(({ name }, index) => (
          <div key={index}>
            <Link
              to={{
                pathname: "/mock",
                search: `${createSearchParams({
                  type: "topic",
                  value: name,
                })}`,
              }}
            >
              <p className="px-2 py-1 text-2xl text-slate-800 text-center border-4 border-double capitalize border-indigo-600 ring-2 ring-zinc-200 bg-cyan-100">{name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
