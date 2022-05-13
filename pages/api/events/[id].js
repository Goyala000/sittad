import dbConnect from "@/lib/dbConnect";
import Event from "@/models/eventModel";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const event = await Event.findById(id);
        if (!event) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(event);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const singleEvent = await Event.findById(id);
        if (singleEvent) {
          await singleEvent.remove();
          res.json({ message: "Events Deleted Successfully" });
        } else {
          res.status(404);
          throw new Error("Event not found");
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
