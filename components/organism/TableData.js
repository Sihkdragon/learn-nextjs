const TableData = (props) => {
  const number = props.number;
  const name = props.name;
  const kelas = props.kelas;
  const age = props.age;
  const quotes = props.quotes;
  return (
    <tr>
      <td>{number}</td>
      <td>{name}</td>
      <td>{kelas}</td>
      <td>{age}</td>
      <td>{quotes}</td>
      <td>
        <button className="bg-lime-500 text-white text-sm rounded-md px-2 py-1">
          Edit
        </button>
      </td>
    </tr>
  );
};

export default TableData;
