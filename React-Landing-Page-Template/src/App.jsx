import { useState, useEffect } from "react";
import { Navigation } from "./components/landing-page/navigation";
import { Header } from "./components/landing-page/header";
import { Features } from "./components/landing-page/features";
import { About } from "./components/landing-page/about";
import { Services } from "./components/landing-page/services";
import { Gallery } from "./components/landing-page/gallery";
import { Testimonials } from "./components/landing-page/testimonials";
import { Team } from "./components/landing-page/Team";
import { Contact } from "./components/landing-page/contact";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import StoreService from "../src/services/StoreService";
import RenderOnAnonymous from "./components/authentication/RenderOnAnonymous";
import JsonData from "./components/landing-page/data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import RenderOnAuthenticated from "./components/authentication/RenderOnAuthenticated";
import BookBox from "./components/dashboard/BookBox"



const store = StoreService.setup();

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <RenderOnAnonymous>
          <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery data={landingPageData.Gallery} />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
          </div>
        </RenderOnAnonymous>
        <RenderOnAuthenticated>
          <BookBox />
        </RenderOnAuthenticated>
      </BrowserRouter>
    </Provider>

  );
};

export default App;
