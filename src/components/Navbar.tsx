import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { BookOpen, Menu, LogIn } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Excellence Academy</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/login">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <LogIn className="h-4 w-4 mr-2" />
                Platform
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm">
                <div className="p-4">
                  <Link to="/" className="flex items-center space-x-2 mb-8">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-foreground">Excellence Academy</span>
                  </Link>
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          to={item.path}
                          className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                            isActive(item.path)
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                    <div className="border-t border-border pt-4 mt-4 space-y-2">
                      <SheetClose asChild>
                        <Link to="/login">
                          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            <LogIn className="h-4 w-4 mr-2" />
                            Platform
                          </Button>
                        </Link>
                      </SheetClose>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
