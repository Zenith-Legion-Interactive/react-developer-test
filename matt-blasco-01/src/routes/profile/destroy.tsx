import { redirect } from "react-router-dom";
import { deleteUser } from "../../api-calls";
import { ParamsObject } from "../../types";

export async function action({ params }: ParamsObject) {
  await deleteUser(params.userId);
  return redirect("/");
}