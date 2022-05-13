import fs from "fs";
import { IncomingForm } from "formidable";

var mv = require("mv");

export const config = {
  api: {
    bodyParser: false,
  },
};

let addedFile = "";

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const data = await new Promise((resolve, reject) => {
          const form = new IncomingForm();

          form.parse(req, (err, field, files) => {
            if (err) return reject(err);
            var oldPath = files.file.filepath;
            const fileName = files.file.originalFilename;
            var newPath = `./public/${files.file.originalFilename}`;
            var finalPath = `/${files.file.originalFilename}`;
            mv(oldPath, newPath, function (err) {
              if (err) throw err;
              res.end();
            });
            addedFile = fileName;
            res.json(finalPath);
          });
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        fs.unlink(`./public/${addedFile}`, function (err) {
          if (err) throw err;
          // if no error, file has been deleted successfully
          console.log("File deleted!");
        });

        res.status(200).json("File deleted!");
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
