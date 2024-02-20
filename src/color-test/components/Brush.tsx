"use client";

import BrushSVG from "color-test/assets/brsuh.svg";
import styled from "styled-components";

const Brush = ({ color, size }: { color: string; size: string }) => {
  return (
    <Wrapper color={color} size={size}>
      <BrushSVG />
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled.div<{ size: string }>`
  svg {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
  }
  svg path.brush-color {
    fill: ${(props) => props.color};
  }
`;

export default Brush;
