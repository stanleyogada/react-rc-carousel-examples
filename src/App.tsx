import { SliderThemeProvider } from "react-rc-carousel";
import Hero from "./Hero";
import Products from "./Products";

function App() {
  return (
    <div
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <Hero />
      <br />
      <br />
      <Hero />
      <br />
      <br />
      <SliderThemeProvider
        props={{
          nSlidePerView: 2,
          isAutoSlide: false,
          breakpoints: [
            { width: 391, nSlidePerView: 1 },
            { width: 592, nSlidePerView: 2 },
            { width: 830, nSlidePerView: 3 },
            { width: 920, nSlidePerView: 4 },
          ],
        }}
      >
        <Products heading="Featured Products" />
        <Products heading="Deals For June" />
      </SliderThemeProvider>
      <br />
      <br />
      <SliderThemeProvider
        props={{
          nSlidePerView: 1,
          // isShowDots: false,
          breakpoints: [
            { width: 391, nSlidePerView: 1 },
            { width: 592, nSlidePerView: 2 },
            { width: 830, nSlidePerView: 3 },
            { width: 920, nSlidePerView: 4 },
          ],
          theme: {
            backgroundColor: "#ffaaaa",
            color: "red",
          },
        }}
      >
        <Products heading="Top Products" />
        <Products heading="New Products" />
        <Products heading="Hot Popular" />
      </SliderThemeProvider>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
