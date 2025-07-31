import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";


const employees = [
  {
    id: 1,
    name: "John Doe",
    companyName: "TechCorp",
    jobPosition: "Senior Software Engineer",
    salary: 120000,
    employeeId: "TC-1001",
  },
  {
    id: 2,
    name: "Jane Smith",
    companyName: "DataSystems",
    jobPosition: "Data Scientist",
    salary: 110000,
    employeeId: "DS-2002",
  },
  {
    id: 3,
    name: "Robert Johnson",
    companyName: "WebSolutions",
    jobPosition: "Frontend Developer",
    salary: 95000,
    employeeId: "WS-3003",
  },
  {
    id: 4,
    name: "Emily Davis",
    companyName: "CloudTech",
    jobPosition: "DevOps Engineer",
    salary: 130000,
    employeeId: "CT-4004",
  },
  {
    id: 5,
    name: "Michael Brown",
    companyName: "FinancePlus",
    jobPosition: "Financial Analyst",
    salary: 85000,
    employeeId: "FP-5005",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    companyName: "TechCorp",
    jobPosition: "Product Manager",
    salary: 140000,
    employeeId: "TC-6006",
  },
  {
    id: 7,
    name: "David Taylor",
    companyName: "DataSystems",
    jobPosition: "Database Administrator",
    salary: 105000,
    employeeId: "DS-7007",
  },
  {
    id: 8,
    name: "Jessica Martinez",
    companyName: "WebSolutions",
    jobPosition: "UX Designer",
    salary: 90000,
    employeeId: "WS-8008",
  },
  {
    id: 9,
    name: "Daniel Anderson",
    companyName: "CloudTech",
    jobPosition: "Backend Developer",
    salary: 115000,
    employeeId: "CT-9009",
  },
  {
    id: 10,
    name: "Lisa Thomas",
    companyName: "FinancePlus",
    jobPosition: "Accountant",
    salary: 80000,
    employeeId: "FP-1010",
  },
];

export default function TanstackTable3() {

    const columns = [
        {
            accessorKey: "name",
            header: "Name"
        },
        {
            accessorKey: "companyName",
            header: "Company Name",
        },
        {
            accessorKey: "jobPosition",
            header: "Job Position"
        },
        {
            accessorKey: "salary",
            header: "Salary",
        },
        {
            accessorKey: "employeeId",
            header: "Employee Id"
        }
    ]

    const table = useReactTable({
        columns,
        data: employees,
        getCoreRowModel: getCoreRowModel()
    })

  return (
    <div className="w-3/4 mx-auto">
      <h3 className="text-3xl text-center font-semibold">Tanstack Table 3</h3>

      <div className="mt-8">
         <table className="w-full">
            <thead>
                {
                    table?.getHeaderGroups().map((headerGroup, idx) => <tr key={idx}>
                        {
                            headerGroup?.headers?.map((header, idx) => <th key={idx} className="py-3 px-6 border">
                             {
                                flexRender(header.column.columnDef.header, header.getContext())
                             }
                            </th> )
                        }
                    </tr>)
                }
            </thead>

            <tbody>
                {
                    table?.getRowModel().rows.map((row, idx) => <tr key={idx}>
                        {
                            row?.getVisibleCells().map((cell) => <td key={cell.id} className="border py-2 px-6">
                            {
                                flexRender(cell.column.columnDef.cell, cell.getContext())
                            }
                            </td>)
                        }
                    </tr>)
                }
            </tbody>
         </table>
      </div>
    </div>
  );
}
