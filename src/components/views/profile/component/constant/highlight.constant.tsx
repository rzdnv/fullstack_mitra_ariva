type HighlightItem = {
  label: string;
  value: number;
  suffix?: string;
  desc: string;
};

export const HIGHLIGHT_LIST: HighlightItem[] = [
  {
    label: "PENGALAMAN",
    value: 20,
    suffix: "+",
    desc: "Tahun Melayani",
  },
  {
    label: "ULASAN",
    value: 4.5,
    suffix: "/5",
    desc: "Review di Google Maps",
  },
  {
    label: "SIAGA",
    value: 24,
    suffix: " Jam",
    desc: "Layanan Medis",
  },
  {
    label: "PROFESIONAL",
    value: 100,
    suffix: "%",
    desc: "Dokter & Tenaga Medis",
  },
];
