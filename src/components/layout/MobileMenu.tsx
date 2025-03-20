"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navigation: { name: string; href: string }[];
}

export default function MobileMenu({
  isOpen,
  setIsOpen,
  navigation,
}: MobileMenuProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-blueDark p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-6">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-blueDark dark:text-cream">
                    Menú
                  </Dialog.Title>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={() => setIsOpen(false)}>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="py-2 text-blueDark dark:text-grayLight hover:text-sea dark:hover:text-sea transition-colors"
                      onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Link
                    href="https://github.com/teffidev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueDark dark:text-grayLight hover:text-sea dark:hover:text-sea">
                    GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/teffidev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueDark dark:text-grayLight hover:text-sea dark:hover:text-sea">
                    LinkedIn
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
