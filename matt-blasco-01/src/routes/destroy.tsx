import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";
import { ParamsObject } from "../types";

export async function action({ params }: ParamsObject) {
  await deleteContact(params.contactId);
  return redirect("/");
}