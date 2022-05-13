import { getSession } from "next-auth/react";

import dbConnect from "@/lib/dbConnect";
import Event from "@/models/eventModel";

export default async function handler(req, res) {
  const { method } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    case "GET":
      if (session) {
        try {
          await Event.updateMany(
            { date: { $lt: Date.now() } },
            { $set: { isOutdated: true } }
          );
          const events = await Event.find({}).sort({ isOutdated: 0, date: 1 });
          res.status(200).json(events);
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      } else {
        res.status(401).json({ error: "Please Try Again Later" });
      }

    case "POST":
      if (session) {
        const { title, date, description } = req.body;
        try {
          const events = await Event.create({
            title,
            description,
            date,
          }); /* create a new model in the database */
          if (events) {
            res.status(201).json({
              _id: events._id,
              title: events.title,
              description: events.description,
              date: events.date,
            });
          } else {
            res.status(400).json({ message: "Invalid Events Fields" });
          }
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
