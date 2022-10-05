import { MicrogenClient } from "microgen-v3-sdk";

export const microgen = new MicrogenClient({
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  url: "https://api.stagingv3.microgen.id",
});
