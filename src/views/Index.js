import React from "react";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import IndexFooter from "components/Footers/IndexFooter.js";
import SectionGetRegistered from "views/SectionGetRegistered.js";
import SectionServices from "views/SectionServices.js";
import SectionAboutus from "views/SectionAboutus.js";
import SectionTestimonial from "views/SectionTestimonial.js";
import SectionNews from "views/SectionNews.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main main-raised">
        <SectionServices />
        <SectionAboutus />
        <SectionGetRegistered />
        <SectionTestimonial />
        <SectionNews />
      </div>
      <IndexFooter />
    </>
  );
}

export default Index;