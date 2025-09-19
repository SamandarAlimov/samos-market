import { Star, Heart, ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface ProductCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  seller: string
  isOnSale?: boolean
  discount?: number
}

const ProductCard = ({ 
  title, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  image, 
  seller,
  isOnSale,
  discount 
}: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {isOnSale && discount && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
            -{discount}%
          </Badge>
        )}
        
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-foreground line-clamp-2 mb-2">{title}</h3>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-lg text-foreground">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        <p className="text-xs text-muted-foreground mb-3">Sold by {seller}</p>

        <Button className="w-full" size="sm">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCard