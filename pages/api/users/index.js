import dbConnect from "@/lib/dbConnect";
import User from "@/models/userModel";
import generateToken from "@/utils/generateToken";

export default async function handler(req, res) {
  const { method } = req;

  const { email, password } = req.body;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
          res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
          });
        } else {
          res.status(401).json({ msg: "Invalid email or password" });
        }
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
