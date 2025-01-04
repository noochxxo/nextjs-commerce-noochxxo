'use client';

import CartModal from '@/components/cart/modal';
import { BookOpen, Grid, Info, Phone, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

import { Menu } from 'lib/wix/types';

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  // return (
  //   <>
  //     <button
  //       onClick={openMobileMenu}
  //       aria-label="Open mobile menu"
  //       className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
  //     >
  //       <Bars3Icon className="h-4" />
  //     </button>
  //     <Transition show={isOpen}>
  //       <Dialog onClose={closeMobileMenu} className="relative z-50">
  //         <Transition.Child
  //           as={Fragment}
  //           enter="transition-all ease-in-out duration-300"
  //           enterFrom="opacity-0 backdrop-blur-none"
  //           enterTo="opacity-100 backdrop-blur-[.5px]"
  //           leave="transition-all ease-in-out duration-200"
  //           leaveFrom="opacity-100 backdrop-blur-[.5px]"
  //           leaveTo="opacity-0 backdrop-blur-none"
  //         >
  //           <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
  //         </Transition.Child>
  //         <Transition.Child
  //           as={Fragment}
  //           enter="transition-all ease-in-out duration-300"
  //           enterFrom="translate-x-[-100%]"
  //           enterTo="translate-x-0"
  //           leave="transition-all ease-in-out duration-200"
  //           leaveFrom="translate-x-0"
  //           leaveTo="translate-x-[-100%]"
  //         >
  //           <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
  //             <div className="p-4">
  //               <button
  //                 className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
  //                 onClick={closeMobileMenu}
  //                 aria-label="Close mobile menu"
  //               >
  //                 <XMarkIcon className="h-6" />
  //               </button>

  //               <div className="mb-4 w-full">
  //                 <Suspense fallback={<SearchSkeleton />}>
  //                   <Search />
  //                 </Suspense>
  //               </div>
  //               {menu.length ? (
  //                 <ul className="flex w-full flex-col">
  //                   {menu.map((item: Menu) => (
  //                     <li
  //                       className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
  //                       key={item.title}
  //                     >
  //                       <Link href={item.path} prefetch={true} onClick={closeMobileMenu}>
  //                         {item.title}
  //                       </Link>
  //                     </li>
  //                   ))}
  //                 </ul>
  //               ) : null}
  //             </div>
  //           </Dialog.Panel>
  //         </Transition.Child>
  //       </Dialog>
  //     </Transition>
  //   </>
  // );

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-muted bg-background md:hidden">
        <div >
          {menu.length ? (
            <ul className="flex h-16 items-center justify-around">
              {menu.map((item: Menu) => (
                item.title !== 'Home'  && item.title !== 'Profile' ? (
                  <li
                  className={`flex h-full w-full flex-col items-center justify-center ${
                    pathname === item.path ? 'text-primary' : 'text-muted'
                  }`}
                  key={item.title}
                >
                  <Link href={item.path} prefetch={true} onClick={closeMobileMenu}>
                    {item.icon === 'grid' && <Grid size={24} className="m-auto md:hidden" />}
                    {item.icon === 'shopping-cart' && <ShoppingCart size={24} className="m-auto" />}
                    {item.icon === 'user' && <User size={24} className="m-auto" />}
                    {item.icon === 'book-open' && (
                      <BookOpen size={24} className="m-auto md:hidden" />
                    )}
                    {item.icon === 'info' && <Info size={24} className="m-auto md:hidden" />}
                    {item.icon === 'phone' && <Phone size={24} className="m-auto md:hidden" />}
                    <span className="mt-1 text-xs">{item.title}</span>
                  </Link>
                </li>
                ) : null
              ))}
              <li className='flex h-full w-full flex-col items-center justify-center'>
                <CartModal />
              </li>
              {
              // TODO: Add the cart icon
              // TODO: Add the profile icon
              }
            </ul>
          ) : null}
        </div>
      </nav>
    </>
  );
}
