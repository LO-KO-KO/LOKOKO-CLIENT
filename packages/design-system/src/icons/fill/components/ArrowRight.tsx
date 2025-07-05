import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}
export function SvgArrowRight(props: Props) {
  return <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 16 16" fill={props.fill || "currentColor"} xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.53027 11.06L8.58361 8L5.53027 4.94L6.47027 4L10.4703 8L6.47027 12L5.53027 11.06Z" /></svg>;
}