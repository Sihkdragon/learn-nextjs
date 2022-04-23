import admin from "../databases/data";
import Header from "../components/organism/Header";
import TopItems from "../components/molecules/TopItems";

export default function Home() {
  const AdminName = admin;
  return (
    <div>
      <Header title="Home" />
      <TopItems bigTitleContent={`Hello ${AdminName}`} />
      <div className="bg-indigo-100 text-indigo-900 px-1 rounded shadow-md">
        <h3 className="text-lg text-indigo-600 my-5">Table Data</h3>
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Class</th>
              <th>Age</th>
              <th>Quotes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.class}</td>
                  <td>{user.age}</td>
                  <td>{user.quotes}</td>
                  <td>
                    <button className="tablebtn bg-lime-500 hover:bg-lime-600 ">
                      Edit
                    </button>
                    <button className="bg-rose-400 hover:bg-rose-500 tablebtn ml-4">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const user = [
  {
    name: "Alicia Ferrera",
    class: "IF-5",
    age: "22",
    quotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, laborum!",
  },
  {
    name: "Jonathan Black",
    class: "MN-9",
    age: "21",
    quotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, laborum!",
  },
  {
    name: "Sugiarti Michael",
    class: "SI-1",
    age: "23",
    quotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, laborum!",
  },
];
