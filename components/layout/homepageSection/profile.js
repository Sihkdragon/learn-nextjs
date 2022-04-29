import Timeline from "../../organism/homepage/Timeline";
import { DocumentIcon } from "@heroicons/react/solid";
const Profile = () => {
  return (
    <section className="profile" id="profile-section">
      <main className="section-content">
        <h1 className="section-title text-indigo-600">Profile</h1>
        <div className="section-wrapper">
          <div className="biodata  w-1/2">
            <h3 className="section-subtitle text-rose-500">About Me</h3>
            <div className="data py-5">
              <div className="data-group">
                <h3>Name</h3>
                <h4>Ditotisi Rasyid Sumpena</h4>
              </div>
              <div className="data-group">
                <h3>Date of Birth</h3>
                <h4>July 3rd 2000</h4>
              </div>
              <div className="data-group">
                <h3>Phone</h3>
                <h4>+62 0821 1741 6500</h4>
              </div>
              <div className="data-group">
                <h3>Email</h3>
                <h4>dithor37@gmail.com</h4>
              </div>
              <div className="data-group">
                <h3>Address</h3>
                <h4>Tangerang, Indonesia</h4>
              </div>
            </div>

            <h5 className="section-subtitle text-rose-500 mb-5">Resume</h5>
            <p className="text-sm text-slate-700 indent-8 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, suscipit soluta. Fugiat, doloribus sint esse totam
              ipsum nihil mollitia explicabo dicta provident. Qui odio nemo
              sapiente eos nostrum hic. Natus modi asperiores in accusantium
              corporis voluptas exercitationem expedita sint, voluptate
              praesentium laboriosam a consequatur error numquam unde possimus
              similique itaque voluptates excepturi illum fugiat quod quae
              adipisci? Quaerat, tempore molestiae aliquid, sequi rem qui eum
              quasi odit a ipsam quibusdam explicabo deleniti fuga ut iusto
              laudantium assumenda obcaecati fugiat minus quia nobis pariatur.
              Beatae, natus numquam voluptate vero consequuntur suscipit officia
              unde, praesentium, nam hic iure? Odit, sed. Dolores,
              reprehenderit?
            </p>
            <button className="btn bg-lime-500 hover:bg-lime-700 mt-10 mx-auto">
              <DocumentIcon className="w-8 mr-3" /> Download Resume
            </button>
          </div>
          <div className="card-data min-h-fit w-1/2">
            <Timeline />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Profile;
