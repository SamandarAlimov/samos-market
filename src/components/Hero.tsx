import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Amazing
              <span className="block text-accent">Products</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Shop from thousands of sellers worldwide. Find everything you need in one place.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Become a Seller
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-sm opacity-80">Products</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm opacity-80">Sellers</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm opacity-80">Countries</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <Button 
        variant="ghost" 
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </section>
  )
}

export default Hero