import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import Carousel from "./ui/carousel";

export default function Header() {

  return (
    <div className="flex flex-col gap-16 items-center">
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-3xl text-center">
        <span className="font-bold text-rose-400">Pag-ibig 100:</span> The Love and Life of Jose Rizal
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
