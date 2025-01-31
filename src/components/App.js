import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reactData from "../data/react.json";
import Homepage from "./Homepage";
import Page from "./Page";
import Category from "./Category";
import Layout from "./Layout";
import "../styles/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout reactData={reactData} />}>
          <Route index element={<Homepage reactData={reactData} />} />
          {reactData.map((category) => (
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
                <Route path={`${item.path}`} element={<Page data={item} />} />
              ))}
            </Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
