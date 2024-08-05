import { Link } from "react-router-dom";

const Dash = () => {
  return (
    <div className="w-[13%] h-[100vh] bg-[red] top-0 sticky flex z-30">
      <Link to="/class">Class</Link>
    </div>
  );
};

export default Dash;
