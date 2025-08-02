import { apiRequest } from 'app/api/apiRequest';
import { ApiResponseListTrendsYoutubeResponse } from 'swagger-codegen/data-contracts';
import { convertToEmbedUrl, validateYoutubeVideoList } from 'utils/youtube';

export default async function HomeSectionYouTube() {
  try {
    const response = await apiRequest<ApiResponseListTrendsYoutubeResponse>({
      endPoint: '/api/youtube/trends',
    });

    const videos = response.data;

    // videos 로딩이 완료되지 않으면
    if (!videos) {
      return <div className="h-[43rem] w-[112.8rem] bg-white" />;
    }

    const videoUrls = videos
      .map((video) => video.url || '')
      .filter((url) => url);
    const validatedVideoUrls = await validateYoutubeVideoList(videoUrls, 25);
    const showVideos = videos
      .map((video, index) => ({
        ...video,
        url: validatedVideoUrls[index] || video.url,
      }))
      .slice(0, 6);
    return (
      <div className="mb-[12rem] grid grid-cols-3 gap-[2.4rem]">
        {showVideos?.map((video) => (
          <article className="h-[20.3rem] w-full bg-gray-100" key={video.id}>
            <iframe
              width="100%"
              height="100%"
              src={convertToEmbedUrl(video.url || '')}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </article>
        ))}
      </div>
    );
  } catch {
    return <div>영상 불러오는 중 오류 발생</div>;
  }
}
