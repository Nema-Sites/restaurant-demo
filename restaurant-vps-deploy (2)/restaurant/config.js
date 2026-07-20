/* =====================================================================
   RESTAURANT CONFIG — edit this file to re-theme the whole demo for a
   different restaurant. Every page reads from this object, so changing
   values here updates the name, menu, hours, and contact info everywhere.
   ===================================================================== */

const RESTAURANT = {
  name: "Ember & Oak",
  tagline: "Wood-fired, seasonal, unfussy.",
  cuisine: "Modern American · Wood-fired grill",
  heroLine: "A wood-fired kitchen built around one thing: ingredients that don't need to hide behind anything.",
  about: "Ember & Oak opened with a simple idea — cook everything over live fire, source as close to home as the season allows, and keep the menu short enough that every dish gets it right. The dining room seats 68, the bar seats 12, and the wood-fired oven runs from noon until close.",
  phone: "+27 11 555 0142",
  email: "reservations@emberandoak.demo",
  address: "14 Baker Street, Rosebank, Johannesburg",
  hours: [
    { d: "Mon – Thu", h: "12:00 – 22:00" },
    { d: "Fri – Sat", h: "12:00 – 23:00" },
    { d: "Sun", h: "12:00 – 20:00" }
  ],

  // used as localStorage key prefixes so multiple demo restaurants
  // running in the same browser don't collide with each other's data
  storageKey: "emberoak",

  menu: [
    {
      category: "Starters",
      items: [
        { id: "s1", name: "Charred Octopus", price: 145, desc: "Smoked paprika, white bean purée, lemon oil", tag: "Popular" },
        { id: "s2", name: "Burrata & Fire-Roasted Tomato", price: 110, desc: "Basil oil, sourdough crumb, aged balsamic" },
        { id: "s3", name: "Wood-Fired Flatbread", price: 85, desc: "Whipped ricotta, honey, chili, thyme" },
        { id: "s4", name: "Beef Tartare", price: 135, desc: "Smoked egg yolk, capers, rye crisp" }
      ]
    },
    {
      category: "Mains",
      items: [
        { id: "m1", name: "Dry-Aged Ribeye 300g", price: 385, desc: "Bone marrow butter, charred onion, jus", tag: "Chef's pick" },
        { id: "m2", name: "Whole Grilled Trout", price: 245, desc: "Brown butter, almonds, preserved lemon" },
        { id: "m3", name: "Wood-Roasted Half Chicken", price: 215, desc: "Smoked chili glaze, pickled slaw" },
        { id: "m4", name: "Charred Cauliflower Steak", price: 175, desc: "Tahini, pomegranate, herb oil", tag: "Vegetarian" }
      ]
    },
    {
      category: "Wood-Fired Pizza",
      items: [
        { id: "p1", name: "Nduja & Honey", price: 165, desc: "Fior di latte, calabrian chili, hot honey" },
        { id: "p2", name: "Wild Mushroom", price: 155, desc: "Taleggio, thyme, truffle oil", tag: "Vegetarian" },
        { id: "p3", name: "Margherita", price: 130, desc: "San marzano, fior di latte, basil" }
      ]
    },
    {
      category: "Desserts",
      items: [
        { id: "d1", name: "Basque Burnt Cheesecake", price: 95, desc: "Salted caramel, sea salt" },
        { id: "d2", name: "Dark Chocolate Tart", price: 90, desc: "Espresso cream, hazelnut praline" }
      ]
    }
  ],

  team: [
    { name: "Naledi Khumalo", role: "Head Chef" },
    { name: "Marco Silva", role: "Sous Chef" },
    { name: "Rethabile Mokoena", role: "Restaurant Manager" }
  ]
};
