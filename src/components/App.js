import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import Page from "./Page";
import Category from "./Category";
import Layout from "./Layout";
import "../styles/App.css";
import { useGuide } from "../context/GuideContext";

export default function App() {
  const { data } = useGuide();

  return (
    <BrowserRouter>
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
