import { useSelector } from "react-redux";

export const useRehydrated = () => {
  const isRehydrated = useSelector((state) =>
    Boolean(state["_persist"]?.rehydrated)
  );

  const listOfUsers = useSelector((state) => state?.users?.users);

  return [isRehydrated, listOfUsers || []];
};
