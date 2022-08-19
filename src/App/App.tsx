import "./App.scss";
import Main from "../pages/Main/Main";
import SearchResults from "../pages/Search-results/Search-results";
import CardContent from "../pages/Card-content/Card-content";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Main />} />
        <Route path="searchResult/:" element={<SearchResults />} />
        <Route path="cardContent/:id" element={<CardContent />} />
      </Routes>
    </div>
  );
}

export default App;
