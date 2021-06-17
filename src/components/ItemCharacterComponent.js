import React, { useEffect, useRef, useState } from "react";
import {
  ItemButton,
  ItemContainer,
  ItemContent,
  ItemText,
  ItemTitle,
} from "./styles/ItemCharacter.style";

export function ItemCharacterComponent({ item }) {
  const [toggleActive, setToggleActive] = useState(false);
  const itemRef = useRef();

  function isToggle() {
    setToggleActive(!toggleActive);
  }

  useEffect(() => {
    function isTarget(e) {
      if (!itemRef.current?.contains(e.target)) {
        setToggleActive(false);
      }
    }

    document.addEventListener("click", isTarget);
    return () => document.removeEventListener("click", isTarget);
  }, []);

  return (
    <ItemContainer className={toggleActive ? "active" : ""} ref={itemRef}>
      <img src={item.img} alt={item.portrayed} />

      <ItemButton onClick={isToggle} className={toggleActive ? "active" : ""}>
        <img src={process.env.PUBLIC_URL + "/images/fly.svg"} alt="icono mosca volando" />
      </ItemButton>

      {toggleActive && (
        <ItemContent>
          <ItemTitle>{item.name}</ItemTitle>
          <hr />
          <ItemText>
            <p>
              <span>Apodo:</span> {item.nickname}
            </p>
            <p>
              <span>Ocupación:</span> {item.occupation[0]}{" "}
              {item.occupation[1] ? `|``${item.occupation[1]}` : ""}
            </p>
            <p>
              <span>Estado:</span> {item.status}
            </p>
            <p>
              <span>Actor:</span> {item.portrayed}
            </p>
          </ItemText>
        </ItemContent>
      )}
    </ItemContainer>
  );
}
