import dbConnect from "@/lib/dbConnect";
import Event from "@/models/eventModel";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const getUpcomingEvents = await Event.updateMany(
          { date: { $lt: Date.now() } },
          { $set: { isOutdated: true } }
        );
        const events = await Event.find({ isOutdated: 0 }).sort({ date: 1 });
        res.status(200).json(events);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
