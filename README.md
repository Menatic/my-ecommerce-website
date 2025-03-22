# 🛍️ Simplified Product Display Web Application

## 📌 Project Overview
This is a **highly responsive** e-commerce frontend web application built with **React.js + Vite** and **Bootstrap**. The application allows users to browse products, view details, and manage a shopping cart. Optional features include backend integration and a barcode scanner.

## 🚀 Features
### **Core Features:**
1. **Product List Page**
   - Displays products with images, names, brands, and prices.
   - Responsive design (desktop & mobile).
   - "Add to Bag" button for each product.

2. **Product Detail View**
   - Clicking on a product opens a modal/page with full details (description, price, reviews).
   - Option to "Add to Bag" directly from this view.

3. **Shopping Cart ("My Bag")**
   - Accessible from the navbar.
   - Displays selected products, their quantities, and individual prices.
   - Shows the total price.
   - Allows users to remove items or adjust quantities.

4. **State Management**
   - Uses **React’s useState and Context API** for state management.
   - Supports cart state persistence.

---
## 🛠️ Tech Stack
### **Frontend**
- **React.js + Vite** (for a fast and optimized frontend setup)
- **Bootstrap** (for rapid UI development)
- **React Router** (for navigation)

---
## 🏗️ Project Setup & Installation
Follow these steps to run the project locally:

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Menatic/my-ecommerce-website.git
cd my-ecommerce-website
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run the Development Server**
```sh
npm run dev
---
## 📜 Folder Structure
```
my-ecommerce-website/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components (ProductList, ProductDetail, MyBag)
│   ├── context/       # Global state management (CartContext)
│   ├── assets/        # Images and icons
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point for React + Vite
├── .gitignore         # Files to ignore in Git
├── package.json       # Dependencies and scripts
├── README.md          # Project documentation
```

---
## 🎖️ Design Choices & UX
- **Minimalistic UI:** Clean design using Bootstrap.
- **Mobile Responsiveness:** Fully optimized for all screen sizes.
- **User-Friendly Cart Management:** Users can easily modify items in the cart.
- **Fast & Lightweight:** Optimized with React + Vite for better performance.
---

---
## 👨‍💻 Contribution Guide
Want to contribute? Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Added new feature"`).
4. Push to your fork (`git push origin feature-branch`).
5. Open a Pull Request.

---
## 📜 License
This project is licensed under the MIT License.

🚀 **Enjoy building and happy coding!**

