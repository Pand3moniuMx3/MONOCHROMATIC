import { Outlet } from "react-router-dom";
import { useGuide } from "../context/GuideContext";
import Loader from "./Loader";
import Error from "./Error";

export default function Main() {
  const { status } = useGuide();

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;
  if (status === "ready") return <Outlet />;
}
