import React from "react";
import "./styles.scss";

export const SubscribeCard = () => {
  return (
    <div className="containerSubscribeCard">
      <p className="containerSubscribeCard--title">Subscribe to all news</p>
      <p className="containerSubscribeCard--subtitle">
        Never miss the latest updates.
      </p>
      <input
        className="containerSubscribeCard--email"
        type="email"
        placeholder="Email address"
      />
      <button className="containerSubscribeCard--signmeup">Sign me up</button>
    </div>
  );
};
