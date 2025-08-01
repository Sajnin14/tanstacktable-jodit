import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import React, { useState } from "react";

// sample data
const flowers = [
  {
    id: 1,
    name: "Rose",
    scientificName: "Rosa",
    color: "Red",
    species: "Rosa indica",
    origin: "Asia",
  },
  {
    id: 2,
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    color: "Yellow",
    species: "Helianthus",
    origin: "North America",
  },
  {
    id: 3,
    name: "Tulip",
    scientificName: "Tulipa",
    color: "Various (Red, Yellow, Purple)",
    species: "Tulipa gesneriana",
    origin: "Central Asia",
  },
  {
    id: 4,
    name: "Daffodil",
    scientificName: "Narcissus",
    color: "Yellow",
    species: "Narcissus pseudonarcissus",
    origin: "Europe",
  },
  {
    id: 5,
    name: "Lily",
    scientificName: "Lilium",
    color: "White",
    species: "Lilium candidum",
    origin: "Europe & Asia",
  },
  {
    id: 6,
    name: "Marigold",
    scientificName: "Tagetes",
    color: "Orange",
    species: "Tagetes erecta",
    origin: "Mexico",
  },
  {
    id: 7,
    name: "Orchid",
    scientificName: "Orchidaceae",
    color: "Purple",
    species: "Phalaenopsis",
    origin: "Tropical Asia",
  },
  {
    id: 8,
    name: "Jasmine",
    scientificName: "Jasminum",
    color: "White",
    species: "Jasminum sambac",
    origin: "South Asia",
  },
];

export default function ShadcnTanstackTable() {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 3,
  });

  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const columns = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "scientificName",
      header: "Scientific Name",
    },
    {
      accessorKey: "color",
      header: "Color",
      cell: (info) => <p className={" bg-purple-200"}>{info.getValue()}</p>,
    },
    {
      accessorKey: "species",
      header: "Species",
      cell: (info) => <p className="bg-amber-100">{info.getValue()}</p>,
    },
    {
      accessorKey: "origin",
      header: "Origin",
      sortingFns: false,
    },
  ];

  const table = useReactTable({
    columns,
    data: flowers,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter, 
    state: {
      pagination,
      sorting,
      globalFilter,
    },
  });

  const totalPage = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;
  return (
    <div className="w-full md:w-5/6 lg:w-3/4 mx-auto">
      <h3 className="text-3xl text-center font-semibold">
        Shadcn Tanstack Table
      </h3>

      <div className="mt-8">
        <input
          
          value={globalFilter ?? ""}
          onChange={e => setGlobalFilter(e.target.value)}
          placeholder="filter here"
          className="w-2/3 border py-3 px-8 rounded-md "
        />
        <Table className={"border mt-6"}>
          <TableHeader>
            {table?.getHeaderGroups().map((headerGroup, idx) => (
              <TableRow key={idx} className="[&>th]:border-r last:border-r-0">
                {headerGroup?.headers?.map((header, idx) => (
                  <TableHead key={idx} className="text-center">
                    <button
                      onClick={header.column.getToggleSortingHandler()}
                      className="inline text-purple-700 font-semibold mr-3 underline"
                    >
                      {header.column.getCanSort()
                        ? header.column.getNextSortingOrder() === "asc"
                          ? "Sort ascending"
                          : header.column.getNextSortingOrder() === "desc"
                          ? "Sort descending"
                          : "clear sort"
                        : undefined}
                    </button>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.map((row, idx) => (
              <TableRow key={idx} className="[&>td]:border-r last:border-r-0">
                {row?.getVisibleCells().map((cell, idx) => (
                  <TableCell className="text-center" key={idx}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* pagination */}
        <div>
          {totalPage > 1 && (
            <div className="mt-6 space-x-4">
              <button
                type="button"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="border py-2 w-[130px] rounded-md cursor-pointer"
              >
                Previous
              </button>
              {Array.from({ length: totalPage }).map((_, idx) => (
                <span
                  key={idx}
                  className={`border rounded-md py-2 px-4 ${
                    currentPage == idx &&
                    "bg-black text-white border-transparent"
                  }`}
                >
                  {idx + 1}
                </span>
              ))}
              <button
                type="button"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="border py-2 w-[130px] rounded-md cursor-pointer"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
