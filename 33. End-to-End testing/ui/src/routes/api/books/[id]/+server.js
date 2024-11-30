import { books } from "../book-data.js"
import { json } from "@sveltejs/kit";

export const DELETE = async ({ params }) => {
  let id = Number(params.id);
  const index = books.findIndex(item => item.id === id);
  if (index !== -1) {
    books.splice(index, 1); // Mutating the array in place
    return json({ message: "Successfully deleted" });
  } else {
    return json({ error: "Book not found" }, { status: 404 });
  }
};