import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Header = () => {
  return (
    <header className="bg-card border-b sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-1">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            Free shipping on orders over $50 • 30-day return policy
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-foreground">Samos Market</span>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-4 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products, brands, and more..."
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Button>

            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Categories navigation */}
        <nav className="mt-4 hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Electronics</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Fashion</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Home & Garden</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Sports</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Books</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Automotive</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Health</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">More</a>
        </nav>
      </div>
    </header>
  )
}

export default Header