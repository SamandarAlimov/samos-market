import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

// Sample product data
const featuredProducts = [
  {
    id: '1',
    title: 'Wireless Bluetooth Headphones with Noise Cancellation',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    seller: 'TechStore Pro',
    isOnSale: true,
    discount: 31
  },
  {
    id: '2',
    title: 'Premium Cotton T-Shirt - Comfortable Fit',
    price: 24.99,
    rating: 4.8,
    reviews: 856,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    seller: 'Fashion Hub'
  },
  {
    id: '3',
    title: 'Smart Fitness Watch with Heart Rate Monitor',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.3,
    reviews: 654,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    seller: 'Fitness Gear',
    isOnSale: true,
    discount: 20
  },
  {
    id: '4',
    title: 'Organic Coffee Beans - Premium Blend',
    price: 19.99,
    rating: 4.7,
    reviews: 432,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    seller: 'Coffee Masters'
  }
]

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
            <a href="#" className="text-primary hover:underline">View All</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">⚡ Flash Sale</h2>
            <p className="text-muted-foreground">Limited time offers - don't miss out!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={`flash-${product.id}`} {...product} isOnSale={true} discount={25} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
