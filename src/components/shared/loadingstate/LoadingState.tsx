import Image from "next/image";

interface PropTypes {
  judul: string;
}

const LoadingState = (props: PropTypes) => {
  const { judul } = props;

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/logo/logo.png"
            alt="RSKB Mitra Ariva"
            width={80}
            height={80}
            className="animate-pulse object-contain"
          />

          <div className="space-y-1 text-center">
            <h2 className="text-lg font-semibold text-slate-800">{judul}</h2>

            <p className="text-sm text-slate-500">Mohon tunggu sebentar...</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoadingState;
