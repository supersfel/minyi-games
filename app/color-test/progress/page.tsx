"use client";

import Brush from "color-test/components/Brush";
import Xylophone from "color-test/components/Xylophone";
import { useEffect, useState } from "react";
import { BlackBox } from "color-test/styles/box";
import styled from "styled-components";
import { makeRandomColors } from "color-test/utils/game";
import { useRouter } from "next/navigation";
import useJsConfetti from "color-test/hooks/useJsConfetti";

const Page = () => {
  const [makeCorrectBoom, makeWrongBoom] = useJsConfetti();

  const [colors, setColors] = useState<string[]>([]);

  const [doCheckAnswer, setDoCheckAnswer] = useState(false);
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    setDoCheckAnswer(false);
  }, []);

  const [level, setLevel] = useState(1);
  const levelUp = () => {
    setLevel((prev) => prev + 1);
    makeCorrectBoom();
  };

  const router = useRouter();

  //레벨에 맞는 색상 선택
  useEffect(() => {
    const curColors = makeRandomColors(level);
    const answerIdx = Math.floor(Math.random() * 10);
    setColors(curColors);
    setAnswer(curColors[answerIdx]);
  }, [level]);

  useEffect(() => {
    setDoCheckAnswer(false);
  }, [doCheckAnswer]);

  const hadleCheckBtn = () => {
    setDoCheckAnswer(true);
  };

  const gameEnd = () => {
    makeWrongBoom();
    router.push(`/color-test/end/${level}`);
  };

  return (
    <Wrapper>
      <Level>Lv{level}</Level>
      <BrushArea>
        <Brush color={answer} size="200px"></Brush>
      </BrushArea>
      <XylophoneWrapper>
        <Xylophone
          colorAry={colors}
          doCheckAnswer={doCheckAnswer}
          answer={answer}
          level={level}
          goNextLevel={levelUp}
          gameEnd={gameEnd}
        />
      </XylophoneWrapper>
      <CheckBtn onClick={hadleCheckBtn}>선택하기</CheckBtn>
    </Wrapper>
  );
};

/* STYLE */

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Level = styled.p`
  font-size: 4rem;
  margin-top: 1rem;
  margin-bottom: -1rem;
`;

const BrushArea = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const XylophoneWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckBtn = styled(BlackBox)`
  margin: 3rem 0;
  font-size: 2rem;
  cursor: pointer;
`;

export default Page;
