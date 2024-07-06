import { Link, createSearchParams } from "react-router-dom";
import { topics } from "../data/topic";
const Home = () => {
  return (
    <div>
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
            {name}
          </Link>
        </div>
      ))}
      <div>
        Go to <Link to="/mock">Mock</Link>
      </div>
    </div>
  );
};

export default Home;
