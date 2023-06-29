import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import EditPost from "./EditPost";
import { DataProvider } from "../context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
            </Route>

            <Route path="/edit/:id" element={<EditPost />}></Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
