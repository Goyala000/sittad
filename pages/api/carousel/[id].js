import dbConnect from "@/lib/dbConnect";
import Carousel from "@/models/carouselModel";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "DELETE" /* Delete a model by its ID */:
      try {
        const singleCarousel = await Carousel.findById(id);
        if (singleCarousel) {
          await singleCarousel.remove();
          res.json({ message: "Carousel Deleted Successfully" });
        } else {
          res.status(404);
          throw new Error("Carousel not found");
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    default:
      res.status(400).json({ msg: "Something went wrong" });
      break;
  }
}
