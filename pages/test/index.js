import Header from "../../components/organism/Header";
import admin from "../../databases/data";
import { useEffect, useState } from "react";
import TopItems from "../../components/molecules/TopItems";
import Spinner from "../../components/atom/Spinner";
export default function Test() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);

  const AdminName = admin;

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setTimeout(setLoading(false), 10000);
      });
  }, []);

  if (isLoading)
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Spinner SpinnerCaption="Loading..." />;
      </div>
    );
  if (!data)
    return (
      <div className=" w-full justify-center items-center flex min-h-screen  text-rose-500 text-7xl">
        Fetching Failed
      </div>
    );

  return (
    <div>
      <Header title="Test" />
      <TopItems
        bigTitleContent={`Hello ${AdminName}`}
        button={true}
        destination={"test/spinner"}
      />
      <div className="bg-indigo-100 text-indigo-900 p-2 mt-5 rounded shadow-md">
        <h3 className="text-lg text-indigo-600 mb-5">Table Data</h3>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th className="text-left px-2">Name</th>
              <th className="text-left px-2">Email</th>
              <th className="text-left px-2">Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, id) => {
              return (
                <tr
                  key={id}
                  className="group hover:border-l-2 border-l-rose-400"
                >
                  <td className="group-hover:text-white">{user.id}</td>
                  <td className="group-hover:text-white">{user.name}</td>
                  <td className="group-hover:text-white">{user.email}</td>
                  <td className="group-hover:text-white">
                    {user.address.street +
                      " " +
                      user.address.suite +
                      " " +
                      user.address.city}
                  </td>
                  <td className="group-hover:text-white text-center">
                    {user.phone}
                  </td>
                  <td className="group-hover:text-white text-center">
                    {user.website}
                  </td>{" "}
                  <td className="group-hover:text-white text-center">
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
      <div className="mt-8"></div>
    </div>
  );
}
