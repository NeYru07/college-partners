import Image from "next/image";
import portfelImg from "../public/images/portfel.png"
import "./globals.css";
import EmployerCard from "./components/EmployerCard";
import { employers } from "./src/data/employers";

export default function Home() {
  return (
    <>
    {/* Первый блок */}
      <div id="main" className="w-full h-[56.6875rem] flex gap-2.5 px-20 items-center pr-[1.1625rem]">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2.5">
              <h1 className="font-bold text-[5rem] text-[#7E00C7]">Партнеры колледжа</h1>
              <h3 className="font-semibold text-[2rem] text-[#121212]">Места, где ждут наших выпускников</h3>
            </div>
            <p className="text-2xl text-[#565656]">Уже 5356 студентов колледжа начали карьеру с нашими партнёрами</p>
          </div>
          <button className="w-fit h-fit py-7.5 px-24.75 gap-5 bg-[#CE79FF] text-white rounded-[5rem] flex items-center font-semibold text-4xl hover:bg-[#A100FF57] duration-150 ease-in active:bg-[#121212]">
            Подать заявку
            <svg className="w-[2.0625rem] h-[2.8125rem]" width="33" height="45" viewBox="0 0 33 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.1213 24.2131C33.2929 23.0415 33.2929 21.1421 32.1213 19.9705L13.0294 0.878595C11.8579 -0.292979 9.95837 -0.292979 8.7868 0.878594C7.61523 2.05017 7.61523 3.94966 8.7868 5.12124L25.7574 22.0918L8.7868 39.0624C7.61522 40.2339 7.61522 42.1334 8.78679 43.305C9.95837 44.4766 11.8579 44.4766 13.0294 43.305L32.1213 24.2131ZM0 22.0918L-2.62268e-07 25.0918L30 25.0918L30 22.0918L30 19.0918L2.62268e-07 19.0918L0 22.0918Z" fill="white"/>
              </svg>
          </button>
        </div>
        <Image
          className="w-[56.25rem] h-[54.4375rem]"
          src={portfelImg}
          alt="Портфель"
          width={900}
          height={871}
        />
      </div>


      {/* Второй блок */}
      <div id="aboutUs" className="w-full h-fit flex flex-col relative items-center gap-10">
        <Image
          className="absolute top-[24.8125rem] left-[2.125rem] -z-10 w-[29.6875rem] h-[27.125rem]"
          src="/images/pinkStar.png"
          alt="Розовая звезда"
          width={475}
          height={434}
        />
        <Image
          className="absolute top-[.75rem] left-[79.0625rem] -z-10 w-[34.625rem] h-auto"
          src="/images/grayStar.png"
          alt="Серая звезда"
          width={554}
          height={524}
        />
        <h1 className="font-semibold text-5xl text-[#6900A6]">Перспективы сайта</h1>
        <div className='grid grid-cols-3 grid-rows-2 w-fit h-fit gap-12.5'>
          <div className="perspective-card">
            <Image
              className="w-[17.0625rem] h-[11.625rem]"
              src="/images/documentStorage.png"
              alt=""
              width={273}
              height={186}
            />
            <p>Вакансии для студентов после выпуска</p>
          </div>
          <div className="perspective-card">
            <Image
              className="w-[14.625rem] h-auto"
              src="/images/handshake.png"
              alt=""
              width={234}
              height={101}
            />
            <p>Адаптироваться на рынке труда</p>
          </div>
          <Image
            className="w-[23.3125rem] h-[25.8125rem]"
            src="/images/youngMan.png"
            alt="Молодой человек за ноутбуком"
            width={373}
            height={413}
          />
          <Image
            className="w-[23.3125rem] h-[25.8125rem]"
            src="/images/folder.png"
            alt=""
            width={373}
            height={413}
          />
          <div className="perspective-card">
            <Image
              className="w-[14.375rem] h-[12.1875rem]"
              src="/images/businessman.png"
              alt=""
              width={230}
              height={195}
            />
            <p>Только проверенные работодатели</p>
          </div>
          <div className="perspective-card">
            <Image
              className="w-[12.25rem] h-[12.4375rem]"
              src="/images/loudspeaker.png"
              alt=""
              width={196}
              height={199}
            />
            <p>Информирование о изменениях</p>
          </div>
        </div>
      </div>


      {/* Третий блок */}
      <div id="employers" className='flex flex-col gap-14.75 mt-50 mb-50 ml-15.5 items-center'>
        <h1 className="font-semibold text-[4rem] text-[#262729]">Работодатели</h1>
        <div className='flex flex-wrap gap-7'>
          {employers.map((employer) => (
          <EmployerCard 
            key={employer.id}          // Обязательный ключ для React
            id={employer.id}           // Передаем id для ссылки
            name={employer.name}       // Название компании
            badgeColor={employer.badgeColor} // Цвет бейджика
            iconSrc={employer.iconImage || '/images/desk.png'}     // Картинка для карточки
          />
        ))}
        </div>
      </div>
    </>
  );
}
