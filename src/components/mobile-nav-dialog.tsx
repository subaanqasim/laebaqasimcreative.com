import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui";

type MobileNavDialogProps = {
  navigation: { name: string; href: string }[];
};

export function MobileNavDialog({ navigation }: MobileNavDialogProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Button variant="ghost" className="-mr-2 hover:translate-y-0" size="sm">
        <Bars3Icon className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="lg:hidden -mr-2">
        <Button variant="ghost" size="sm" className="hover:translate-y-0">
          <Bars3Icon className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="sr-only">Edit profile</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <a href="/#home" className="-m-1.5 p-1.5">
            <span className="sr-only">Laeba Qasim Creative</span>
            <div className="h-8 w-8 rounded-full bg-gray-500" />
          </a>
        </div>

        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900  hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
