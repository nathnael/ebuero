import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// index sections
import SectionGetRegistered from "views/SectionGetRegistered.js";
import SectionServices from "views/SectionServices.js";
import SectionAboutus from "views/SectionAboutus.js";

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
        
      </div>
    </>
  );
}

export default Index;