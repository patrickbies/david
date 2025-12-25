import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Menu, X } from "lucide-react"

type MenuItem = {
  name: string
  description?: string
}

type MenuColumn = {
  title: string
  subtitle?: string
  items: MenuItem[]
}

type MenuSection = {
  title: string
  subtitle?: string
  items: string[]
}

type MenuCategory = {
  name: string
  subtitle?: string
  leftColumn?: MenuColumn
  rightColumn?: MenuColumn
  sections?: MenuSection[]
}

const menuCategories: MenuCategory[] = [
  {
    name: "Breakfast",
    subtitle: "Your choice of any freshly squeezed juice is available upon request.",
    leftColumn: {
      title: "Cold Breakfast",
      items: [
        {
          name: "From the Continent",
          description:
            "Breakfast box that includes fresh fruit and a selection of danishes, muffins, bagels and condiments. Fruit juice and yogurt are included.",
        },
        {
          name: "From the Bakery",
          description:
            "A platter full of home baked danishes, croissants, muffins, and morning breads with butter, cream cheese and jams.",
        },
        {
          name: "From the Orchards",
          description:
            "A platter of berries, melons, citrus fruit and other seasonal fruit accompanied by a variety of yogurt dips.",
        },
        {
          name: "From the Fields",
          description: "A variety of individually portioned or large boxes of cereals accompanied by fruit and milk.",
        },
        {
          name: "Canadian Smoked Salmon Platter",
          description:
            "Sliced, smoked salmon served with capers, red onion, sliced egg and lemon wedges. This selection is accompanied by freshly baked bagels or pumpernickel rounds.",
        },
        {
          name: "Bagels - Bagels - Bagels",
          description:
            "A platter full of freshly baked assorted bagels with butter, cream cheese and jams. Flavored cream cheese is available upon request.",
        },
        {
          name: "On the Lighter Side",
          description:
            "Breakfast box that includes freshly baked pastries with cereal, milk, fruit cup and fruit juice.",
        },
      ],
    },
    rightColumn: {
      title: "Hot Breakfast",
      items: [
        {
          name: "French-Canadian Country Pancakes",
          description:
            "Homemade pancakes topped with cinnamon and served with 100% Quebec maple syrup accompanied by bacon, ham or sausages.",
        },
        {
          name: "American Breakfast",
          description:
            "Three eggs, cooked the way you like, with home fries, bacon, sausage or Virginia ham and grilled tomatoes served with rolls or toast.",
        },
        {
          name: "Omelette Breakfast",
          description:
            "Three egg omelette with your choice of filling: bacon, ham, cheese, mushrooms, onions, tomatoes or peppers are just a few suggestions.",
        },
        {
          name: "New York New York",
          description:
            "5 oz New York steak with three scrambled eggs, home fries, grilled tomatoes and toast or bagel.",
        },
        {
          name: "Mexican Breakfast Burrito",
          description:
            "Scrambled eggs, Monterey jack cheese, scallions and diced tomatoes wrapped in a soft tortilla and served with guacamole, salsa and hot sauce.",
        },
        {
          name: "Hot Cereal",
          description:
            "A healthy and comforting start to your day. We offer a variety of cream of wheat and a selection of various oatmeal cereals.",
        },
        {
          name: "Pilot's Favorite",
          description: "Our famous Western Sandwiches with fresh fruit and juice.",
        },
      ],
    },
  },
  {
    name: "Box Lunches",
    subtitle:
      "Each box lunch contains a choice of salad, cheese and crackers, yogurt and dessert. All condiments and utensils are provided.",
    leftColumn: {
      title: "Bread Selection",
      subtitle:
        "White, wheat, rye, light rye, marble, pumpernickel, seven grain, sunflower, sour dough, twelve grain, sesame seed, Italian rolls and Montreal style bagels.",
      items: [
        {
          name: "Grilled Chicken Breast",
          description:
            "Juicy chicken breast grilled to perfection and served on a jumbo kaiser with vegetables on the side.",
        },
        {
          name: "Club House Sandwich",
          description:
            "Triple decker sandwich, filled with Canadian back bacon, smoked turkey, tomatoes and leaf lettuce.",
        },
        {
          name: "Grilled Chicken Caesar",
          description:
            "A North American favorite. This box lunch comes with sliced chicken breast, crispy romaine lettuce, croutons, Parmesan cheese and bacon bits.",
        },
        {
          name: "Cold Seafood Plate",
          description:
            "Contains jumbo shrimps, a lobster tail, smoked salmon, mussels and crab claws. These treats are served on a bed of lettuce and garnished with cappers, lemon wedges, red onions and cocktail sauce.",
        },
        {
          name: "Beef Tenderloin / Filet Mignon",
          description:
            "Black Angus beef tenderloin cooked to your liking and served on a bed of lettuce with rolls or on a Kaiser bun.",
        },
        {
          name: "Assorted Deluxe Sandwiches",
          description: "This wide selection may include tuna salad, egg salad, roast beef, turkey, ham and cheese.",
        },
        {
          name: "Seafood Box Lunch",
          description: "An assortment of salmon, tuna and crab salad sandwiches served on a variety of bread.",
        },
      ],
    },
    rightColumn: {
      title: "",
      items: [
        {
          name: "From the Italian Deli",
          description:
            "Italian style subs with a choice of cappicola, salami, mortadella or prosciutto served with your choice of cheese.",
        },
        {
          name: "Tri Salad Box Lunch",
          description:
            "Your choice of three different salads such as tuna, pasta, mixed greens or potato served in one container.",
        },
        {
          name: "Traditional American Philly Cheesesteak",
          description: "Accompanied with peppers and onions on a French roll.",
        },
        {
          name: "Julienne Salad / Chef Salad",
          description:
            "Strips of roast beef, Swiss and Cheddar cheese, Black Forest ham, and Ontario roast turkey served on a bed of lettuce and garnished with egg slices, tomatoes and olives.",
        },
        {
          name: "Grilled Vegetable Sandwiches",
          description:
            "An assortment of fresh garden vegetables spiced and grilled to perfection. This vegetable medley is served on your choice of bread.",
        },
        {
          name: "Deluxe California Wraps",
          description: "A selection of tomato, pesto or plain California wraps stuffed with your choice of filling.",
        },
      ],
    },
  },
  {
    name: "Entrées",
    subtitle: "All entrées are served with seasonal vegetables and your choice of starch.",
    leftColumn: {
      title: "Beef",
      items: [
        { name: "Filet Mignon" },
        { name: "Prime Rib" },
        { name: "New York Strip Steak" },
        { name: "Beef Tenderloin" },
        { name: "Beef Wellington" },
        { name: "Pepper Steak" },
        { name: "Beef Stroganoff" },
      ],
    },
    rightColumn: {
      title: "Chicken",
      items: [
        { name: "Chicken Cordon Bleu" },
        { name: "Chicken Kiev" },
        { name: "Chicken Marsala" },
        { name: "Chicken Piccata" },
        { name: "Grilled Chicken Breast" },
        { name: "Chicken Parmesan" },
        { name: "Roasted Half Chicken" },
      ],
    },
    sections: [
      {
        title: "Veal",
        items: ["Veal Parmesan", "Veal Marsala", "Veal Piccata", "Osso Buco", "Wiener Schnitzel"],
      },
      {
        title: "Pork",
        items: ["Pork Tenderloin", "Pork Chops", "Baby Back Ribs", "Pulled Pork"],
      },
      {
        title: "Lamb",
        items: ["Rack of Lamb", "Lamb Chops", "Lamb Shank", "Leg of Lamb"],
      },
      {
        title: "Seafood",
        items: [
          "Lobster Tail",
          "King Crab Legs",
          "Grilled Salmon",
          "Sea Bass",
          "Shrimp Scampi",
          "Stuffed Sole",
          "Coquilles St. Jacques",
        ],
      },
      {
        title: "Vegetarian",
        items: ["Vegetable Stir Fry", "Eggplant Parmesan", "Stuffed Peppers", "Mushroom Risotto", "Pasta Primavera"],
      },
      {
        title: "International",
        items: ["Pad Thai", "Butter Chicken", "Lamb Curry", "Beef Teriyaki", "Sweet and Sour Pork", "Moroccan Tagine"],
      },
    ],
  },
  {
    name: "Assorted Platters",
    subtitle: "",
    leftColumn: {
      title: "",
      items: [
        {
          name: "Fruit and Cheese",
          description:
            "Fresh melons, papaya, berries, pears, apples, grapes, citrus fruit and other seasonal fruit with various Canadian and imported cheese served with assorted crackers.",
        },
        {
          name: "Fresh Sliced Fruit",
          description:
            "A wide variety of seasonal and tropical fruit sliced and decorated to tantalize your taste buds.",
        },
        {
          name: "Cold Meats",
          description:
            "Black Forest ham, roast beef, turkey, salami and other assorted meats garnished with garden vegetables and your choice of breads and rolls.",
        },
        {
          name: "Sushi & Sashimi",
          description: "Assorted sushi and sashimi served with wasabi, Soya sauce and pickled ginger.",
        },
        {
          name: "Vegetable Crudité",
          description:
            "A selection of fresh mushrooms, cherry tomatoes, sweet peppers, carrot and celery sticks, cauliflower and broccoli. This selection is garnished with vegetable flowers and served with your choice of dipping sauce.",
        },
        {
          name: "Deluxe Cheese",
          description:
            "Each platter offers a variety of Canadian and imported cheeses, hard and soft, served with an assortment of crackers.",
        },
        {
          name: "Wings Wings Wings",
          description:
            "A great assortment of mild, medium, hot, suicide, honey garlic, jerked, BBQ and Louisiana chicken wings. This selection is accompanied by celery, carrot sticks and your choice of dipping sauces.",
        },
        {
          name: "Cold Canapés",
          description: "Handmade exotic canapés served on an assortment of breads and crackers.",
        },
      ],
    },
    rightColumn: {
      title: "",
      items: [
        {
          name: "Phyllo Pastry Platter",
          description:
            "A variety of fillings such as cheese, vegetable and meat wrapped in phyllo pastry. These items can be served hot or cold and accompanied with a selection of dipping sauces.",
        },
        {
          name: "Boneless Chicken Tenders",
          description:
            "Strips of chicken filet either grilled or battered and fried, served with your choice of dipping sauces.",
        },
        {
          name: "Jumbo Shrimp",
          description:
            "A generous portion of chilled Jumbo shrimps garnished with lemon wedges and served with cocktail sauce.",
        },
        {
          name: "Middle Eastern Delight",
          description: "Hummus, tzatziki and tabbouleh served with oven crisp pitas, black olives and crudités.",
        },
        {
          name: "Deluxe Sandwiches",
          description:
            "A selection of sandwiches ranging from popular choices like smoked salmon, turkey, roast beef, egg salad, ham and cheese, tuna salad, to the limits of your imagination. This selection is served on a variety of breads.",
        },
        {
          name: "Oriental Style Platter",
          description:
            "A collection of spring rolls, egg rolls, chicken balls and spare ribs served on a bed of lettuce and accompanied by various oriental sauces.",
        },
        {
          name: "Deluxe Seafood",
          description:
            "Lobster tails, jumbo shrimps, smoked salmon, mussels, two tomato halves stuffed with crab salad and shrimp salad, garnished with crab claws, star lemons and cocktail sauce, served on a bed of leaf lettuce.",
        },
      ],
    },
  },
  {
    name: "Appetizers",
    subtitle: "",
    leftColumn: {
      title: "Vegetarian: European",
      items: [
        { name: "Brushetta" },
        { name: "Spanakopita" },
        { name: "Vegetable Crudités" },
        { name: "Pierogies" },
        { name: "Quiche" },
        { name: "Potato Skins" },
        { name: "Fruit & Cheese" },
        { name: "Garlic Bread" },
        { name: "Mini Pizzas" },
        { name: "Cold Canapés" },
      ],
    },
    rightColumn: {
      title: "Vegetarian: North American",
      items: [{ name: "Guacamole" }, { name: "Mozzarella Sticks" }, { name: "Nachos" }, { name: "Jamaican Patties" }],
    },
    sections: [
      {
        title: "Vegetarian: Asian",
        items: ["Samosas", "Egg Rolls", "Spring Rolls", "Pakora", "Jalapeno Poppers"],
      },
      {
        title: "Seafood",
        items: [
          "Shrimp Cocktail",
          "Seafood Terrine",
          "Popcorn Shrimp",
          "Beluga Caviar",
          "Smoked Salmon",
          "Calamari",
          "Oysters",
        ],
      },
      {
        title: "Chicken",
        items: ["Buffalo Wings", "Breaded Chicken Tenders"],
      },
      {
        title: "Meat",
        items: ["Swedish Meatballs", "Kebabs", "Beef Satay", "Paté"],
      },
    ],
  },
  {
    name: "Soups",
    subtitle: "",
    leftColumn: {
      title: "Vegetarian Soups",
      items: [
        { name: "Potato Leek" },
        { name: "Lentil" },
        { name: "Split Pea" },
        { name: "French Onion" },
        { name: "Tomato" },
        { name: "Vegetable Minestrone" },
      ],
    },
    rightColumn: {
      title: "Chicken & Beef Soups",
      items: [
        { name: "Chicken Noodle" },
        { name: "Chicken Rice" },
        { name: "Beef Barley" },
        { name: "Beef Minestrone" },
      ],
    },
    sections: [
      {
        title: "Cream Soups",
        items: ["Cream of Broccoli", "Cream of Asparagus", "Cream of Mushroom", "Cream of Beet"],
      },
      {
        title: "Asian Soups",
        items: ["Won Ton Soup", "Hot & Sour Soup", "Lobster Bisque"],
      },
      {
        title: "Seafood Soups",
        items: ["Seafood Chowder", "Seafood Gumbo"],
      },
    ],
  },
  {
    name: "Salads",
    subtitle: "",
    leftColumn: {
      title: "",
      items: [
        { name: "Caesar Salad" },
        { name: "Chicken Caesar Salad" },
        { name: "Tossed Salad" },
        { name: "Julienne/Chef Salad" },
        { name: "California Mix Salad" },
        { name: "Baby Spinach Salad" },
        { name: "Shrimp Salad" },
      ],
    },
    rightColumn: {
      title: "",
      items: [
        { name: "Greek Salad" },
        { name: "Potato Salad" },
        { name: "Coleslaw Salad" },
        { name: "Tomato & Onion Salad" },
        { name: "Tri Color Pasta Salad" },
        { name: "Tofu Salad" },
        { name: "Tuna Salad" },
      ],
    },
  },
  {
    name: "Desserts",
    subtitle: "Birthday cakes available upon request.",
    leftColumn: {
      title: "Pastries, Cakes & Cookies",
      items: [
        { name: "Mini Pastries & Petit Fours" },
        { name: "French & Italian Pastries" },
        { name: "Tiramisu" },
        { name: "Chocolate Cake" },
        { name: "Baklava" },
        { name: "Poppy Seed Cake" },
        { name: "Brownies and Nanaimo Bars" },
        { name: "Assorted Home Baked Cookies" },
      ],
    },
    rightColumn: {
      title: "Cheese Cake",
      items: [
        { name: "New York Style Cheese Cake" },
        { name: "Strawberry Swirl Cheese Cake" },
        { name: "European Baked Cheese Cake" },
        { name: "Chocolate Swirl Cheese Cake" },
      ],
    },
    sections: [
      {
        title: "Pudding",
        items: ["Rice Pudding", "Tapioca Pudding", "Vanilla or Chocolate Pudding"],
      },
      {
        title: "Ice Cream, Sorbet & Frozen Yogurt",
        items: ["Various Flavors of Ice Cream, Sorbets and Frozen Yogurt"],
      },
      {
        title: "Pies",
        items: ["Lemon Meringue Pie", "Deep Dish Apple Pie", "Your Favorite Home Baked Pie"],
      },
      {
        title: "Fresh Fruit",
        items: [
          "Fresh Fruit Basket",
          "Half Cantaloupe, Papaya or Pineapple filled with fresh fruit salad",
          "Chocolate Covered Strawberries",
        ],
      },
    ],
  },
  {
    name: "Beverages",
    subtitle: "",
    leftColumn: {
      title: "",
      items: [
        { name: "Soft Drinks" },
        { name: "Sport Drinks" },
        { name: "Freshly Squeezed Juices" },
        { name: "Bottled Juices" },
        { name: "Milk, any kind" },
        { name: "Bottled Water" },
        { name: "Hot Water in a Thermos" },
        { name: "Variety of Teas and Gourmet Coffees" },
      ],
    },
  },
  {
    name: "Kids' Menu",
    subtitle: "We are happy to pick up food from your favorite restaurant",
    leftColumn: {
      title: "Lunch & Dinner",
      items: [
        { name: "Peanut Butter & Jelly Sandwich" },
        { name: "Tuna / Chicken / Egg Salad Sandwich" },
        { name: "Hot Dogs" },
        { name: "Spaghetti" },
        { name: "Dinosaur Shaped Chicken Nuggets" },
        { name: "Grilled Cheese Sandwich" },
        { name: "Hamburgers, garnished any way you like" },
        { name: "Macaroni & Cheese" },
        { name: "Individual Pizzas" },
        { name: "Chicken Fingers, your choice of dipping sauce" },
      ],
    },
    rightColumn: {
      title: "Breakfast",
      items: [
        { name: "Mini Cereals with Milk" },
        { name: "Toast with Butter and Jam" },
        { name: "Pancakes with Butter & Maple Syrup" },
        { name: "Chocolate & Hazelnut Spread Sandwich" },
        { name: "Fruit & Yogurt" },
        { name: "French Toast Sticks" },
        { name: "Mini Waffles with Maple Syrup" },
        { name: "Eggs, any style" },
      ],
    },
  },
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Breakfast")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-[105px]">
        <div className="flex">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-[73px]">
              <div className="p-6 space-y-2">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 px-3">Menu Categories</p>
                {menuCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setActiveCategory(category.name)
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base transition-all ${activeCategory === category.name
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <aside className="hidden lg:block w-56 xl:w-64 shrink-0 sticky top-[73px] h-[calc(100vh-73px)] border-r border-border/40 bg-linear-to-b from-secondary/30 to-secondary/10">
            <div className="p-6 h-full overflow-y-auto px-3.5">
              <div className="pb-4 border-b border-border/40 mb-[13px] ml-0">
                <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground/70 mb-1">Our Menu</p>
                <h2 className="font-serif text-2xl text-foreground">Categories</h2>
              </div>
              <nav className="space-y-0.5">
                {menuCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left px-4 py-2.5 rounded-md text-sm transition-all duration-200 ${activeCategory === category.name
                      ? "bg-primary text-primary-foreground font-medium shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 hover:pl-5"
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-h-[calc(100vh-73px)]">
            <div className="px-4 sm:px-6 lg:px-12 xl:px-16 py-8 lg:py-12">
              {menuCategories.map((category) => {
                if (category.name !== activeCategory) return null

                const currentCategory = category
                const hasLeftColumn = currentCategory.leftColumn && currentCategory.leftColumn.items.length > 0
                const hasRightColumn = currentCategory.rightColumn && currentCategory.rightColumn.items.length > 0
                const hasSections = currentCategory.sections && currentCategory.sections.length > 0
                const columnsCount =
                  (hasLeftColumn ? 1 : 0) +
                  (hasRightColumn ? 1 : 0) +
                  (hasSections ? currentCategory.sections!.length : 0)

                const isSparseContent = columnsCount === 1 && !hasSections

                return (
                  <div key={category.name}>
                    {/* Menu Header */}
                    <div className="text-center mb-10 lg:mb-14">
                      <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-3">
                        Skyway Catering
                      </p>
                      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-primary mb-5">
                        {currentCategory.name}
                      </h1>
                      <div className="w-16 h-px bg-primary/30 mx-auto mb-5" />
                      {currentCategory.subtitle && (
                        <p className="text-sm sm:text-base text-muted-foreground/80 italic max-w-xl mx-auto leading-relaxed">
                          {currentCategory.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Menu Content */}
                    {(() => {
                      const columnCountClass = isSparseContent
                        ? "columns-1 max-w-md mx-auto"
                        : columnsCount === 2
                          ? "columns-1 lg:columns-2 max-w-4xl mx-auto"
                          : "columns-1 sm:columns-2 xl:columns-3 max-w-6xl mx-auto"

                      return (
                        <div className={`${columnCountClass} gap-4 lg:gap-6 text-left`}>
                          {currentCategory.leftColumn && (
                            <div className="break-inside-avoid mb-4 lg:mb-6 bg-card/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 lg:p-8 border border-border/40 shadow-sm">
                              {currentCategory.leftColumn.title && (
                                <h3 className="text-lg sm:text-xl font-serif font-medium text-primary mb-2">
                                  {currentCategory.leftColumn.title}
                                </h3>
                              )}
                              {currentCategory.leftColumn.subtitle && (
                                <p className="text-xs sm:text-sm text-muted-foreground/70 mb-4 leading-relaxed">
                                  {currentCategory.leftColumn.subtitle}
                                </p>
                              )}
                              <div className="space-y-4">
                                {currentCategory.leftColumn.items.map((item, idx) => (
                                  <div key={idx} className="group">
                                    <h4
                                      className={`text-sm sm:text-base font-medium text-amber-800 ${item.description ? "mb-1" : ""}`}
                                    >
                                      {item.name}
                                    </h4>
                                    {item.description && (
                                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {currentCategory.rightColumn && currentCategory.rightColumn.items.length > 0 && (
                            <div className="break-inside-avoid mb-4 lg:mb-6 bg-card/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 lg:p-8 border border-border/40 shadow-sm">
                              {currentCategory.rightColumn.title && (
                                <h3 className="text-lg sm:text-xl font-serif font-medium text-primary mb-2">
                                  {currentCategory.rightColumn.title}
                                </h3>
                              )}
                              {currentCategory.rightColumn.subtitle && (
                                <p className="text-xs sm:text-sm text-muted-foreground/70 mb-4 leading-relaxed">
                                  {currentCategory.rightColumn.subtitle}
                                </p>
                              )}
                              <div className="space-y-4">
                                {currentCategory.rightColumn.items.map((item, idx) => (
                                  <div key={idx} className="group">
                                    <h4
                                      className={`text-sm sm:text-base font-medium text-amber-800 ${item.description ? "mb-1" : ""}`}
                                    >
                                      {item.name}
                                    </h4>
                                    {item.description && (
                                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {currentCategory.sections &&
                            currentCategory.sections.map((section, sectionIndex) => (
                              <div
                                key={sectionIndex}
                                className="break-inside-avoid mb-4 lg:mb-6 bg-card/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 lg:p-8 border border-border/40 shadow-sm"
                              >
                                <h3 className="text-lg sm:text-xl font-serif font-medium text-primary mb-2">
                                  {section.title}
                                </h3>
                                {section.subtitle && (
                                  <p className="text-xs sm:text-sm text-muted-foreground/70 mb-4 leading-relaxed">
                                    {section.subtitle}
                                  </p>
                                )}
                                <div className="space-y-3">
                                  {section.items.map((item, itemIndex) => (
                                    <div key={itemIndex}>
                                      <p className="text-sm sm:text-base font-medium text-amber-800">{item}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                        </div>
                      )
                    })()}
                  </div>
                )
              })}
            </div>

            {/* Menu Footer Text */}
            <div className="px-4 sm:px-6 lg:px-12 xl:px-16 pb-12">
              <div className="max-w-2xl mx-auto text-center border-t border-border/30 pt-10">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                  This menu has been compiled to reflect our most popular items and the multicultural nature of the
                  Greater Toronto Area. Please use it as a guide and do not hesitate to make personalized requests.
                </p>
                <p className="text-sm sm:text-base font-serif italic text-primary/80">
                  No job is too small or large for our catering team.
                </p>
                <p className="text-xs text-muted-foreground/60 mt-6">
                  Please inform us of any dietary restrictions or allergies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
