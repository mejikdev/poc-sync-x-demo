import { Agent } from "../../features/agent";
import { Layout } from "../../layout/Layout";

const EmployeePage = () => {
  return <Agent />;
};

EmployeePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default EmployeePage;
