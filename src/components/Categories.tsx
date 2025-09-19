import { Smartphone, Shirt, Home, Dumbbell, Book, Car, Heart, Gamepad2 } from 'lucide-react'

const categories = [
  { name: 'Electronics', icon: Smartphone, color: 'bg-blue-100 text-blue-600' },
  { name: 'Fashion', icon: Shirt, color: 'bg-pink-100 text-pink-600' },
  { name: 'Home & Garden', icon: Home, color: 'bg-green-100 text-green-600' },
  { name: 'Sports', icon: Dumbbell, color: 'bg-orange-100 text-orange-600' },
  { name: 'Books', icon: Book, color: 'bg-purple-100 text-purple-600' },
  { name: 'Automotive', icon: Car, color: 'bg-red-100 text-red-600' },
  { name: 'Health', icon: Heart, color: 'bg-teal-100 text-teal-600' },
  { name: 'Gaming', icon: Gamepad2, color: 'bg-indigo-100 text-indigo-600' },
]

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.name}
                className="flex flex-col items-center p-4 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {category.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categories