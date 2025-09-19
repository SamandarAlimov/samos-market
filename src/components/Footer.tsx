import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl text-foreground">Samos Market</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted marketplace for quality products from verified sellers worldwide.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">How It Works</a></li>
              <li><a href="#" className="hover:text-primary">Seller Center</a></li>
              <li><a href="#" className="hover:text-primary">Become a Seller</a></li>
              <li><a href="#" className="hover:text-primary">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Help Center</a></li>
              <li><a href="#" className="hover:text-primary">Track Your Order</a></li>
              <li><a href="#" className="hover:text-primary">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-primary">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Tashkent, Uzbekistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+998 (71) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@market.samos.uz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Samos Global Technologies Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer