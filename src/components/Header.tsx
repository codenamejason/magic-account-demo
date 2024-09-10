import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { ConnectButton } from "./auth/ConnectButton";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkStyles = "relative font-semibold text-sm leading-6 text-[#0A1524] hover:text-[#0A1524] transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#2f6fce] after:to-[#63bdcc] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="https://magicaccount.io/" className="-m-1.5 p-1.5">
            <span className="sr-only">Magic Account</span>
            <img
              src={logo}
              alt="Magic Account Logo"
              className="h-16 w-auto object-contain"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
          <a
            href="https://magicaccount.io/"
            className={linkStyles}
          >
            Home
          </a>
          <a
            href="https://docs.zerodev.app/magic-account"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            Docs
          </a>
          <a
            href="https://github.com/zerodevapp/magic-account-demo"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            Source Code
          </a>
          <a
            href="https://www.youtube.com/watch?v=wIJViQgZFH0"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            Video Walkthrough
          </a>
          <a
            href="https://t.me/derek_chiang"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            Contact
          </a>
          <ConnectButton />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="https://magicaccount.io/" className="-m-1.5 p-1.5">
              <span className="sr-only">Magic Account</span>
              <img
                src={logo}
                alt="Magic Account Logo"
                className="h-16 w-auto object-contain"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="https://magicaccount.io/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="https://docs.zerodev.app/magic-account"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Docs
                </a>
                <a
                  href="https://github.com/zerodevapp/magic-account-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Source Code
                </a>
                <a
                  href="https://www.youtube.com/watch?v=wIJViQgZFH0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Video Walkthrough
                </a>
                <a
                  href="https://t.me/derek_chiang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <ConnectButton />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
