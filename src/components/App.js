import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useGuide } from "../context/GuideContext";
import Loader from "./Loader";
import "../styles/App.css";
const Homepage = lazy(() => import("./Homepage"));
const Layout = lazy(() => import("./Layout"));
const Category = lazy(() => import("./Category"));
const Page = lazy(() => import("./Page"));

export default function App() {
  const { data } = useGuide();

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          {data.map((category) => (
            <Route
              key={category.id}
              path={`${category.path}`}
              element={<Category />}
            >
              <Route
                index
                element={<Navigate to={`${category.items[0].path}`} />}
              />
              {category.items.map((item) => (
                <Route
                  key={item.path}
                  path={`${item.path}`}
                  element={<Page data={item} />}
                />
              ))}
            </Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
