import FooterBottom from './FooterBottom';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

export default function Footer() {
  return (
    <footer className="sticky bottom-0 flex w-full flex-col items-center justify-center overflow-hidden bg-[color:var(--color-pink-100)]">
      <div className="flex w-full max-w-[1280px] items-center gap-[12rem] px-[11.9rem] py-16">
        <FooterLeft />
        <FooterRight />
      </div>
      <div className="flex h-[5.2rem] w-full items-center justify-center gap-4 border-t border-dashed border-[color:var(--color-pink-500)] p-4">
        <FooterBottom />
      </div>
    </footer>
  );
}
