'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components';
import { SvgError } from '@/icons';

export default function ErrorPage() {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[2.4rem]">
      <div className="flex h-[10rem] w-[10rem] shrink-0 items-center justify-center rounded-[10rem] bg-pink-100 p-[3rem]">
        <SvgError className="text-pink-300" />
      </div>
      <p className="jp-body1 font-bold text-gray-800">
        問題が発生しました。 しばらくしてからもう一度お試しください。
      </p>

      <Button
        color="primary"
        size="md"
        variant="filled"
        className="jp-title2 rounded-[0.8rem] font-bold"
        onClick={() => {
          router.push('/');
        }}
      >
        ホームに行く
      </Button>
    </div>
  );
}
