import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

const students = [
  {
    id: 1,
    name: "Ayesha Khan",
    roll: 101,
    subject: "Mathematics",
    section: "A",
  },
  {
    id: 2,
    name: "Rahim Uddin",
    roll: 102,
    subject: "Physics",
    section: "B",
  },
  {
    id: 3,
    name: "Sneha Roy",
    roll: 103,
    subject: "Chemistry",
    section: "A",
  },
  {
    id: 4,
    name: "Tariq Hasan",
    roll: 104,
    subject: "Biology",
    section: "C",
  },
  {
    id: 5,
    name: "Farzana Ahmed",
    roll: 105,
    subject: "English",
    section: "B",
  },
  {
    id: 2,
    name: "Rahim Uddin",
    roll: 102,
    subject: "Physics",
    section: "B",
  },
  {
    id: 3,
    name: "Sneha Roy",
    roll: 103,
    subject: "Chemistry",
    section: "A",
  },
  {
    id: 4,
    name: "Tariq Hasan",
    roll: 104,
    subject: "Biology",
    section: "C",
  },
  {
    id: 5,
    name: "Farzana Ahmed",
    roll: 105,
    subject: "English",
    section: "B",
  },
];

export default function TanstackTable2() {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 3,
  });
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "roll",
      header: "Roll",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "subject",
      header: "Subject",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "section",
      header: "Section",
      cell: (info) => info.getValue(),
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data: students,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="w-3/4 mx-auto">
      <h3 className="text-3xl text-center font-semibold">Tanstack Table 2</h3>
      <div className="mt-8">
        <table className="w-full border border-collapse">
          <thead>
            {tableInstance.getHeaderGroups().map((headerGroup, idx) => (
              <tr key={idx}>
                {headerGroup?.headers?.map((header, idx) => (
                  <th key={idx} className="border py-3 px-8">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {tableInstance.getRowModel().rows.map((cellGroup, idx) => (
              <tr key={idx}>
                {cellGroup?.getVisibleCells().map((cell, idx) => (
                  <td key={idx} className="border py-3 px-8">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* pagination */}
        <div className="mt-4 space-x-4">
          <button
            onClick={() => tableInstance.previousPage()}
            disabled={!tableInstance.getCanPreviousPage()}
            type="button"
            className="border py-2 w-[150px] rounded-md"
          >
            Previous
          </button>

          <span>
            Page {tableInstance.getState().pagination.pageIndex + 1} of{" "}
            {tableInstance.getPageCount()}
          </span>

          <button
            onClick={() => tableInstance.nextPage()}
            disabled={!tableInstance.getCanNextPage}
            className="border py-2 w-[150px] rounded-md"
          >
            Next
          </button>
        </div>

       
      </div>
    </div>
  );
}
