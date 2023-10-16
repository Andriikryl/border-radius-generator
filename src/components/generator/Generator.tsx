"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { InputFrame } from "../inputFrame/InputFrame";

export default function Generator() {
  const [generatorVolume, setGeneratorVolume] = React.useState(70);
  const [generatorVolumeSecond, setGeneratorVolumeSecond] = React.useState(30);
  const [generatorVolumeThree, setGeneratorVolumeThree] = React.useState(30);
  const [generatorVolumeFour, setGeneratorVolumeFour] = React.useState(70);
  const [generatorVolumeE, setGeneratorVolumeE] = React.useState(60);
  const [generatorVolumeF, setGeneratorVolumeF] = React.useState(40);
  const [generatorVolumeG, setGeneratorVolumeG] = React.useState(60);
  const [generatorVolumeH, setGeneratorVolumeH] = React.useState(40);

  const handleVolumeChange = (newVolume: number) => {
    setGeneratorVolume(newVolume);
  };
  const handleVolumeChangeSecond = (newVolume: number) => {
    setGeneratorVolumeSecond(newVolume);
  };

  const handleVolumeChangeThree = (newVolume: number) => {
    setGeneratorVolumeThree(newVolume);
  };
  const handleVolumeChangeFour = (newVolume: number) => {
    setGeneratorVolumeFour(newVolume);
  };
  const handleVolumeChangeE = (newVolume: number) => {
    setGeneratorVolumeE(newVolume);
  };

  const handleVolumeChangeF = (newVolume: number) => {
    setGeneratorVolumeF(newVolume);
  };
  const handleVolumeChangeG = (newVolume: number) => {
    setGeneratorVolumeG(newVolume);
  };
  const handleVolumeChangeH = (newVolume: number) => {
    setGeneratorVolumeH(newVolume);
  };
  const generateRandomBorderRadius = () => {
    const getRandomValue = () => Math.floor(Math.random() * 101); // Random value between 0 and 100
    setGeneratorVolume(getRandomValue());
    setGeneratorVolumeSecond(getRandomValue());
    setGeneratorVolumeThree(getRandomValue());
    setGeneratorVolumeFour(getRandomValue());
    setGeneratorVolumeE(getRandomValue());
    setGeneratorVolumeF(getRandomValue());
    setGeneratorVolumeG(getRandomValue());
    setGeneratorVolumeH(getRandomValue());
  };

  return (
    <section className={style.generator}>
      <Container>
        <div className={style.flex__group}>
          <div className={style.form__group}>
            <InputFrame
              className={style.form__a}
              value={generatorVolume}
              set={setGeneratorVolume}
              min={0}
              max={100}
              rangeLabel="a-range"
              numberLabel="a-number"
            ></InputFrame>
            <InputFrame
              className={style.form__b}
              value={generatorVolumeSecond}
              set={setGeneratorVolumeSecond}
              min={0}
              max={100}
              rangeLabel="b-range"
              numberLabel="b-number"
            ></InputFrame>
            <InputFrame
              className={style.form__c}
              value={generatorVolumeThree}
              set={setGeneratorVolumeThree}
              min={0}
              max={100}
              rangeLabel="c-range"
              numberLabel="c-number"
            ></InputFrame>
            <InputFrame
              className={style.form__d}
              value={generatorVolumeFour}
              set={setGeneratorVolumeFour}
              min={0}
              max={100}
              rangeLabel="d-range"
              numberLabel="d-number"
            ></InputFrame>
          </div>
          <div>
            <div className={style.main__box}>
              <div
                style={{
                  borderRadius: `${generatorVolume}% ${generatorVolumeSecond}% ${generatorVolumeThree}% ${generatorVolumeFour}%  / ${generatorVolumeE}% ${generatorVolumeF}% ${generatorVolumeG}% ${generatorVolumeH}%`,
                }}
                className={style.inner__box}
              ></div>
              <div
                className={style.a__description}
                style={{ width: `${generatorVolume}%` }}
              >
                <span>a</span>
              </div>
              <div
                className={style.b__description}
                style={{ width: `${generatorVolumeSecond}%` }}
              >
                <span>b</span>
              </div>
              <div
                className={style.e__description}
                style={{ height: `${generatorVolumeE}%` }}
              >
                <span>e</span>
              </div>
              <div
                className={style.h__description}
                style={{ height: `${generatorVolumeH}%` }}
              >
                <span>h</span>
              </div>
              <div
                className={style.d__description}
                style={{ width: `${generatorVolumeFour}%` }}
              >
                <span>d</span>
              </div>
              <div
                className={style.c__description}
                style={{ width: `${generatorVolumeThree}%` }}
              >
                <span>c</span>
              </div>
              <div
                className={style.f__description}
                style={{ height: `${generatorVolumeF}%` }}
              >
                <span>f</span>
              </div>
              <div
                className={style.g__description}
                style={{ height: `${generatorVolumeG}%` }}
              >
                <span>g</span>
              </div>
              <div
                className={style.circel__one}
                style={{
                  height: `${generatorVolumeE * 2}%`,
                  width: `${generatorVolume * 2}%`,
                }}
              ></div>
              <div
                className={style.circel__two}
                style={{
                  height: `${generatorVolumeF * 2}%`,
                  width: `${generatorVolumeSecond * 2}%`,
                }}
              ></div>
              <div
                className={style.circel__three}
                style={{
                  height: `${generatorVolumeG * 2}%`,
                  width: `${generatorVolumeThree * 2}%`,
                }}
              ></div>
              <div
                className={style.circel__four}
                style={{
                  height: `${generatorVolumeH * 2}%`,
                  width: `${generatorVolumeFour * 2}%`,
                }}
              ></div>
            </div>
            <div className={style.code__box}>
              <span className={style.code__roule}>border-radius:</span>
              <code className={style.code__valum}>
                <span>{generatorVolume}%</span>{" "}
                <span>{generatorVolumeSecond}% </span>
                <span>{generatorVolumeThree}%</span>{" "}
                <span>{generatorVolumeFour}%</span>/
                <span>{generatorVolumeE}%</span>{" "}
                <span>{generatorVolumeF}%</span>{" "}
                <span>{generatorVolumeG}% </span>{" "}
                <span>{generatorVolumeH}%</span>{" "}
              </code>
            </div>
            <button
              className={style.randomButton}
              onClick={generateRandomBorderRadius}
            >
              Generate Random Border Radius
            </button>
          </div>
          <div className={style.form__group}>
            <InputFrame
              className={style.form__e}
              value={generatorVolumeE}
              set={setGeneratorVolumeE}
              min={0}
              max={100}
              rangeLabel="e-range"
              numberLabel="e-number"
            ></InputFrame>
            <InputFrame
              className={style.form__f}
              value={generatorVolumeF}
              set={setGeneratorVolumeF}
              min={0}
              max={100}
              rangeLabel="f-range"
              numberLabel="f-number"
            ></InputFrame>
            <InputFrame
              className={style.form__g}
              value={generatorVolumeG}
              set={setGeneratorVolumeG}
              min={0}
              max={100}
              rangeLabel="g-range"
              numberLabel="g-number"
            ></InputFrame>
            <InputFrame
              className={style.form__h}
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
