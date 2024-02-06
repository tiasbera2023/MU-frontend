// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  nresultatename: any[];
};
const SEARCH_API = "https://api.kvk.nl/api/v1/zoeken";
const API_KEY = "l739b398f95f7b4517916d92dcfeae974b";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const query = req.query as {};
    const queryParams = new URLSearchParams(query).toString();
    const response = await fetch(`${SEARCH_API}?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apikey: API_KEY,
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err: any) {
    console.error(err);
    return false;
  }
}
