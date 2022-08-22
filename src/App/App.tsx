import "./App.scss";
import Main from "../pages/main/Main";
import SearchResults from "../pages/searchResults/SearchResults";
import CardContent from "../pages/cardContent/CardContent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Main />} />
        <Route path="search-result/" element={<SearchResults />} />
        <Route path="card-content/:id" element={<CardContent />} />
      </Routes>
    </div>
  );
}

export default App;
