"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown, MoreHorizontal } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  lastSeen: string;
};

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="gap-2 flex"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          {column.getIsSorted() === "asc" ? (
            <ArrowUp size={16} />
          ) : (
            <ArrowDown size={16} />
          )}
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      );
    },
    cell:({row}) => {
      return(<p className="focus-visible:outline-none focus-visible:border-none max-w-[30%]" contentEditable>
        {row.original.name}
      </p>)
    }
    
  },
  {
    accessorKey: "email",
    enableResizing:true,
    size:200, 
    header: ({ column }) => {
      return (
        <Button
          className="gap-2 flex"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          {column.getIsSorted() === "asc" ? (
            <ArrowUp size={16} />
          ) : (
            <ArrowDown size={16} />
          )}
        </Button>
      );
    },
    cell:({row}) => {
      return(<p className="focus-visible:outline-none focus-visible:border-none max-w-[30%]" contentEditable>
        {row.original.email}
      </p>)
    }
  },
  // {
  //   accessorKey: "latSeen",
  //   cell: ({ row }) => {
  //     const date = new Date(row.getValue("lastSeen"));
  //     const formatted = date.toLocaleDateString();
  //     return <div className=" font-medium">{formatted}</div>;
  //   },
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         className="gap-2 flex"
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         LastSeen
  //         {column.getIsSorted() === "asc" ? (
  //           <ArrowUp size={16} />
  //         ) : (
  //           <ArrowDown size={16} />
  //         )}
  //       </Button>
  //     );
  //   },
  // },

  {
    accessorKey: "lastSeen",
    header: "Last Seen",
    
    cell: ({ row }) => {
      const date = new Date(row.getValue("lastSeen"));
      const formatted = date.toLocaleDateString();
      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
             User Id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.name)}
            >
             User name
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.lastSeen)}
            >
             Last Seen
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
