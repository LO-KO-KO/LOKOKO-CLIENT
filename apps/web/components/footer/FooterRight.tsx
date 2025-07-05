import { SvgArrowRight } from '@lococo/design-system';
import { FOOTER_RIGHT } from '../../constants/footer';

export default function FooterRight() {
  return (
    <div className="flex items-start gap-[2.4rem] bg-[color:var(--color-pink-100)]">
      {FOOTER_RIGHT.map((section) => (
        <div
          key={section.title}
          className="flex w-[16.8rem] flex-col items-start gap-[2.4rem]"
        >
          <p className="text-jp-body1 font-bold">{section.title}</p>

          <div className="flex flex-col items-start justify-start gap-[0.8rem] self-stretch">
            {section.menus.map((item) => (
              <div
                key={item}
                className="flex h-[3.2rem] items-center gap-[0.8rem] self-stretch py-[1rem]"
              >
                <p className="text-jp-body2 font-medium">{item}</p>
                <SvgArrowRight />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
