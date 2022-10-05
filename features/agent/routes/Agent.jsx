import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import * as React from "react";
import { useGetAgents } from "../../../api/features/agent/hooks/useGetAgents";

export const Agent = () => {
  const router = useRouter();
  const { data } = useGetAgents();

  const rows = React.useMemo(() => {
    if (data?.length) {
      return data;
    }

    return [];
  }, [data]);

  return (
    <Stack
      sx={{
        p: 4,
        flex: 1,
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={2}>
        {rows.map((item) => (
          <Grid xs={4} key={item._id}>
            <Card
              sx={{ display: "flex", cursor: "pointer" }}
              onClick={() => {
                router.push(`/agent/${item._id}`);
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={"images/user.png"}
                alt="Avatar"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {item.customers.length} Customers
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
