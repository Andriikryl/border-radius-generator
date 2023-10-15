"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";

function Range({ volume, onVolumeChange }) {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="volume-slider">Audio volume:</label>
        <input
          type="range"
          id="volume-slider"
          min={0}
          max={100}
          value={volume}
          onChange={(event) => {
            onVolumeChange(event.target.value);
          }}
        />
      </form>

      <p>
        <strong>Current value:</strong>
        {volume}
      </p>
    </>
  );
}

export default function Generator({ volume }) {
  const [generatorVolume, setGeneratorVolume] = React.useState(volume);

  const handleVolumeChange = (newVolume) => {
    setGeneratorVolume(newVolume);
  };

  return (
    <section className={style.generator}>
      <Container>
        <div className={style.main__box}>
          <div
            style={{
              borderRadius: `${generatorVolume}% 71% 63% 100% / 39% 66% 100% 86%`,
            }}
            className={style.inner__box}
          ></div>
        </div>
        <Range volume={generatorVolume} onVolumeChange={handleVolumeChange} />
      </Container>
    </section>
  );
}
