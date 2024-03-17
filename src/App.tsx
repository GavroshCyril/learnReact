import "./App.scss";
import { LargeCard } from "./components";
import astronoutImage from "./assets/astronout.jpg";

function App() {
  const cardInformation = {
    date: "January 1, 2021",
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    description:
      "Astronauts Kayta Barron and Rale Char fioated out of the international Space Station airlock for a spacewalk Tuesday, Instaling brackets and struts to support new solar arrays to upgrade the research tabs power system ci the same day that cremate Mark Vande He marked his 341st day in orbit, a UIS, record for a singie spacelight.",
    imageUrl: astronoutImage,
  };

  return (
    <div className="" style={{ margin: "16px" }}>
      <LargeCard
        date={cardInformation.date}
        title={cardInformation.title}
        description={cardInformation.description}
        image={cardInformation.imageUrl}
      />
    </div>
  );
}

export default App;
