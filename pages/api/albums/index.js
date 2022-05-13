import { getSession } from "next-auth/react";

import dbConnect from "@/lib/dbConnect";
import Album from "@/models/albumModel";

export default async function handler(req, res) {
  const { method } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const albums = await Album.find({});
        res.status(200).json(albums);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      if (session) {
        try {
          const albums = await Album.create(
            req.body
          ); /* create a new model in the database */
          res.status(201).json(albums);
        } catch (error) {
          res.status(400).json(error);
        }
        break;
      } else {
        res.status(401).json({ error: "Please Try Again Later" });
      }

    default:
      res.status(400).json({ success: false });
      break;
  }
}
