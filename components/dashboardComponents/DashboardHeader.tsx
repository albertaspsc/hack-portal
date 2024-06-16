import Link from 'next/link';
import NavLink from '../NavLink';
import { useRef, useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';

/**
 * A dashboard header.
 */
export default function DashboardHeader() {
  const accordian = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const triggerAccordion = () => {
    let acc = accordian.current;
    setIsOpen(!isOpen);
    acc.classList.toggle('menuactive');
    var panel = acc.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  };

  return (
    <section>
      <header className="hidden md:flex flex-row justify-center items-center mt-8">
        <div className=" md:text-base lg:text-xl font-header md:text-left text-complementary font-semibold border-b-2 py-2">
          <NavLink
            href="/dashboard"
            exact={true}
            activeOptions={'border-b-4 border-primary text-primary-content'}
            className="xl:mr-6 mr-4 py-2"
          >
            HackCenter
          </NavLink>
          <NavLink
            href="/dashboard/questions"
            exact={true}
            activeOptions={'border-b-4 border-primary text-primary-content'}
            className="xl:ml-6 ml-4 py-2"
          >
            Ask a Question
          </NavLink>
        </div>
      </header>
      <div className="md:hidden mt-6">
        <button
          ref={accordian}
          onClick={() => triggerAccordion()}
          className="accordion text-left p-2 text-sm bg-complementary text-white flex justify-between relative"
        >
          <p>Dashboard Menu</p>
          <ChevronRightIcon className={`${isOpen ? 'transform rotate-90' : ''} w-5 h-5`} />
        </button>
        <div className="panel w-full bg-white text-primary-content text-sm">
          <ul className="">
            <li className="p-2 hover:bg-base-100 hover:text-primary cursor-pointer">
              <Link href="/dashboard" passHref>
                <div>HackCenter</div>
              </Link>
            </li>
            <li className="p-2 hover:bg-base-100 hover:text-primary cursor-pointer">
              <Link href="/dashboard/questions" passHref>
                <div>Ask a Question</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
