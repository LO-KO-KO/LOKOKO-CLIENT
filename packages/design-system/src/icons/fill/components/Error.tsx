import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}
export function SvgError(props: Props) {
  return <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 40 40" fill={props.fill || "currentColor"} xmlns="http://www.w3.org/2000/svg" {...props}><mask id="mask0_3625_45670" style={{
      maskType: "alpha"
    }} maskUnits="userSpaceOnUse" x={0} y={0} width={40} height={40}><rect width={40} height={40} fill="#D9D9D9" /></mask><g mask="url(#mask0_3625_45670)"><path d="M20.0013 35C19.0846 35 18.2999 34.6736 17.6471 34.0208C16.9944 33.3681 16.668 32.5833 16.668 31.6667C16.668 30.75 16.9944 29.9653 17.6471 29.3125C18.2999 28.6597 19.0846 28.3333 20.0013 28.3333C20.918 28.3333 21.7027 28.6597 22.3555 29.3125C23.0082 29.9653 23.3346 30.75 23.3346 31.6667C23.3346 32.5833 23.0082 33.3681 22.3555 34.0208C21.7027 34.6736 20.918 35 20.0013 35ZM16.668 25V5H23.3346V25H16.668Z" /></g></svg>;
}