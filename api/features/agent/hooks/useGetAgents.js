import { useQuery } from "@tanstack/react-query";

import { microgen } from "../../../../lib/microgen";

export const getAgents = () =>
  microgen
    .service("agents")
    .find({
      lookup: "*",
    })
    .then((res) => res.data);

export const useGetAgents = () => useQuery(["getAgents"], () => getAgents());
