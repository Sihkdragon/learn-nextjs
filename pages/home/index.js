const index = () => {
  return (
    <div className="home">
      <nav className="nav-container flex container justify-between text-lg text-white items-center">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-lime-600 to-rose-700 text-transparent bg-clip-text">
          Learn NextJS
        </h1>
        <ul className="nav-items">
          <li className="nav-items-selected">About</li>
          <li className="nav-items-selected">Contact</li>
          <li className="nav-items-selected">Gallery</li>
          <li>
            <button className="inline-block bg-rose-500 text-white transition-colors duration-300 px-3 rounded-lg py-1 hover:bg-rose-600 cursor-pointer">
              Log In
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default index;

index.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
