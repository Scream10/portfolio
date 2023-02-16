import React from "react";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const Card = () => {
    return (
      <div>
        <div>
          <div>Image</div>
          <div>
            <div>Nom Prénom</div>
            <div>Profession</div>
          </div>
        </div>
        <div>message</div>
      </div>
    );
  };

  return (
    <div>
      <h2>They trust me</h2>
      <div className={styles.container}>
        {[1, 2, 3].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
