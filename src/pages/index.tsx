import { PageCard, PageCardList } from "~/components/home/PageCard";

export function Index() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">랜딩페이지 만들기 프로젝트</h1>

      <div className="mt-6">
        <PageCardList>
          {/* <PageCard
            to="/warframe"
            src="https://picsum.photos/500/500"
            alt="Image"
            title="Warframe"
            description="Warframe이라는 TPS 게임 랜딩 사이트 (GSAP)"
          /> */}
        </PageCardList>
      </div>
    </div>
  );
}
