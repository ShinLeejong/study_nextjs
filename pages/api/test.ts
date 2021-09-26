import { NextApiRequest, NextApiResponse } from "next";

export default function Test(req: NextApiRequest, res: NextApiResponse): void {
  res.send("Hi there!");
}
