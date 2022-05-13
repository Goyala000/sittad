import dbConnect from "@/lib/dbConnect";
import Album from "@/models/albumModel";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const albums = await Album.findById(id);
        if (!albums) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(albums);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const singleAlbum = await Album.findById(id);
        if (singleAlbum) {
          await singleAlbum.remove();
          res.json({ message: "Album Deleted Successfully" });
        } else {
          res.status(404);
          throw new Error("Album not found");
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
