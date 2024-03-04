"use client";
import Brush from "color-test/components/Brush";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BlackBox } from "color-test/styles/box";
import { uiColor } from "color-test/styles/color";
import styled from "styled-components";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Mobi/i.test(window.navigator.userAgent));
  }, []);
  const param = useParams();
  const level = +param.level;
  const mentAry = [
    "화가이신가요?! 말도 안되게 잘하시네요!",
    "수준급 시각적 차별력을 지니셨네요!!",
    "평범한 시각적 차별력을 지니셨네요!!",
    "안좋은 시각적 차별력을 지니셨네요!!",
  ];

  const medalColor = [
    uiColor.dia,
    uiColor.gold,
    uiColor.silver,
    uiColor.bronze,
  ];

  const percentAry = [3, 30, 50, 80];
  const router = useRouter();

  const [mentIdx, setMentIdx] = useState(-1);
  useEffect(() => {
    const nxIdx = level > 19 ? 0 : level > 12 ? 1 : level > 8 ? 2 : 3;
    setMentIdx(nxIdx);
  }, [level]);

  const handleShareBtn = () => {
    toast.warning("아직 공유중은 개발중이에요 ㅠ");
  };

  const gameStart = () => {
    router.push("/color-test");
  };

  return (
    <Wrapper isMobile={isMobile}>
      <Result>
        <p>결과..</p>
        LV {level}
      </Result>
      <Ment>
        <p>{mentAry[mentIdx]}</p>
        <p>상위 {percentAry[mentIdx]}%입니다!!</p>
      </Ment>
      <BrushArea>
        <Brush color={medalColor[mentIdx]} size="200px"></Brush>
      </BrushArea>
      <ButtonArea>
        <PlayAgainBtn onClick={gameStart}>다시하기</PlayAgainBtn>
        <ShareBtn onClick={handleShareBtn}>공유하기</ShareBtn>
      </ButtonArea>
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled.p<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "90%" : "60%")};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Result = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: baseline;
  gap: 1rem;

  font-size: 3rem;
  p {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Ment = styled(BlackBox)`
  margin-top: 2rem;
  width: 100%;
`;

const BrushArea = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const PlayAgainBtn = styled(BlackBox)`
  font-size: 1.8rem;
  cursor: pointer;
`;

const ShareBtn = styled(BlackBox)`
  font-size: 1.8rem;
  cursor: pointer;
`;

export default Page;
