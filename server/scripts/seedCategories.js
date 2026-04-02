const mongoose = require("mongoose")
const Category = require("../models/Category")
require("dotenv").config({ path: "../.env" }) // ← add path

const categories = [
  { name: "Web Development", description: "HTML, CSS, JavaScript, React, Node.js" },
  { name: "Mobile Development", description: "Android, iOS, Flutter, React Native" },
  { name: "Data Science", description: "Python, ML, AI, Data Analysis" },
  { name: "Cloud Computing", description: "AWS, Azure, GCP, DevOps" },
  { name: "Cybersecurity", description: "Ethical Hacking, Network Security" },
  { name: "Programming", description: "Python, Java, C++, DSA" },
  { name: "UI/UX Design", description: "Figma, Adobe XD, Design Systems" },
  { name: "Database", description: "MySQL, MongoDB, PostgreSQL" },
]

const seedCategories = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("DB Connected")

    await Category.insertMany(categories)
    console.log("✅ Categories seeded successfully!")

    process.exit(0)
  } catch (error) {
    console.log("Error:", error.message)
    process.exit(1)
  }
}

seedCategories()