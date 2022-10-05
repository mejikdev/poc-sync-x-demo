import { useQuery } from "@tanstack/react-query";

import { microgen } from "../../../../lib/microgen";

export const getAgentsById = ({ id }) =>
  microgen
    .service("agents")
    .getById(id, {
      lookup: "*",
    })
    .then((res) => res.data);

export const useGetAgentById = ({ id }) =>
  useQuery(["getAgentByUd", id], () => getAgentsById({ id }));
