import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
     <div className="text-center" id="error-page">
      <h1 className="font-bold text-5xl">404</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText ||error.message}</i>
      </p>
    </div>
  );
}