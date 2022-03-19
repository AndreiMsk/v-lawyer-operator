import { Fragment, useState, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  CogIcon,
  HomeIcon,
  MenuAlt2Icon,
  XIcon
} from '@heroicons/react/outline'
import {
  UsersIcon,
  ChatAlt2Icon,
  VideoCameraIcon,
  ChartPieIcon,
  CalendarIcon,
  LogoutIcon,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from 'hooks/auth'


const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon, current: false },
  {
    name: "Video Lobby",
    href: "/video-lobby",
    icon: VideoCameraIcon,
    current: false,
  },
  { name: "LiveChat", href: "/live-chat", icon: ChatAlt2Icon, current: false },
  { name: "Team", href: "/team", icon: UsersIcon, current: false },
  { name: "Reports", href: "/reports", icon: ChartPieIcon, current: false },
  { name: 'Settings', href: '/settings', icon: CogIcon, current: false },
]

const userNavigation = [
  { name: 'Your profile', href: '/profile' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SidebarThemeLayout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState('Dashboard')

  const router = useRouter();

  /* logout method from auth hook */
  const { logout } = useAuth()

  useEffect(() => {
    console.log();
    if (router) {
      setActivePage(router.pathname)
    }
  }, [router]);

  return (
    <>
      <div className="h-screen flex sticky">
        {/* Narrow sidebar */}
        <div className="hidden w-28 bg-gray-700 overflow-y-auto md:block relative">
          <div className="w-full py-6 flex flex-col items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt="Workflow"
              />
            </div>
            <div className="flex-1 mt-6 w-full px-2 space-y-1">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a
                    className={classNames(
                      activePage === item.href ? 'bg-gray-800 text-white' : 'text-gray-100 hover:bg-gray-800 hover:text-white',
                      'group w-full p-2 rounded-md flex flex-col items-center text-xs font-medium'
                    )}
                    aria-current={activePage === item.href ? 'page' : undefined}
                  >
                    <item.icon
                      className={classNames(
                        activePage === item.href ? 'text-white' : 'text-gray-300 group-hover:text-white',
                        'h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    <span className="mt-1">{item.name}</span>
                  </a>
                </Link>
              ))}
              <div className='bg-yellow-500 text-white w-full text-xs absolute bottom-0 left-0 flex items-center justify-center' onClick={logout}>
                <p className='text-white text-xs text-center px-2 py-5 cursor-pointer'>Sign out</p>
                <LogoutIcon className='text-white group-hover:text-white h-5 w-5' />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-gray-700 pt-5 pb-4 flex-1 flex flex-col">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-1 right-0 -mr-14 p-1">
                    <button
                      type="button"
                      className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      <span className="sr-only">Close sidebar</span>
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 px-4 flex items-center border">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                  <nav className="h-full flex flex-col">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            activePage == item.href
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-100 hover:bg-gray-800 hover:text-white',
                            'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
                          )}
                          aria-current={activePage ? 'page' : undefined}
                        >
                          <item.icon
                            className={classNames(
                              activePage === item.href ? 'text-white' : 'text-gray-300 group-hover:text-white',
                              'mr-3 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="w-full">
            <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 flex justify-between px-4 sm:px-6">
                <div className="flex-1 flex">
                </div>
                <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <span className="sr-only">Open user menu</span>
                        <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                          <svg className="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link href={item.href} key={item.name}>
                                <a
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                        <Menu.Item>
                          <Link href="">
                            <a className={'block px-4 py-2 text-sm text-gray-700'} onClick={logout}>
                              Sign out
                            </a>
                          </Link>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 main">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}


export default SidebarThemeLayout;