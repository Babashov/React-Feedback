import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import AboutIconLink from "./AboutIconLink";
import AboutPage from "./Pages/AboutPage";
import {FeedbackProvider} from "./Context/FeedbackContext";
import Header from "./Header";
import FeedbackForm from "./FeedbackForm";
import FeedbackStats from "./FeedbackStats";
import FeedbackList from "./FeedbackList";

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header bgColor={"red"} textColor={"white"} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats/>
                  <FeedbackList/>
                </>
              }
            />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
