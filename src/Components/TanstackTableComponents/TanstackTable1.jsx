import { flexRender } from "@tanstack/react-table";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

const data = [
  { id: 1, name: "Apple", category: "Fruit", price: 1.2 },
  { id: 2, name: "Carrot", category: "Vegetable", price: 0.5 },
  { id: 3, name: "Milk", category: "Dairy", price: 2.0 },
  { id: 4, name: "Bread", category: "Grain", price: 1.5 },
  { id: 5, name: "Chicken", category: "Meat", price: 5.5 },
];

export default function TanstackTable1() {
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "category",
      header: () => <span>Category</span>,
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: (info) => info.getValue(),
    },
  ];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(), //order doesn't matter anymore!
    // etc.
  });

  return (
    <div>
      <h3 className="text-3xl text-center font-semibold">Tanstack Table 1</h3>

      <div className="mt-8">
        <table className="w-3/4 mx-auto border border-collapse">
          <thead className="border p-4">
            {table?.getHeaderGroups().map((headerGroup, idx) => (
              <tr key={idx}>
                {headerGroup.headers.map((head, idx) => (
                  <th key={idx} className="border p-2">
                    {flexRender(
                      head.column.columnDef.header,
                      head.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="">
            {table.getRowModel().rows.map((row, idx) => (
              <tr key={idx}>
                {row?.getVisibleCells().map((cell, idx) => (
                  <td key={idx} className="border p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
