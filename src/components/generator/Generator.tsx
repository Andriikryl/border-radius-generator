"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { InputFrame } from "../inputFrame/InputFrame";

export default function Generator() {
  const [generatorVolume, setGeneratorVolume] = React.useState(79);
  const [generatorVolumeSecond, setGeneratorVolumeSecond] = React.useState(71);
  const [generatorVolumeThree, setGeneratorVolumeThree] = React.useState(63);
  const [generatorVolumeFour, setGeneratorVolumeFour] = React.useState(100);
  const [generatorVolumeE, setGeneratorVolumeE] = React.useState(100);
  const [generatorVolumeF, setGeneratorVolumeF] = React.useState(100);
  const [generatorVolumeG, setGeneratorVolumeG] = React.useState(100);
  const [generatorVolumeH, setGeneratorVolumeH] = React.useState(100);

  const handleVolumeChange = (newVolume: React.SetStateAction<number>) => {
    setGeneratorVolume(newVolume);
  };
  const handleVolumeChangeSecond = (
    newVolume: React.SetStateAction<number>
  ) => {
    setGeneratorVolumeSecond(newVolume);
  };

  const handleVolumeChangeThree = (newVolume: React.SetStateAction<number>) => {
    setGeneratorVolumeThree(newVolume);
  };
  const handleVolumeChangeFour = (newVolume: React.SetStateAction<number>) => {
    setGeneratorVolumeFour(newVolume);
  };
  const handleVolumeChangeE = (newVolume: React.SetStateAction<number>) => {
    setGeneratorVolumeE(newVolume);
  };

  const handleVolumeChangeF = (newVolume: React.SetStateAction<number>) => {
    setGeneratorVolumeF(newVolume);
  };
  const handleVolumeChangeG = (newVolume: React.SetStateAction<number>) => {
    setGeneratorVolumeG(newVolume);
  };
  const handleVolumeChangeH = (newVolume: React.SetStateAction<number>) => {
    setGeneratorVolumeH(newVolume);
  };

  return (
    <section className={style.generator}>
      <Container>
        <div className={style.flex__group}>
          <div className={style.form__group}>
            <InputFrame
              value={generatorVolume}
              set={setGeneratorVolume}
              min={0}
              max={100}
              rangeLabel="a-range"
              numberLabel="a-number"
            ></InputFrame>
            <InputFrame
              value={generatorVolumeSecond}
              set={setGeneratorVolumeSecond}
              min={0}
              max={100}
              rangeLabel="b-range"
              numberLabel="b-number"
            ></InputFrame>
            <InputFrame
              value={generatorVolumeThree}
              set={setGeneratorVolumeThree}
              min={0}
              max={100}
              rangeLabel="c-range"
              numberLabel="c-number"
            ></InputFrame>
            <InputFrame
              value={generatorVolumeFour}
              set={setGeneratorVolumeFour}
              min={0}
              max={100}
              rangeLabel="d-range"
              numberLabel="d-number"
            ></InputFrame>
          </div>
          <div className={style.main__box}>
            <div
              style={{
                borderRadius: `${generatorVolume}% ${generatorVolumeSecond}% ${generatorVolumeThree}% ${generatorVolumeFour}%  / ${generatorVolumeE}% ${generatorVolumeF}% ${generatorVolumeG}% ${generatorVolumeH}%`,
              }}
              className={style.inner__box}
            ></div>
          </div>
          <div className={style.form__group}>
            <InputFrame
              value={generatorVolumeE}
              set={setGeneratorVolumeE}
              min={0}
              max={100}
              rangeLabel="e-range"
              numberLabel="e-number"
            ></InputFrame>
            <InputFrame
              value={generatorVolumeF}
              set={setGeneratorVolumeF}
              min={0}
              max={100}
              rangeLabel="f-range"
              numberLabel="f-number"
            ></InputFrame>
            <InputFrame
              value={generatorVolumeG}
              set={setGeneratorVolumeG}
              min={0}
              max={100}
              rangeLabel="g-range"
              numberLabel="g-number"
            ></InputFrame>
            <InputFrame
              value={generatorVolumeH}
              set={setGeneratorVolumeH}
              min={0}
              max={100}
              rangeLabel="h-range"
              numberLabel="h-number"
            ></InputFrame>
          </div>
        </div>
      </Container>
    </section>
  );
}
