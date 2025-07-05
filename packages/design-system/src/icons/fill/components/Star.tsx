import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}
export function SvgStar(props: Props) {
  return <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 16 16" fill={props.fill || "currentColor"} xmlns="http://www.w3.org/2000/svg" {...props}><mask id="mask0_488_3550" style={{
      maskType: "alpha"
    }} maskUnits="userSpaceOnUse" x={0} y={0} width={16} height={16}><rect width={16} height={16} fill="#D9D9D9" /></mask><g mask="url(#mask0_488_3550)"><path d="M3.88301 14.0002L4.96634 9.31683L1.33301 6.16683L6.13301 5.75016L7.99967 1.3335L9.86634 5.75016L14.6663 6.16683L11.033 9.31683L12.1163 14.0002L7.99967 11.5168L3.88301 14.0002Z" /></g></svg>;
}