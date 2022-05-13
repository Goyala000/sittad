import { getSession } from "next-auth/react";

import dbConnect from "@/lib/dbConnect";
import News from "@/models/newsModel";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const singleNews = await News.findById(id);
        if (!singleNews) {
          return res.status(404).json("News not found");
        }
        res.status(200).json(singleNews);
      } catch (error) {
        res.status(400).json({ message: "Please Try Again Later" });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const singleNews = await News.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!singleNews) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(singleNews);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      if (session) {
        try {
          const deleteSingleNews = await News.deleteOne({ _id: id });
          if (!deleteSingleNews) {
            return res.status(404).json("News not found");
          }
          res.json({ message: "News Deleted Successfully" });
        } catch (error) {
          res.status(400).json({ message: "Please Try Again Later" });
        }
        break;
      } else {
        res.status(401).json({ error: "Please Try Again Later" });
      }
    default:
      res.status(400).json({ error: "Please Try Again Later" });
      break;
  }
}
