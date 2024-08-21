import electronics from '../../Images/Electronics.webp'
import groceries from '../../Images/Groceries.webp'
import menswear from '../../Images/menswear.png'
import home from '../../Images/Home&Furniture.webp'
import toys from '../../Images/Toys.webp'
import womenswear from '../../Images/kurta.jpg'

/**
 * Data array contining information about various categories.
 */

const AllCategoryData = [
    {
        id: 0,
        image: electronics,
        link: 'http://localhost:3000/category',
        Title: "Electronics",
        name: "Electronics"

    },
    {
        id: 1,
        image: groceries,
        link: 'http://localhost:3000/category',
        Title: "Grocery",
        name: "Grocery"
    },
    {
        id: 2,
        image: menswear,
        link: 'http://localhost:3000/category',
        Title: "Mens Wear",
        name: "Mens_Wear"
    },
    {
        id: 3,
        image: home,
        link: 'http://localhost:3000/category',
        Title: "Home & Furniture",
        name: "Home_&_Furniture"
    },
    {
        id: 4,
        image: toys,
        link: 'http://localhost:3000/category',
        Title: "Toys",
        name: "Toys"
    },
    {
        id: 5,
        image: womenswear,
        link: 'http://localhost:3000/category',
        Title: "Womens Wear",
        name: "Womens_Wear"
    }
]

export default AllCategoryData