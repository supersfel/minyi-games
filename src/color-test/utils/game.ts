function ColorToHex(color: number) {
  var hexadecimal = Number(color).toString(16).toUpperCase();
  return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
}

export const changeRGBToHex = (color: string) => {
  const rgb = color.match(/[0-9]+/g);
  if (rgb === null) {
    return "";
  }

  const [red, green, blue] = rgb;

  return (
    "#" +
    ColorToHex(Number(red)) +
    ColorToHex(Number(green)) +
    ColorToHex(Number(blue))
  );
};

// makeRandom 함수를 export
export const makeRandomColors = (level: number): string[] => {
  if (level > 20) level = 20; //20단계이후부터는 RGB값 단 1개차이
  const hueStart = Math.random() * 360;
  const saturation = 70;
  const lightness = 50;

  const colors: string[] = [];

  for (let i = 0; i < 10; i++) {
    const hue = hueStart + (21 - level) * i;
    const rgbColor = hslToRgb(hue, saturation, lightness);
    const hexColor = rgbToHex(
      rgbColor[0],
      rgbColor[1],
      rgbColor[2]
    ).toUpperCase();
    colors.push(hexColor);
  }

  return colors;
};

// HSL을 RGB로 변환하는 함수
function hslToRgb(h: number, s: number, l: number) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// RGB를 HEX로 변환하는 함수
function rgbToHex(r: number, g: number, b: number) {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}
