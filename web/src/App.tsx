import { useEffect, useState, ButtonHTMLAttributes } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { CaretRight, CaretLeft } from 'phosphor-react';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

import logo from './assets/logo-nlw-esports.svg';

import { CreateAdModal } from './components/Form/CreateAdModal';
import './styles/main.css';

export interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

interface ArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  position: string;
}

function App() {
  const [games, setGames] = useState<GameProps[]>([]);
  const isSliderLoaded = games.length > 0;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      breakpoints: {
        '(min-width: 640)': {
          slides: { perView: 1, spacing: 4 }
        },
        '(min-width: 768px)': {
          slides: { perView: 3, spacing: 6 }
        },
        '(min-width: 1000px)': {
          slides: { perView: 5, spacing: 10 }
        },
        '(min-width: 1280px)': {
          slides: { perView: 6, spacing: 10 }
        }
      },
      slides: { perView: 1 }
    },
    []
  );

  useEffect(() => {
    axios('http://localhost:3333/games').then((response) =>
      setGames(response.data)
    );
  }, []);

  function Arrow({ disabled, position, onClick }: ArrowProps) {
    const isDisabled = disabled ? ' arrow--disabled' : '';

    return (
      <button
        onClick={onClick}
        className={`arrow ${
          position === 'left' ? 'arrow--left' : 'arrow--right'
        } 
        ${position === 'left' ? '-translate-x-full' : 'translate-x-full'}
        ${isDisabled}`}
      >
        {position === 'left' ? (
          <CaretLeft size={48} color={'#fff'} />
        ) : (
          <CaretRight size={48} color={'#fff'} />
        )}
      </button>
    );
  }

  return (
    <div className="2xl:max-w-[1450px] xg:max-w-[1344px] lg:max-w-[1024px] md:max-w-[500px] sm:max-w-[300px] max-w-[200px] mx-auto flex flex-col items-center md:my-20 my-16">
      <img
        src={logo}
        alt="Logo NLW Esports"
        className="2xl:w-60 lg:w-50 md:w-40 sm:w-32 w-28"
      />
      <h1 className="lg:text-6xl md:text-5xl sm:text-2xl text-xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text bg-[length:400%_400%] animate-rgb">
          duo
        </span>{' '}
        está aqui.
      </h1>

      {isSliderLoaded && (
        <div className="flex flex-col relative">
          <div
            ref={sliderRef}
            className="keen-slider mt-14 w-full 2xl:max-w-[1450px] xg:max-w-[1200px] lg:max-w-[1024px] md:max-w-[500px] sm:max-w-[300px]  max-w-[200px] z-10"
          >
            {games.map((game) => {
              return (
                <GameBanner
                  key={game.id}
                  title={game.title}
                  bannerUrl={game.bannerUrl}
                  adCount={game._count.ads}
                  className={`keen-slider__slide lazy__slide flex`}
                />
              );
            })}
          </div>
          <div className="w-full flex justify-between absolute top-2/4">
            <Arrow
              disabled={false}
              position="left"
              onClick={() => instanceRef.current?.prev()}
            />

            <Arrow
              disabled={false}
              position="right"
              onClick={() => instanceRef.current?.next()}
            />
          </div>
        </div>
      )}

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
