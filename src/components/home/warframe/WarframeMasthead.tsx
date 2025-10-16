import { useState } from "react";
import { useEventListener } from "usehooks-ts";

import { WarframeButton } from "./WarframeButton";

export function WarframeMasthead() {
  const [height, setHeight] = useState(
    window.screen.availHeight - window.scrollY - 75,
  );

  useEventListener("scroll", () => {
    setHeight(window.screen.availHeight - window.scrollY - 75);
  });

  return (
    <>
      <div
        className="fixed top-0 overflow-hidden"
        style={{ height: `${height}px` }}
      >
        {/* Masthead Video */}
        <div className="h-screen">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="screen:w-[1600px] screen:mask-[linear-gradient(90deg,transparent_0,#000_10%,#000_90%,transparent)] mx-auto h-full object-cover"
          >
            <source
              src="/warframe/videos/landing/masthead.webm"
              type="video/webm"
            />
            <source
              src="/warframe/videos/landing/masthead.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Masthead Content */}
        <section className="absolute top-0 left-0 h-screen w-screen">
          <div className="mx-auto h-full w-[768px]">
            <div className="grid h-full grid-rows-[2fr_3fr] px-8 drop-shadow-[0_0_6px_#000000]">
              <div></div>
              <div>
                {/* Masthead Title */}
                <h1>
                  <img
                    className="mx-auto w-4/5 max-w-[420px]"
                    src="/warframe/images/landing/logo-white.png"
                    alt="Warframe Logo"
                  />
                </h1>
                {/* Masthead Description */}
                <p className="max-width-[800px] mx-auto mt-8 mb-12 w-[90%] text-center text-gray-100 opacity-80">
                  빠른 속도로 진행되는 3인칭 액션 슈터 게임, 워프레임을 지금
                  바로 시작해 7천만 명 이상의 플레이어들과 함께하세요. 자원을
                  모으고, 장비를 갖춰 광활한 근원계 속으로 자신만의 길을 열고
                  개척하는 겁니다.
                </p>

                <div className="flex flex-col items-center gap-4">
                  {/* Masthead Button */}
                  <WarframeButton asChild className="px-[128px]">
                    <a>지금 무료로 플레이</a>
                  </WarframeButton>
                  {/* Sign In */}
                  <a
                    href="#"
                    className="text-gray-100 underline opacity-80 transition-all duration-250 hover:text-white hover:opacity-100"
                  >
                    이미 계정이 있으신가요? 여기를 클릭하세요.
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* More */}
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
            <img
              src="/warframe/images/material/expand-more.svg"
              className="size-18 invert"
            />
          </button>
        </section>
      </div>
      {/* Placeholder */}
      <div className="h-screen"></div>
    </>
  );
}
