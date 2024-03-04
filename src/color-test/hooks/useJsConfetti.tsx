import JSConfetti from "js-confetti";
import { useEffect, useState } from "react";

//JSConfetti를 사용하기 위한 훅
const useJsConfetti = () => {
  const [jsConfetti, setJsConfetti] = useState<any>(null);

  useEffect(() => {
    setJsConfetti(new JSConfetti());
  }, []);

  const makeCorrectBoom = () => {
    if (!jsConfetti) return;
    jsConfetti.addConfetti({
      emojis: ["🏆", "🎨", "🌈", "👨‍🎨"],
      emojiSize: 100,
      confettiNumber: 40,
    });
  };

  const makeWrongBoom = () => {
    if (!jsConfetti) return;
    jsConfetti.addConfetti({
      emojis: ["💩", "😭", "🤷", "💩"],
      emojiSize: 100,
      confettiNumber: 25,
    });
  };

  return [makeCorrectBoom, makeWrongBoom];
};

export default useJsConfetti;
