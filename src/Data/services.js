import foodImage from "../assets/food.webp";
import medicineImage from "../assets/medicine.webp";
import laundryImage from "../assets/laundry.webp";
import groceryImage from "../assets/grocery.webp";

export const SERVICES = [
  {
    id: 1,
    title: "Food",
    content: "Enjoy delicious meals delivered straight to your campus.",
    description:
      "QuickVerse provides food delivery services across campuses, ensuring students have access to fast and convenient meal options.",
    image: foodImage,
  },
  {
    id: 2,
    title: "Pharmacy",
    content: "Access essential medications at your convenience.",
    description:
      "QuickVerse brings pharmacy services to campuses, making essential medications and health products easily accessible to students.",
    image: medicineImage,
  },
  {
    id: 3,
    title: "Laundry",
    content: "Simplify your laundry needs with reliable services.",
    description:
      "QuickVerse offers campus-wide laundry services, providing students with hassle-free and affordable laundry solutions.",
    image: laundryImage,
  },
  {
    id: 4,
    title: "Grocery",
    content: "Shop for groceries from the comfort of your campus.",
    description:
      "QuickVerse brings grocery services to campuses, delivering essential groceries directly to students' doors.",
    image: groceryImage,
  },
];
