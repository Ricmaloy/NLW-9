interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adCount: number;
}

export function GameBanner({ title, bannerUrl, adCount }: GameBannerProps) {
  return (
    <a href="#" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt="Capa do Jogo 01" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">{adCount} anúncios</span>
      </div>
    </a>
  );
}
