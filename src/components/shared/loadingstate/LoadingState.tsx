"use client";

import Image from "next/image";

interface PropTypes {
  judul: string;
}

const LoadingState = (props: PropTypes) => {
  const { judul } = props;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50/50">
      <div className="flex flex-col items-center gap-6 p-4">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <div className="border-t-havelock-blue-500 absolute inset-0 animate-spin rounded-full border-4 border-slate-100" />

          <div className="absolute inset-2 rounded-full border border-slate-50 bg-white shadow-xs" />

          <div className="relative z-10 h-14 w-14 animate-pulse duration-1000">
            <Image
              src="/images/logo/logo.png"
              alt="RSKB Mitra Ariva"
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="animate-fade-in max-w-xs space-y-1.5 text-center">
          <h2 className="font-playfair text-xl tracking-tight text-slate-800">
            {judul}
          </h2>

          <p className="inline-flex items-center gap-1 text-xs font-medium tracking-wider text-slate-400 uppercase">
            Mohon Tunggu
            <span className="inline-flex items-center gap-0.5">
              <span className="h-1 w-1 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]"></span>
              <span className="h-1 w-1 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]"></span>
              <span className="h-1 w-1 animate-bounce rounded-full bg-slate-400"></span>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoadingState;
