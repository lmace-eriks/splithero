import React, { ReactChildren, useEffect, useState } from "react";
// import { canUseDOM } from "vtex.render-runtime";

// Styles
import styles from "./styles.css";

interface SplitHeroProps {

}

const SplitHero: StorefrontFunctionComponent<SplitHeroProps> = ({ }) => {

  useEffect(() => {

  })

  return (
    <h1>Hello!</h1>
  )

}

SplitHero.schema = {
  title: "Time Banner",
  description: "",
  type: "object",
  properties: {

  }
}

export default SplitHero;