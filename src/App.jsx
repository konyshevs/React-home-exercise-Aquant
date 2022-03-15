import "./App.css";
import SearchPanel from "./components/search-panel/search-panel.component";
import ArticlesList from "./components/articles-list-page/articles-list.component";

function App() {
  return (
    <div className="App">
      <SearchPanel />
      <ArticlesList />
    </div>
  );
}

export default App;
