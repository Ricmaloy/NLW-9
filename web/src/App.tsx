import { useEffect, useState } from 'react';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

import logo from './assets/logo-nlw-esports.svg';

import * as Dialog from '@radix-ui/react-dialog';
import './styles/main.css';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/Input';
import { WeekDayCheckbox } from './components/Form/WeekDayCheckbox';

interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo NLW Esports" className="xl:w-72 md:w-40" />
      <h1 className="lg:text-6xl md:text-5xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.slice(0, 6).map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">
              Publique um anúncio
            </Dialog.Title>

            <form className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                <Input
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">
                  Seu nome (ou nickname)
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying" className="font-semibold">
                    Joga há quantos anos?
                  </label>
                  <Input
                    type="number"
                    id="yearsPlaying"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord" className="font-semibold">
                    Qual o seu Discord?
                  </label>
                  <Input type="text" id="discord" placeholder="Usuário#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weeDays" className="font-semibold">
                    Quando costuma jogar?
                  </label>
                  <div className="flex gap-1">
                    <WeekDayCheckbox title="Domingo">D</WeekDayCheckbox>
                    <WeekDayCheckbox title="Segunda">S</WeekDayCheckbox>
                    <WeekDayCheckbox title="Terça">T</WeekDayCheckbox>
                    <WeekDayCheckbox title="Quarta">Q</WeekDayCheckbox>
                    <WeekDayCheckbox title="Quinta">Q</WeekDayCheckbox>
                    <WeekDayCheckbox title="Sexta">S</WeekDayCheckbox>
                    <WeekDayCheckbox title="Sábado">S</WeekDayCheckbox>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart" className="font-semibold">
                  Qual o horário do dia?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="time" id="hourStart" placeholder="De" />
                  <Input type="time" id="hourStart" placeholder="Até" />
                </div>
              </div>

              <div className="mt-2 flex gap-2 text-sm">
                <Input type="checkbox" id="voiceChannel" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md hover:bg-zinc-600 transition-colors">
                  Cancelar
                </Dialog.Close>
                <button
                  className="bg-violet-500 px-5 h-12 rounded-md flex items-center gap-3 hover:bg-violet-600 transition-colors"
                  type="submit"
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
