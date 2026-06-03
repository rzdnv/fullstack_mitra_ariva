import { FasilitiesList } from "@/components/views/main/home/component/Card/CardFasilities/FasilitiesCard";

const FacilitiesSection = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-20 sm:px-10 lg:gap-10 lg:px-20">
      {/* Header Title */}
      <div className="flex flex-col gap-3 px-2 sm:px-0">
        <p className="text-havelock-blue-500 text-start tracking-tight lg:text-xl">
          ✦ Fasilitas Pelayanan
        </p>
        <h2 className="font-DMSerif max-w-4xl text-3xl leading-tight text-slate-800 md:text-5xl">
          Kenyamanan Anda adalah Prioritas Utama Kami
        </h2>
      </div>

      <div className="scrollbar-none w-full snap-x snap-mandatory overflow-x-auto pt-2 pb-6 sm:overflow-visible sm:pb-0">
        <div className="flex w-max gap-4 px-2 sm:grid sm:w-full sm:grid-cols-2 sm:gap-4 sm:px-0 lg:grid-cols-3 lg:gap-6">
          <FasilitiesList />
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
