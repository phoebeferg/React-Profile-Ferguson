import React from "react";
import Project from "./project";
import "./portfolio.css";

function Portfolio() {
  const projects = [
    { title: "Project One", image: "https://tse2.mm.bing.net/th?id=OIP.KAzdOqH0FMY6pu5p6KerigHaFP&pid=Api&P=0&h=220", deployed: "#", github: "#" },
    { title: "Project Two", image: "https://tse3.mm.bing.net/th?id=OIP.o0-_5Yz2Vr32GtIPXUKTLQHaEo&pid=Api&P=0&h=220https://tse4.mm.bing.net/th?id=OIP.BXsxvnDMc7nQyCkgX5DgLwHaEK&pid=Api&P=0&h=220", deployed: "#", github: "#" },
    { title: "Project Three", image: "https://tse1.mm.bing.net/th?id=OIP.1l7O43iSPa_BLAABly88WAHaEo&pid=Api&P=0&h=220", deployed: "#", github: "#" },
    { title: "Project Four", image: "https://tse1.mm.bing.net/th?id=OIP.J9sfzSNX-OJxedkKslhaXAHaE7&pid=Api&P=0&h=220", deployed: "#", github: "#" },
    { title: "Project Five", image: "https://tse4.mm.bing.net/th?id=OIP.6nJ315sM9Pt3TCknur5ohAHaGl&pid=Api&P=0&h=220", deployed: "#", github: "#" },
    { title: "Project Six", image: "https://tse3.mm.bing.net/th?id=OIP.KFIrTqh72UAJQBKQOR90GQHaEK&pid=Api&P=0&h=220", deployed: "#", github: "#" },
  ];

  return (
    <section className="portfolio">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
