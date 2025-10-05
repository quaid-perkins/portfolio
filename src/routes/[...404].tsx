import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

// not found 404 error page
const NotFound = () => {
  return (
    <>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <main></main>
    </>
  );
};

export default NotFound;
