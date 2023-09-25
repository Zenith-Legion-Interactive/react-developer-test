import { useRouteError } from "react-router-dom";


interface ErrorObject {
    data?: string | null,
    status?: number,
    statusText?: string,
    message?: string,
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const errorObj: ErrorObject = new Object(error); 
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{ errorObj.statusText || errorObj.message}</i>
      </p>
    </div>
  );
}