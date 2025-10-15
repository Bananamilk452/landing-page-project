import { Link } from "react-router";

export function PageCard({
  to,
  src,
  alt,
  title,
  description,
}: {
  to: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      to={to}
      className="grid h-62 w-84 cursor-pointer grid-rows-2 overflow-hidden rounded-lg border shadow-md"
    >
      <div className="size-full bg-gray-200 p-4">
        <img className="size-full object-contain" src={src} alt={alt} />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}

export function PageCardList({ children }: { children?: React.ReactNode }) {
  return <div className="flex flex-wrap gap-4">{children}</div>;
}
