import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";

export default function Generator() {
  return (
    <section className={style.generator}>
      <Container>
        <div className={style.main__box}>
          <div className={style.inner__box}></div>
        </div>
      </Container>
    </section>
  );
}
