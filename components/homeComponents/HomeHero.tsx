import { useRouter } from 'next/router';
import { buttonDatas } from '../../lib/data';
import Image from 'next/image';
export default function HomeHero() {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen max-w-4xl py-8 mx-auto flex flex-col justify-center items-center">
        <Image src="/assets/hero.jpg" alt="" layout="fill" className="object-cover opacity-80" />
        <Image src="/assets/2024.png" alt="MRUHacks 2024" width={2342} height={743} />
        <p className="relative text-center my-4 py-8 font-semibold md:text-xl text-md text-white">
          {' '}
          {/* !change */}24 Hours of Collaboration, Coding and Connections!
        </p>
      </div>
      {/* TODO: Programmatically show these based on configured times/organizer preference */}

      {/* <div className="flex flex-col items-center md:flex-row md:justify-around px-44 md:space-y-0 space-y-3 > *">
        {buttonDatas.map((button) => (
          <button
            key={button.text}
            onClick={() => router.push(button.path)}
            className="max-w-[14rem] w-[14rem] md:max-w-full bg-white py-4 rounded-xl h-10 flex items-center justify-center font-semibold text-xl text-primaryDark border-2 border-gray-300"
          >
            {button.text}
          </button>
        ))}
      </div> */}
    </>
  );
}
