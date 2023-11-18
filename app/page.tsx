"use client";

import { useState } from "react";
import styles from "./page.module.css";

type CategoryProps = {
  name: string;
  ingredients: Ingredient[];
};

function Category({ name, ingredients }: CategoryProps) {
  if (!ingredients.length) return null;

  return (
    <div className={styles.category}>
      <h2>{name}</h2>

      <ul role="list" className={styles.ingredients}>
        {ingredients.map((ingredient) => (
          <li key={ingredient.name} className={styles.ingredient}>
            {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

type Ingredient = {
  id: number;
  name: string;
  category: string;
};

const INGREDIENTS: Ingredient[] = [
  {
    id: 1,
    name: "Black Rice",
    category: "base",
  },
  {
    id: 2,
    name: "White Rice",
    category: "base",
  },
  {
    id: 3,
    name: "Brown Rice",
    category: "base",
  },
  {
    id: 4,
    name: "Quinoa",
    category: "base",
  },
  {
    id: 5,
    name: "Barley",
    category: "base",
  },
  {
    id: 6,
    name: "Buckwheat",
    category: "base",
  },
  {
    id: 7,
    name: "Millet",
    category: "base",
  },
  {
    id: 8,
    name: "Oats",
    category: "base",
  },
  {
    id: 9,
    name: "Popcorn",
    category: "base",
  },
  {
    id: 10,
    name: "Rye",
    category: "base",
  },
  {
    id: 11,
    name: "Teff",
    category: "base",
  },
  {
    id: 12,
    name: "Whole-Wheat Pasta",
    category: "base",
  },
  {
    id: 13,
    name: "Wild Rice",
    category: "base",
  },

  {
    id: 14,
    name: "Tofu",
    category: "protein",
  },
  {
    id: 15,
    name: "Falafel",
    category: "protein",
  },
  {
    id: 16,
    name: "Black Beans",
    category: "proteins",
  },
  {
    id: 17,
    name: "Black-Eyed Peas",
    category: "proteins",
  },
  {
    id: 18,
    name: "Butter Beans",
    category: "proteins",
  },
  {
    id: 19,
    name: "Cannellini Beans",
    category: "proteins",
  },
  {
    id: 20,
    name: "Great Northern Beans",
    category: "proteins",
  },
  {
    id: 21,
    name: "Kidney Beans",
    category: "proteins",
  },
  {
    id: 22,
    name: "Navy Beans",
    category: "proteins",
  },
  {
    id: 23,
    name: "Pinto Beans",
    category: "proteins",
  },
  {
    id: 24,
    name: "Small Red Beans",
    category: "proteins",
  },
  {
    id: 25,
    name: "Lentils",
    category: "protein",
  },
  {
    id: 26,
    name: "Miso",
    category: "protein",
  },
  {
    id: 27,
    name: "Tempeh",
    category: "protein",
  },
  {
    id: 154,
    name: "Chickpeas",
    category: "protein",
  },
  {
    id: 33,
    name: "Edamame",
    category: "protein",
  },

  {
    id: 28,
    name: "Hummus",
    category: "accompaniement",
  },
  {
    id: 29,
    name: "Cucumber",
    category: "accompaniement",
  },
  {
    id: 30,
    name: "Carrots",
    category: "accompaniement",
  },
  {
    id: 31,
    name: "Onion",
    category: "accompaniement",
  },
  {
    id: 32,
    name: "Avocado",
    category: "accompaniement",
  },
  {
    id: 34,
    name: "English Peas",
    category: "accompaniement",
  },
  {
    id: 35,
    name: "Split Peas",
    category: "accompaniement",
  },
  {
    id: 36,
    name: "Apples",
    category: "accompaniement",
  },
  {
    id: 37,
    name: "Dried Apricots",
    category: "accompaniement",
  },
  {
    id: 38,
    name: "Bananas",
    category: "accompaniement",
  },
  {
    id: 39,
    name: "Cantaloupe",
    category: "accompaniement",
  },
  {
    id: 40,
    name: "Clementines",
    category: "accompaniement",
  },
  {
    id: 41,
    name: "Dates",
    category: "accompaniement",
  },
  {
    id: 42,
    name: "Dried Figs",
    category: "accompaniement",
  },
  {
    id: 43,
    name: "Grapefruit",
    category: "accompaniement",
  },
  {
    id: 44,
    name: "Honeydrew",
    category: "accompaniement",
  },
  {
    id: 45,
    name: "Kiwifruit",
    category: "accompaniement",
  },
  {
    id: 46,
    name: "Lychees",
    category: "accompaniement",
  },
  {
    id: 47,
    name: "Mangos",
    category: "accompaniement",
  },
  {
    id: 48,
    name: "Nectarines",
    category: "accompaniement",
  },
  {
    id: 49,
    name: "Oranges",
    category: "accompaniement",
  },
  {
    id: 50,
    name: "Papaya",
    category: "accompaniement",
  },
  {
    id: 51,
    name: "Passion Fruit",
    category: "accompaniement",
  },
  {
    id: 52,
    name: "Peaches",
    category: "accompaniement",
  },
  {
    id: 53,
    name: "Pears",
    category: "accompaniement",
  },
  {
    id: 54,
    name: "Pineapple",
    category: "accompaniement",
  },
  {
    id: 55,
    name: "Plums",
    category: "accompaniement",
  },
  {
    id: 56,
    name: "Pomegranates",
    category: "accompaniement",
  },
  {
    id: 57,
    name: "Pluots",
    category: "accompaniement",
  },
  {
    id: 58,
    name: "Prunes",
    category: "accompaniement",
  },
  {
    id: 59,
    name: "Tangerines",
    category: "accompaniement",
  },
  {
    id: 60,
    name: "Watermelon",
    category: "accompaniement",
  },
  {
    id: 61,
    name: "Arugula",
    category: "accompaniement",
  },
  {
    id: 62,
    name: "Bok Choy",
    category: "accompaniement",
  },
  {
    id: 63,
    name: "Broccoli",
    category: "accompaniement",
  },
  {
    id: 64,
    name: "Brussels Sprouts",
    category: "accompaniement",
  },
  {
    id: 65,
    name: "Cabbage",
    category: "accompaniement",
  },
  {
    id: 66,
    name: "Cauliflower",
    category: "accompaniement",
  },
  {
    id: 67,
    name: "Collard Greens",
    category: "accompaniement",
  },
  {
    id: 68,
    name: "Horseradish",
    category: "accompaniement",
  },
  {
    id: 69,
    name: "Kale",
    category: "accompaniement",
  },
  {
    id: 70,
    name: "Mustard Greens",
    category: "accompaniement",
  },
  {
    id: 71,
    name: "Radishes",
    category: "accompaniement",
  },
  {
    id: 72,
    name: "Turnip Greens",
    category: "accompaniement",
  },
  {
    id: 73,
    name: "Artichokes",
    category: "accompaniement",
  },
  {
    id: 74,
    name: "Asperagus",
    category: "accompaniement",
  },
  {
    id: 75,
    name: "Beets",
    category: "accompaniement",
  },
  {
    id: 77,
    name: "Bell Peppers",
    category: "accompaniement",
  },
  {
    id: 78,
    name: "Corn",
    category: "accompaniement",
  },
  {
    id: 79,
    name: "Garlic",
    category: "accompaniement",
  },
  {
    id: 80,
    name: "Mushrooms",
    category: "accompaniement",
  },
  {
    id: 81,
    name: "Okra",
    category: "accompaniement",
  },
  {
    id: 82,
    name: "Purple Potatoes",
    category: "accompaniement",
  },
  {
    id: 83,
    name: "Pumpkin",
    category: "accompaniement",
  },
  {
    id: 84,
    name: "Sea Vegetables",
    category: "accompaniement",
  },
  {
    id: 85,
    name: "Snap Peas",
    category: "accompaniement",
  },
  {
    id: 86,
    name: "Squash",
    category: "accompaniement",
  },
  {
    id: 87,
    name: "Sweet Potatoes",
    category: "accompaniement",
  },
  {
    id: 88,
    name: "Tomatoes",
    category: "accompaniement",
  },
  {
    id: 89,
    name: "Zucchini",
    category: "accompaniement",
  },

  {
    id: 90,
    name: "Watercress",
    category: "topping",
  },
  {
    id: 92,
    name: "Walnut",
    category: "topping",
  },
  {
    id: 93,
    name: "Almonds",
    category: "topping",
  },
  {
    id: 94,
    name: "Brazil Nuts",
    category: "topping",
  },
  {
    id: 95,
    name: "Cashews",
    category: "topping",
  },
  {
    id: 96,
    name: "Chia Seeds",
    category: "topping",
  },
  {
    id: 97,
    name: "Hazelnuts",
    category: "topping",
  },
  {
    id: 98,
    name: "Hemp Seeds",
    category: "topping",
  },
  {
    id: 99,
    name: "Macadamia Nuts",
    category: "topping",
  },
  {
    id: 100,
    name: "Pecans",
    category: "topping",
  },
  {
    id: 101,
    name: "Pistachios",
    category: "topping",
  },
  {
    id: 102,
    name: "Pumpkin Seeds",
    category: "topping",
  },
  {
    id: 103,
    name: "Sesame Seeds",
    category: "topping",
  },
  {
    id: 104,
    name: "Sunflower Seeds",
    category: "topping",
  },
  {
    id: 105,
    name: "Dried Tomato",
    category: "topping",
  },
  {
    id: 106,
    name: "Parsley",
    category: "topping",
  },
  {
    id: 108,
    name: "Taccos",
    category: "topping",
  },
  {
    id: 109,
    name: "Flaxseeds",
    category: "topping",
  },
  {
    id: 110,
    name: "Açai Berries",
    category: "topping",
  },
  {
    id: 111,
    name: "Barberries",
    category: "topping",
  },
  {
    id: 112,
    name: "Blackberries",
    category: "topping",
  },
  {
    id: 113,
    name: "Blueberries",
    category: "topping",
  },
  {
    id: 114,
    name: "Cherries",
    category: "topping",
  },
  {
    id: 115,
    name: "Concord Grapes",
    category: "topping",
  },
  {
    id: 116,
    name: "Cranberries",
    category: "topping",
  },
  {
    id: 117,
    name: "Goji Berries",
    category: "topping",
  },
  {
    id: 118,
    name: "Kumquats",
    category: "topping",
  },
  {
    id: 119,
    name: "Mulberries",
    category: "topping",
  },
  {
    id: 120,
    name: "Raspberries",
    category: "topping",
  },
  {
    id: 121,
    name: "Strawberries",
    category: "topping",
  },
  {
    id: 122,
    name: "Allspice",
    category: "topping",
  },
  {
    id: 123,
    name: "Basil",
    category: "topping",
  },
  {
    id: 124,
    name: "Bay Leaves",
    category: "topping",
  },
  {
    id: 125,
    name: "Cardamon",
    category: "topping",
  },
  {
    id: 126,
    name: "Chili Powder",
    category: "topping",
  },
  {
    id: 127,
    name: "Cilantro",
    category: "topping",
  },
  {
    id: 128,
    name: "Cinnamon",
    category: "topping",
  },
  {
    id: 129,
    name: "Cloves",
    category: "topping",
  },
  {
    id: 130,
    name: "Coriander",
    category: "topping",
  },
  {
    id: 131,
    name: "Cumin",
    category: "topping",
  },
  {
    id: 132,
    name: "Curry Powder",
    category: "topping",
  },
  {
    id: 133,
    name: "Dill",
    category: "topping",
  },
  {
    id: 134,
    name: "Fenugreek",
    category: "topping",
  },
  {
    id: 135,
    name: "Ginger",
    category: "topping",
  },
  {
    id: 136,
    name: "Lemongrass",
    category: "topping",
  },
  {
    id: 137,
    name: "Marjoram",
    category: "topping",
  },
  {
    id: 138,
    name: "Mustard Powder",
    category: "topping",
  },
  {
    id: 139,
    name: "Nutmeg",
    category: "topping",
  },
  {
    id: 140,
    name: "Oregano",
    category: "topping",
  },
  {
    id: 141,
    name: "Smoked Paprika",
    category: "topping",
  },
  {
    id: 142,
    name: "Pepper",
    category: "topping",
  },
  {
    id: 143,
    name: "Peppermint",
    category: "topping",
  },
  {
    id: 144,
    name: "Rosemary",
    category: "topping",
  },
  {
    id: 145,
    name: "Saffron",
    category: "topping",
  },
  {
    id: 146,
    name: "Sage",
    category: "topping",
  },
  {
    id: 147,
    name: "Thyme",
    category: "topping",
  },
  {
    id: 148,
    name: "Turmeric",
    category: "topping",
  },
  {
    id: 149,
    name: "Vanilla",
    category: "topping",
  },
  {
    id: 152,
    name: "Chilly Flakes",
    category: "topping",
  },

  {
    id: 150,
    name: "Joghurt",
    category: "sauce",
  },
  {
    id: 151,
    name: "Strained Tomatoes",
    category: "sauce",
  },
  {
    id: 153,
    name: "Lime Juice",
    category: "sauce",
  },
  {
    id: 91,
    name: "Lemon Juice",
    category: "sauce",
  },
];

type GroupIngredient = {
  group: string;
  ingredientId: number;
};

const DAILYDOZEN: GroupIngredient[] = [
  { group: "Beans", ingredientId: 16 },
  { group: "Beans", ingredientId: 17 },
  { group: "Beans", ingredientId: 18 },
  { group: "Beans", ingredientId: 19 },
  { group: "Beans", ingredientId: 154 },
  { group: "Beans", ingredientId: 33 },
  { group: "Beans", ingredientId: 34 },
  { group: "Beans", ingredientId: 20 },
  { group: "Beans", ingredientId: 21 },
  { group: "Beans", ingredientId: 25 },
  { group: "Beans", ingredientId: 26 },
  { group: "Beans", ingredientId: 22 },
  { group: "Beans", ingredientId: 23 },
  { group: "Beans", ingredientId: 24 },
  { group: "Beans", ingredientId: 35 },
  { group: "Beans", ingredientId: 27 },
  { group: "Beans", ingredientId: 28 },
  { group: "Beans", ingredientId: 14 },
  { group: "Beans", ingredientId: 15 },

  { group: "Berries", ingredientId: 110 },
  { group: "Berries", ingredientId: 111 },
  { group: "Berries", ingredientId: 112 },
  { group: "Berries", ingredientId: 113 },
  { group: "Berries", ingredientId: 114 },
  { group: "Berries", ingredientId: 115 },
  { group: "Berries", ingredientId: 116 },
  { group: "Berries", ingredientId: 117 },
  { group: "Berries", ingredientId: 118 },
  { group: "Berries", ingredientId: 119 },
  { group: "Berries", ingredientId: 120 },
  { group: "Berries", ingredientId: 121 },

  { group: "Cruciferous Vegetables", ingredientId: 61 },
  { group: "Cruciferous Vegetables", ingredientId: 62 },
  { group: "Cruciferous Vegetables", ingredientId: 63 },
  { group: "Cruciferous Vegetables", ingredientId: 64 },
  { group: "Cruciferous Vegetables", ingredientId: 65 },
  { group: "Cruciferous Vegetables", ingredientId: 66 },
  { group: "Cruciferous Vegetables", ingredientId: 67 },
  { group: "Cruciferous Vegetables", ingredientId: 68 },
  { group: "Cruciferous Vegetables", ingredientId: 69 },
  { group: "Cruciferous Vegetables", ingredientId: 70 },
  { group: "Cruciferous Vegetables", ingredientId: 71 },
  { group: "Cruciferous Vegetables", ingredientId: 72 },
  { group: "Cruciferous Vegetables", ingredientId: 90 },

  { group: "Other Vegetables", ingredientId: 73 },
  { group: "Other Vegetables", ingredientId: 74 },
  { group: "Other Vegetables", ingredientId: 75 },
  { group: "Other Vegetables", ingredientId: 77 },
  { group: "Other Vegetables", ingredientId: 78 },
  { group: "Other Vegetables", ingredientId: 79 },
  { group: "Other Vegetables", ingredientId: 80 },
  { group: "Other Vegetables", ingredientId: 81 },
  { group: "Other Vegetables", ingredientId: 31 },
  { group: "Other Vegetables", ingredientId: 82 },
  { group: "Other Vegetables", ingredientId: 83 },
  { group: "Other Vegetables", ingredientId: 84 },
  { group: "Other Vegetables", ingredientId: 85 },
  { group: "Other Vegetables", ingredientId: 86 },
  { group: "Other Vegetables", ingredientId: 87 },
  { group: "Other Vegetables", ingredientId: 88 },
  { group: "Other Vegetables", ingredientId: 89 },
  { group: "Other Vegetables", ingredientId: 29 },
  { group: "Other Vegetables", ingredientId: 30 },

  { group: "Flaxseeds", ingredientId: 109 },

  { group: "Nuts and Seeds", ingredientId: 93 },
  { group: "Nuts and Seeds", ingredientId: 94 },
  { group: "Nuts and Seeds", ingredientId: 95 },
  { group: "Nuts and Seeds", ingredientId: 96 },
  { group: "Nuts and Seeds", ingredientId: 97 },
  { group: "Nuts and Seeds", ingredientId: 98 },
  { group: "Nuts and Seeds", ingredientId: 99 },
  { group: "Nuts and Seeds", ingredientId: 100 },
  { group: "Nuts and Seeds", ingredientId: 101 },
  { group: "Nuts and Seeds", ingredientId: 102 },
  { group: "Nuts and Seeds", ingredientId: 103 },
  { group: "Nuts and Seeds", ingredientId: 104 },
  { group: "Nuts and Seeds", ingredientId: 92 },

  { group: "Herbs and Spices", ingredientId: 122 },
  { group: "Herbs and Spices", ingredientId: 123 },
  { group: "Herbs and Spices", ingredientId: 124 },
  { group: "Herbs and Spices", ingredientId: 125 },
  { group: "Herbs and Spices", ingredientId: 126 },
  { group: "Herbs and Spices", ingredientId: 127 },
  { group: "Herbs and Spices", ingredientId: 128 },
  { group: "Herbs and Spices", ingredientId: 129 },
  { group: "Herbs and Spices", ingredientId: 130 },
  { group: "Herbs and Spices", ingredientId: 131 },
  { group: "Herbs and Spices", ingredientId: 132 },
  { group: "Herbs and Spices", ingredientId: 133 },
  { group: "Herbs and Spices", ingredientId: 134 },
  { group: "Herbs and Spices", ingredientId: 135 },
  { group: "Herbs and Spices", ingredientId: 136 },
  { group: "Herbs and Spices", ingredientId: 137 },
  { group: "Herbs and Spices", ingredientId: 138 },
  { group: "Herbs and Spices", ingredientId: 139 },
  { group: "Herbs and Spices", ingredientId: 140 },
  { group: "Herbs and Spices", ingredientId: 141 },
  { group: "Herbs and Spices", ingredientId: 142 },
  { group: "Herbs and Spices", ingredientId: 143 },
  { group: "Herbs and Spices", ingredientId: 144 },
  { group: "Herbs and Spices", ingredientId: 145 },
  { group: "Herbs and Spices", ingredientId: 146 },
  { group: "Herbs and Spices", ingredientId: 147 },
  { group: "Herbs and Spices", ingredientId: 148 },
  { group: "Herbs and Spices", ingredientId: 149 },
  { group: "Herbs and Spices", ingredientId: 106 },

  { group: "Whole Grains", ingredientId: 5 },
  { group: "Whole Grains", ingredientId: 3 },
  { group: "Whole Grains", ingredientId: 6 },
  { group: "Whole Grains", ingredientId: 7 },
  { group: "Whole Grains", ingredientId: 8 },
  { group: "Whole Grains", ingredientId: 9 },
  { group: "Whole Grains", ingredientId: 10 },
  { group: "Whole Grains", ingredientId: 11 },
  { group: "Whole Grains", ingredientId: 12 },
  { group: "Whole Grains", ingredientId: 13 },
  { group: "Whole Grains", ingredientId: 4 },
  { group: "Whole Grains", ingredientId: 1 },

  { group: "Other Fruits", ingredientId: 36 },
  { group: "Other Fruits", ingredientId: 37 },
  { group: "Other Fruits", ingredientId: 32 },
  { group: "Other Fruits", ingredientId: 38 },
  { group: "Other Fruits", ingredientId: 39 },
  { group: "Other Fruits", ingredientId: 40 },
  { group: "Other Fruits", ingredientId: 41 },
  { group: "Other Fruits", ingredientId: 42 },
  { group: "Other Fruits", ingredientId: 43 },
  { group: "Other Fruits", ingredientId: 44 },
  { group: "Other Fruits", ingredientId: 45 },
  { group: "Other Fruits", ingredientId: 46 },
  { group: "Other Fruits", ingredientId: 47 },
  { group: "Other Fruits", ingredientId: 48 },
  { group: "Other Fruits", ingredientId: 49 },
  { group: "Other Fruits", ingredientId: 50 },
  { group: "Other Fruits", ingredientId: 51 },
  { group: "Other Fruits", ingredientId: 52 },
  { group: "Other Fruits", ingredientId: 53 },
  { group: "Other Fruits", ingredientId: 54 },
  { group: "Other Fruits", ingredientId: 55 },
  { group: "Other Fruits", ingredientId: 56 },
  { group: "Other Fruits", ingredientId: 57 },
  { group: "Other Fruits", ingredientId: 58 },
  { group: "Other Fruits", ingredientId: 59 },
  { group: "Other Fruits", ingredientId: 60 },
];

function allByCategory(db: Ingredient[], category: string): Ingredient[] {
  return db.filter((entry) => entry.category === category);
}

function sampleSize<T>(array: T[], size: number): T[] {
  return array.sort(() => 0.5 - Math.random()).slice(0, size);
}

function sortIngredients(a: Ingredient, b: Ingredient): number {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

function randomIngredients(
  category: string,
  min: number,
  max: number
): Ingredient[] {
  return sampleSize(
    allByCategory(INGREDIENTS, category),
    getRandomIntInclusive(min, max)
  ).sort(sortIngredients);
}

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

type Category = "base" | "protein" | "accompaniement" | "topping" | "sauce";

type BowlProps = {
  categories: { name: string; ingredients: Ingredient[] }[];
};

function Bowl({ categories }: BowlProps) {
  return (
    <div className={styles.bowl}>
      {categories.map(({ name, ingredients }) => (
        <Category key={name} name={name} ingredients={ingredients} />
      ))}
    </div>
  );
}

type ProgressBarProps = {
  completed: number;
  servings: number;
};

function ProgressBar({ completed, servings }: ProgressBarProps) {
  const barStyle = {
    width: `${100 / (3 / servings)}%`,
  };
  const progressStyle = { width: `${completed}%` };

  return (
    <div className={styles.progressbar} style={barStyle}>
      <span className={styles.progress} style={progressStyle}></span>
    </div>
  );
}

function Group({
  name,
  servings,
  completed,
}: {
  name: string;
  servings: number;
  completed: number;
}) {
  return (
    <div className={styles.group}>
      <span className={styles.groupName}>{name}</span>

      <div className={styles.progressBarContainer}>
        <ProgressBar completed={completed} servings={servings} />
      </div>
    </div>
  );
}

function DailyChecklist({ ingredients }: { ingredients: Ingredient[] }) {
  if (!ingredients.length) return null;

  const count: { [key: string]: number } = {};
  let total: number = 0;
  const maxServings: number = 18;

  for (let ingredient of ingredients) {
    const dailyDozen = DAILYDOZEN.find(
      (entry) => entry.ingredientId === ingredient.id
    );

    if (!dailyDozen) continue;

    count[dailyDozen.group] = (count[dailyDozen.group] || 0) + 1;
    total++;
  }

  console.log(count);

  const additionalServings: number = Math.max(0, total - maxServings);

  const groups = [
    {
      name: "Beans",
      servings: 3,
      completed: 2,
    },
    {
      name: "Berries",
      servings: 1,
      completed: 1,
    },
    {
      name: "Other Fruits",
      servings: 3,
      completed: 1,
    },
    {
      name: "Cruciferous Vegetables",
      servings: 1,
      completed: 1,
    },
    {
      name: "Greens",
      servings: 2,
      completed: 2,
    },
    {
      name: "Other Vegetables",
      servings: 2,
      completed: 2,
    },
    {
      name: "Flaxseeds",
      servings: 1,
      completed: 1,
    },
    {
      name: "Nuts and Seeds",
      servings: 1,
      completed: 1,
    },
    {
      name: "Herbs and Spices",
      servings: 1,
      completed: 1,
    },
    {
      name: "Whole Grains",
      servings: 3,
      completed: 2,
    },
  ];

  function getCompleted(name: string, servings: number): number {
    return ((count[name] || 0) / servings) * 100;
  }

  return (
    <div className={styles.dailyChecklist}>
      <h2>
        Daily Checklist <span className={styles.total}>{total}</span>
        <span>/{maxServings}</span>
        {additionalServings > 0 && <span> +{additionalServings}</span>}
      </h2>

      <p>based on Dr. Gregor&apos;s Daily Dozen</p>

      {groups.map((group) => (
        <Group
          key={group.name}
          name={group.name}
          servings={group.servings}
          completed={getCompleted(group.name, group.servings)}
        />
      ))}
    </div>
  );
}

function Generator() {
  const [baseIngredients, setBaseIngredients] = useState<Ingredient[]>([]);
  const [proteinIngredients, setProteinIngredients] = useState<Ingredient[]>(
    []
  );
  const [accompaniementIngredients, setAccompaniementIngredients] = useState<
    Ingredient[]
  >([]);
  const [toppingIngredients, setToppingIngredients] = useState<Ingredient[]>(
    []
  );
  const [sauceIngredients, setSauceIngredients] = useState<Ingredient[]>([]);

  const definitions = [
    {
      category: "base",
      ingredients: baseIngredients,
      setter: setBaseIngredients,
      min: 1,
      max: 2,
    },
    {
      category: "protein",
      ingredients: proteinIngredients,
      setter: setProteinIngredients,
      min: 1,
      max: 2,
    },
    {
      category: "accompaniement",
      ingredients: accompaniementIngredients,
      setter: setAccompaniementIngredients,
      min: 2,
      max: 4,
    },
    {
      category: "topping",
      ingredients: toppingIngredients,
      setter: setToppingIngredients,
      min: 2,
      max: 3,
    },
    {
      category: "sauce",
      ingredients: sauceIngredients,
      setter: setSauceIngredients,
      min: 1,
      max: 1,
    },
  ];

  function handleClick() {
    for (let definition of definitions) {
      definition.setter(
        randomIngredients(definition.category, definition.min, definition.max)
      );
    }
  }

  const ingredients = [];
  const categories = [];

  for (let definition of definitions) {
    ingredients.push(...definition.ingredients);

    categories.push({
      name: definition.category,
      ingredients: definition.ingredients,
    });
  }

  return (
    <>
      <button
        className={styles.generateButton}
        type="button"
        onClick={handleClick}
      >
        <div className={styles.generateButtonStateLayer} />
        <span className={styles.generateButtonLabel}>Generate</span>
      </button>

      <Bowl categories={categories} />

      <DailyChecklist ingredients={ingredients} />
    </>
  );
}

function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.display}>Bowl Generator</h1>

      <Generator />
    </main>
  );
}

export default Home;
