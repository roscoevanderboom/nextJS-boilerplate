import Navbar from "../Navbar";
export default function DefaultPage({ children, className }) {
  return (
    <>
      <Navbar />
      <div className={className ? className : "container"}>{children}</div>
    </>
  );
}
