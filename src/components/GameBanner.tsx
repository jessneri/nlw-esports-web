interface IProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export default function GameBanner(props: IProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block mb-1">
          {props.title}
        </strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} {props.adsCount === 1 ? "anúncio" : "anúncios"}
        </span>
      </div>
    </a>
  );
}
