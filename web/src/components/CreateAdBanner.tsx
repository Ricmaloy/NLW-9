import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className=" w-full 2xl:max-w-[1450px] max-w-[1200px]  self-center pt-1 bg-nlw-gradient mt-8 rounded-lg overflow-hidden bg-[length:300%_300%] animate-rgb">
      <div className="bg-[#2A2634] lg:px-8 lg:py-6 md:px-6 md:py-4 flex justify-between items-center md:flex-row flex-col">
        <div>
          <strong className="lg:text-2xl text-white font-black block">
            Não encontrou seu duo ?
          </strong>
          <span className="text-zinc-400 lg:text-base sm:text-xs">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="lg:py-3 lg:px-4 md:py-2 md:px-3 bg-violet-500 lg:text-base md:text-xs text-white flex items-center gap-3 rounded hover:bg-violet-600 transition-colors">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
