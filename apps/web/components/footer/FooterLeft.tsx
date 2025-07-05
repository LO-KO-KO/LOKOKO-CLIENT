import { SvgInstagramFill, SvgTwitterFill } from '@lococo/design-system';
import { FOOTER_LEFT } from '../../constants/footer';

export default function FooterLeft() {
  return (
    <div className="flex w-[45.6rem] flex-col items-start gap-[5.6rem] bg-[color:var(--color-pink-100)]">
      <div className="flex flex-col items-start gap-[2.4rem] self-stretch">
        <p className="text-en-title3 font-bold leading-loose text-neutral-900">
          {FOOTER_LEFT.title}
        </p>
        <p className="text-jp-body2 font-medium text-zinc-600">
          {FOOTER_LEFT.desc}
        </p>
      </div>
      <div className="flex items-center gap-[0.8rem]">
        <div className="flex h-[4.4rem] w-[4.4rem] items-center justify-center p-4">
          <SvgInstagramFill />
        </div>
        <div className="flex h-[4.4rem] w-[4.4rem] items-center justify-center p-4">
          <SvgTwitterFill />
        </div>
      </div>
    </div>
  );
}
