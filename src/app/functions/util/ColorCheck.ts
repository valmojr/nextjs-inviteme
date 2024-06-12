export default function ColorCheck(color: string): boolean {
  const rgb = color.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(m, r, g, b) {
    const hexToR = parseInt(r, 16);
    const hexToG = parseInt(g, 16);
    const hexToB = parseInt(b, 16);
    return `rgb(${hexToR}, ${hexToG}, ${hexToB})`;
  });
  const rgbValues: number[] = rgb.match(/\d+/g)!.map(Number);
  const luminance = (rgbValues[0] + rgbValues[1] + rgbValues[2]) / 3 / 255;

  return luminance > 0.9 || luminance < 0.1; // Adjusted threshold for edges
}