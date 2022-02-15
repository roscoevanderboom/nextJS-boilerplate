import DefaultPage from "../components/Pages/DefaultPage";
import { DefaultLink } from "../components/Links";
import Script from "next/script";

export default function HomePage() {
  return (
    <DefaultPage className="pt-5 container">
      <h1>Welcome to my NextJS Bootstrap 5 boilerplate</h1>
      <p>
        This boilerplate contains a{" "}
        <DefaultLink href="/settings">settings page</DefaultLink> and a{" "}
        <DefaultLink href="/profile">profile page</DefaultLink>.
      </p>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      />
    </DefaultPage>
  );
}
