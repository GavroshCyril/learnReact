import { useState } from "react";
import "./App.css";
import { UserInfo } from "./homework-1/UserInfo";
import { Title } from "./homework-1/Title";
import { Alert } from "./homework-1/Alert";
import { BurgerMenu } from "./homework-1/BurgerMenu";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <Title text="Homework 1" />
      <UserInfo fullNickname="Cyril Gavrosh" />

      <div className="hamburger" onClick={toggleHamburger}>
        <BurgerMenu isOpen={hamburgerOpen} />
      </div>

      <div className="alers-container">
        <Alert
          type="success"
          message="Это успешное сообщение!"
          icon={<i className="fas fa-check-circle"></i>}
        />
        <Alert
          type="error"
          message="Произошла ошибка!"
          icon={<i className="fas fa-exclamation-circle"></i>}
        />
        <Alert
          type="warning"
          message="Это предупреждение!"
          icon={<i className="fas fa-exclamation-triangle"></i>}
        />
        <Alert
          type="info"
          message="Это информационное сообщение!"
          icon={<i className="fas fa-info-circle"></i>}
        />
        <Alert
          type="reminder"
          message="Напоминание: сделайте это!"
          icon={<i className="fas fa-bell"></i>}
        />
      </div>
    </>
  );
}

export default App;
