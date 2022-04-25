import Header from "../../components/organism/Header";
import TopItems from "../../components/molecules/TopItems";
import admin from "../../databases/data";
import Spinner from "../../components/atom/Spinner";
import { useTable } from "react-table";
import { useMemo, useState, useEffect } from "react";
const index = () => {
  const data = useMemo(
    () => [
      {
        nama: "Ditotisi Rasyid Sumpena",
        quotes:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, explicabo.",
        address: "Jl. Sukajadi 123",
        gaji: 2500000,
      },
      {
        nama: "Ditotisi Rasyid Sumpena",
        quotes:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, explicabo.",
        address: "Jl. Sukajadi 123",
        gaji: 2500000,
      },
      {
        nama: "Ditotisi Rasyid Sumpena",
        quotes:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, explicabo.",
        address: "Jl. Sukajadi 123",
        gaji: 2500000,
      },
    ],

    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Nama",

        accessor: "nama", // accessor is the "key" in the data
      },

      {
        Header: "Quotes",

        accessor: "quotes",
      },
      {
        Header: "Address",

        accessor: "address",
      },
      {
        Header: "Gaji",

        accessor: "gaji",
      },
    ],

    []
  );

  const {
    getTableProps,

    getTableBodyProps,

    headerGroups,

    rows,

    prepareRow,
  } = useTable({ columns, data });

  return (
    <>
      <Header title="Dashboard" />
      <TopItems bigTitleContent={` ${admin}, Welcome to Dashboard`} />
      <table
        {...getTableProps()}
        className="table-auto border border-indigo-900"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className=" border border-indigo-900"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="border border-indigo-900"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default index;
