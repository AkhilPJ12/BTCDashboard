import { Bitcoin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "/", active: false },
  { name: "Analytics", href: "/analytics", active: false },
  { name: "News", href: "/news", active: false },
  { name: "Contact Us", href: "/contact", active: false },
  { name: "Support Us", href: "/support", active: false },
]

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Bitcoin className="h-8 w-8 text-orange-500" />
            <div>
              <h1 className="text-xl font-bold">Bitcoin Analytics</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">BTC Dashboard</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  item.active ? "text-orange-600 border-b-2 border-orange-600 pb-1" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Bitcoin className="h-6 w-6 text-orange-500" />
                    Bitcoin Analytics
                  </SheetTitle>
                  <SheetDescription>Navigate through the Bitcoin dashboard</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                        item.active ? "text-orange-600" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
