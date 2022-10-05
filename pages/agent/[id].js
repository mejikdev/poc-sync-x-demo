import * as React from "react";
import { AgentDetail } from "../../features/agent";

import { Layout } from "../../layout/Layout";

const AgentDetailPage = () => {
  return <AgentDetail />;
};

AgentDetailPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default AgentDetailPage;
