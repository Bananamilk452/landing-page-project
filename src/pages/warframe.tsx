import { WarframeMasthead } from "~/components/home/warframe/WarframeMasthead";

export function WarframePage() {
  return (
    <div className="bg-[url('/warframe/images/landing/bg-main.jpg')] font-[Noto_Sans_KR] xl:text-lg">
      <WarframeMasthead />
      <div className="h-screen w-full bg-black"></div>
    </div>
  );
}
