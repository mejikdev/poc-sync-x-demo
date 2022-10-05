import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export function CustomTable({ columns, rows, pageSize }) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={pageSize ?? 10}
      disableSelectionOnClick
      getRowId={(row) => row._id}
      isCellEditable={false}
      rowsPerPageOptions={[5]}
    />
  );
}
