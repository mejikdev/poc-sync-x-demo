import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import * as React from "react";

export const QueryProvider = ({ children }) => {
  const queryClient = React.useRef(
    new QueryClient({
      queryCache: new QueryCache({}),
      mutationCache: new MutationCache({}),
    })
  );
  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
    </QueryClientProvider>
  );
};
