import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const { id } = req.query;

  const movie = await db
    .collection("movies")
    .find({ _id: ObjectId(id) })
    .next();

  res.json(movie);
};
