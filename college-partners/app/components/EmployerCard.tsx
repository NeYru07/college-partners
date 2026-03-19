import Link from "next/link";
import Image from "next/image";

interface EmployerCardProps {
  id: string;
  name: string;
  badgeColor: string;
  iconSrc: string;
}

export default function EmployerCard({
  id,
  name,
  badgeColor,
  iconSrc,
}: EmployerCardProps) {
  return (
    <Link
      href={`../employer/${id}`}
      className="group relative block w-[55.25rem] h-[25.4375rem] bg-[#F9F7F7] border-2 border-b-12 border-[#BB8FD5] rounded-[2.5rem] p-12.5 overflow-hidden transition-none duration-300 hover:shadow-[0_0_1.5rem_#bb8fd5]"
    >
      {/* 1. Цветной бейджик с названием */}
      <div
        className={`w-fit px-5 py-2.5 rounded-[1.875rem] font-semibold text-5xl text-black ${badgeColor}`}
      >
        {name}
      </div>

      {/* 2. Кнопка "узнать больше" (прижата к низу) */}
      <div className="absolute bottom-15 left-12.5 flex items-center gap-2.5">
        {/* Черный кружок со стрелкой */}
        <div className="w-17.5 h-17.5 rounded-full bg-[#262729] flex items-center justify-center transition-colors group-hover:bg-black">
          <svg
            className="w-12.5 h-12.5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 17l9.2-9.2M17 17V7H7"
            />
          </svg>
        </div>
        <span className="text-[2rem]">узнать больше</span>
      </div>

      {/* 3. 3D Иконка (справа внизу) */}
        <Image src={iconSrc} alt={name} width={350} height={450} className="w-auto h-[20rem] object-fill h-auto absolute right-0 -bottom-4" />
    </Link>
  );
}
