import React from "react";
import "./Table.css";

function Table({ header, data }) {
  return (
    <table>
      <thead>
        <tr>
          {header?.map((elem) => {
            return <th key={elem}>{elem}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((row) => {
          return (
            <tr key={`row-${row[0]}`}>
              {row?.map((elem) => {
                return <td key={elem}>{elem}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
