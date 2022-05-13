import fs from "fs";
import path from "path";
import { File } from "formidable";
import Formidable from "formidable-serverless";

var mv = require("mv");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function uploadFormFiles(req, res) {
  return new Promise(async (resolve, reject) => {
    const form = new Formidable.IncomingForm({
        multiples: true,
        uploadDir: process.env.ROOT + "/public/test",
        keepExtensions: true,
      }),
      files = [],
      fields = [],
      addedFilePath = [];

    form
      .on("field", function (field, value) {
        fields.push([field, value]);
      })
      .on("fileBegin", function (name, file) {
        //rename the incoming file to the file's name
        file.path = form.uploadDir + "/" + file.name;
        console.log(file.name);
      })

      .on("file", (field, file) => {
        // const data = fs.readFileSync(file.path);
        // fs.writeFileSync(`public/test/${file.name}`, data);
        // fs.unlinkSync(file.path);
        // console.log(file.path);
        // console.log(file.name);
        // console.log(file);
        // imgArray.push(file.name);
        files.push([field, file]);
        addedFilePath.push({ url: `/test/${file.name}` });
        console.log(file.path);
      })
      .on("aborted", () => {
        reject(res.status(500).send("Aborted"));
      })
      .on("end", () => {
        resolve(res.status(200).send(addedFilePath));
        console.log(addedFilePath);
        // console.log(imgArray);
        // console.log("-> upload done");
        // imgArray.length = 0;
      });

    form.parse(req);
  });
}
