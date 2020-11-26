import Spinner from "./spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={Spinner} alt="Loading" />
      <h1>Fetching data</h1>
    </div>
  );
};

export default Loader;
