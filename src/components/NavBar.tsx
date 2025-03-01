import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

import logo from "@/assets/cozy.png";

const NavBar = ({ backgroundColor }: { backgroundColor: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`flex items-center md:justify-between p-5 border-b border-light-blue ${backgroundColor} shadow-md`}
    >
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="h-12 w-12"
              onClick={() => setOpen(true)}
            >
              <Menu size={48} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col font-bold space-y-4 mt-4 text-light-blue">
              <a href="#" className="hover:text-dark-blue">
                Shop
              </a>
              <a href="#" className="hover:text-dark-blue">
                Subscribe
              </a>
              <a href="#" className="hover:text-dark-blue">
                About
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <a
        href="/"
        className="max-sm:mx-auto text-xl md:text-2xl font-bold px-5 text-light-blue"
      >
        <img src={logo} alt="cozy logo" className="h-16 w-auto" />
      </a>
      <div className="hidden md:flex space-x-16 font-bold md:text-lg text-light-blue">
        <a href="#" className="hover:text-dark-blue">
          Shop
        </a>
        <a href="#" className="hover:text-dark-blue">
          Subscribe
        </a>
        <a href="#" className="hover:text-dark-blue">
          About
        </a>
      </div>
      <div className="hidden md:block">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            className="border-r-0 border-l-0 border-t-0"
            placeholder="Search product"
          />
          <Button type="submit" variant="ghost">
            <Search />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
