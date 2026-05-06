import {
  LucideIcon,
  BedDouble,
  Star,
  ShieldPlus,
  Users,
  Activity,
} from "lucide-react";

type RawatInapItem = {
  title: string;
  bedCount: number;
  icon: LucideIcon;
};

export const RAWAT_INAP_LIST: RawatInapItem[] = [
  { title: "VIP", bedCount: 2, icon: Star },
  { title: "Kelas 1", bedCount: 3, icon: BedDouble },
  { title: "Kelas 2", bedCount: 4, icon: Users },
  { title: "Kelas 3", bedCount: 12, icon: Users },
  { title: "ICU", bedCount: 2, icon: Activity },
  { title: "Ruang Isolasi", bedCount: 2, icon: ShieldPlus },
];
