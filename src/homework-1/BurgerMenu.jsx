export const BurgerMenu = ({ isOpen }) => {
  return (
    <>
      <div className="burger-menu">
        <div className="burger-menu__line burger-menu__line--top"></div>
        <div className="burger-menu__line burger-menu__line--middle"></div>
        <div className="burger-menu__line burger-menu__line--bottom"></div>
      </div>

      <style jsx>{`
        .burger-menu__line--top {
          transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
        }

        .burger-menu__line--middle {
          opacity: ${isOpen ? "0" : "1"};
        }

        .burger-menu__line--bottom {
          transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
        }
      `}</style>
    </>
  );
};
