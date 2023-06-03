import { useRef } from "react";

export function App() {
  const cardCodeInputRef = useRef();
  const cardExpirationInputRef = useRef();

  function handleCardCodeChange(e) {
    if (e.target.value.length >= 5) {
      cardExpirationInputRef.current.focus();
    }
  }

  function handleCardNumberChange(e) {
    if (e.target.value.length >= 5) {
      cardCodeInputRef.current.focus();
    }
  }
  return (
    <>
      <div>
        <label>Credit card number</label>
        <input
          onChange={handleCardNumberChange}
          type="number"
          name="creditCardNumber"
        />
      </div>
      <div>
        <label>Secret code</label>
        <input
          ref={(reference) => {
            cardCodeInputRef.current = reference;
          }}
          onChange={handleCardCodeChange}
          type="number"
          name="creditCardCode"
        />
      </div>
      <div>
        <label>Expiration date</label>
        <input
          ref={cardExpirationInputRef}
          type="text"
          name="creditCardExpiration"
        />
      </div>
    </>
  );
}
