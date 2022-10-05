import { useQuery } from "@tanstack/react-query";
import { microgen } from "../../../lib/microgen";

export const getEmployeeByAgent = ({ agent }) =>
  microgen
    .service("employees")
    .find({
      where: {
        name: agent.name,
      },
    })
    .then((res) => res.data);

export const useGetEmployeeByAgent = ({ agent }) =>
  useQuery(["getEmployeeByAgent"], () => getEmployeeByAgent({ agent }), {
    enabled: !!agent,
  });
