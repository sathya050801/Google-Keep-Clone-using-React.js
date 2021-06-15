import React from "react";

function Footer() {
  const currrentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyrigths {currrentYear}</p>
    </footer>
  );
}

export default Footer;
