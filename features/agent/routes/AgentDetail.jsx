import { Box, Container, Stack, styled, Typography } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useGetAgentById } from "../../../api/features/agent/hooks/useGetAgentById";
import { useGetEmployeeByAgent } from "../../../api/features/employee/useGetEmployeeByAgent";
import { CustomTable } from "../../../components/Table";

const columns = [
  { field: "_id", headerName: "ID", width: 225 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "address",
    headerName: "Adress",
    flex: 1,
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
  },
  {
    field: "zip",
    headerName: "Zip",
    flex: 1,
  },
];

const Image = styled("img")({});

export const AgentDetail = React.memo(function EmployeeDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: dataAgent } = useGetAgentById({ id });
  const { data: dataEmployee } = useGetEmployeeByAgent({ agent: dataAgent });

  const employee = React.useMemo(() => {
    if (dataEmployee?.length) {
      return dataEmployee[0];
    }

    return null;
  }, [dataEmployee]);

  return (
    <Container
      sx={{
        py: 4,
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack direction="row" spacing={3}>
        <Box
          sx={{
            width: "150px",
            height: "150px",
          }}
        >
          <Image
            sx={{
              width: "100%",
              height: "100%",
            }}
            src="/images/user.png"
            alt="user"
          />
        </Box>
        <Stack sx={{ mb: 3 }} spacing={1}>
          <Stack direction="row">
            <Typography sx={{ width: "150px" }} variant="h6" fontWeight="700">
              Name
            </Typography>
            <Typography variant="h6">{` ${employee?.name ?? "-"}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography sx={{ width: "150px" }} variant="h6" fontWeight="700">
              Title
            </Typography>
            <Typography variant="h6">{` ${employee?.title ?? "-"}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography sx={{ width: "150px" }} variant="h6" fontWeight="700">
              Department
            </Typography>
            <Typography variant="h6">
              {` ${employee?.department ?? "-"}`}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography sx={{ width: "150px" }} variant="h6" fontWeight="700">
              Salary
            </Typography>
            <Typography variant="h6">
              {`Rp. ${employee?.salary ?? "-"}`}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography
        sx={{ width: "150px", mt: 2, mb: 1 }}
        variant="h6"
        fontWeight="700"
      >
        Customers
      </Typography>
      <Box sx={{ height: "371px" }}>
        <CustomTable
          columns={columns}
          rows={dataAgent?.customers ?? []}
          pageSize={5}
        />
      </Box>
    </Container>
  );
});
