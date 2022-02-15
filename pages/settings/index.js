import DefaultPage from "../../components/Pages/DefaultPage";
import { DefaultLink } from "../../components/Links";
export default function Settings(params) {
  return (
    <DefaultPage>
      <h2>Settings</h2>
      <DefaultLink href="/">
        <h2>Home</h2>
      </DefaultLink>
    </DefaultPage>
  );
}
