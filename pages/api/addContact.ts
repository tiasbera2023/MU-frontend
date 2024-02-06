// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { API, API_ROOT_URL } from "@/config";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const body = req.body;
    const response = await fetch(`${API_ROOT_URL}${API.addContact}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body,
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err: any) {
    console.error(err);
    res.status(500);
  }
}
