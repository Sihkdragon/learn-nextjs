import Image from "next/image";
import Link from "next/link";
import Header from "../../components/organism/Header";
import Profile from "../../components/layout/homepageSection/profile";
import Resume from "../../components/layout/homepageSection/Resume";

const index = () => {
  return (
    <>
      <Header title="Home" />
      <div className="home">
        <nav className="nav-container flex container justify-between text-lg text-white items-center">
          <h1 className="select-none text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-lime-600 to-rose-700 text-transparent bg-clip-text">
            LearnNextJS.io
          </h1>
          <ul className="nav-items">
            <li className="nav-items-selected"> Welcome</li>
            <li className="nav-items-selected">
              <a href="#profile-section">Profile</a>
            </li>
            <li className="nav-items-selected">Resume</li>
            <li className="nav-items-selected">Portfolio</li>
            <li className="nav-items-selected">Contact</li>
            <li>
              <Link href="/login">
                <a className="inline-block bg-rose-500 text-white transition-colors duration-300 px-3 rounded-lg py-1 hover:bg-rose-600 cursor-pointer">
                  Log In
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="jumbotron">
          <div className="jumbotronLeft">
            <h1>Banyak orang bisa mendengar, namun sedikit yang mengerti</h1>
            <button className="bg-lime-500 btn m-auto px-2 hover:bg-lime-700 hover:shadow-inner">
              More Details
            </button>
          </div>
          <div className="place-self-end self-center jumbotronRight">
            <Image src="/img/profile.png" height={600} width={500} />
            <h3 className="myname">Ditotisi Rasyid Sumpena</h3>
            <h2 className="myjob">Junior Syariah Web Developer</h2>
          </div>
        </div>
        {/* Profile Section */}
        <Profile />
        {/* Resume Section */}
        <Resume />
      </div>
    </>
  );
};

export default index;

index.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
