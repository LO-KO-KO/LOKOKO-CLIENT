import React from 'react';
import MediaInfo from './MediaInfo';
import MediaViewer from './MediaViewer';

interface ReviewModalLayoutProps {
  mediaList: { type: 'video' | 'image'; url: string }[];
  user: { name: string; avatarUrl?: string };
  date: string;
  likeCount: number;
  children: React.ReactNode;
}

export default function ReviewModalLayout({
  mediaList,
  user,
  date,
  likeCount,
  children,
}: ReviewModalLayoutProps) {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div />
      <div className="relative flex h-[55.2rem] w-[97.2rem] rounded-xl bg-white">
        {/* 좌측: 미디어 + 하단정보 */}
        <div className="relative flex w-[55.2rem] flex-col">
          <MediaViewer mediaList={mediaList} />
          <MediaInfo user={user} date={date} likeCount={likeCount} />
        </div>
        {/* 우측: 리뷰 내용 (작업 예정) */}
        <div className="flex-1 px-[1.6rem]">{children}</div>
      </div>
    </div>
  );
}
