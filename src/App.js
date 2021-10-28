import { useState,useMemo } from "react";
import './App.css';
import Card from './card.js'


const products =[
  {
    src:"https://static-01.daraz.pk/p/31a8f05e20715a88100360d8ebff3dee.jpg",
    title:"Full Sleeves Tshirt",
     productPrice:"600",
     type:"men",
     prodDes:"Fasionable export quality 100%soft and comfortable Men's Item Fasionable export quality 100%soft and comfortable Men's Item Fasionable export quality 100%soft and comfortable Men's Item",
  btnTxt:"Add to Cart"
  },
  {
    src:"https://static-01.daraz.pk/p/cb382e9dfad660314c22e708e7dfc690.jpg_340x340q80.jpg_.webp",
    title:"Friend Letter tshirt",
     productPrice:"400",
     type:"women",
     prodDes:"FRIENDS Letter t shirt Women t-shirt Casual Funny t shi FRIENDS Letter t shirt Women t-shirt Casual Funny t shirt For Lady Girl Top Teert For Lady Girl Top Tee FRIENDS Letter t shirt Women",
  btnTxt:"Add to Cart"
  },
  {
    src:"https://static-01.daraz.pk/p/668d4d522952b1bbb2f86c2eda854ac6.jpg",
    title:"Printed shirts Kids",
     productPrice:"450",
     type:"children",
      prodDes:"Blue Mix Cotton Printed Tshirts For Kids Blue Mix Cotton Printed Tshirts For Kids Blue Mix Cotton Printed Tshirts For Kids Blue Mix Cotton Printed Tshirts For Kids Blue Mix Cotton Printed ",
  btnTxt:"Add to Cart"
  },
  {
    src:"https://images-na.ssl-images-amazon.com/images/I/61gQ%2BHnPeML._AC_UX385_.jpg",
    title:"Short Sleeve Tshirt",
     productPrice:"700",
     type:"men",
     prodDes:"New Short Sleeve Strip Printed Summer Tshirt For Men New Short Sleeve Strip Printed Summer Tshirt For Men New Short Sleeve Strip Printed Summer Tshirt For Men Sleeve Strip Printed Summer Tshirt",
  btnTxt:"Add to Cart"
  },
  {
    src:"https://static-01.daraz.pk/p/9e96ad34780e23e62dfc12c8261425e3.jpg",
    title:"Full Sleeves Shirts",
     productPrice:"500",
     type:"women",
     prodDes:"Side Flower Round Neck Full Sleeves Casual Printed T Shirts Tops For Girls Women & Ladies Side Flower Round Neck Full Sleeves Casual Printed T Shirts Tops For Girls Women & Ladies Side Flower ",
  btnTxt:"Add to Cart"
  },
  {
    src:"https://static-01.daraz.pk/p/56bd9b8600c9ee5ef36e14911ce64c8c.jpg",
    title:"Ertugrul Kids shirt",
     productPrice:"400",
     type:"children",
     prodDes:"Dirilis Ertugrul Grey Printed T-shirt For Kids Dirilis Ertugrul Grey Printed T-shirt For Kids Dirilis Ertugrul Grey Printed T-shirt For Kids Dirilis Ertugrul Grey Printed  T-shirt For Kids",
  btnTxt:"Add to Cart"
  }
]

function App() {

  const [category, setCategory] = useState("");  
    const filteredData = useMemo(() => {  
      if (!category || category === "all") return products;  
    
      return products.filter(item => item.type === category);  
    }, [category]);  
    
  
  return (
<div>
<div style={{display:"flex",justifyContent:"center",padding:"15px"}}>
<select  style={{width:"300px",textAlign:"center",fontSize:"18px",borderRadius:"20px",backgroundColor:"Silver"}} onChange={e => setCategory(e.target.value)}>
          <option value="men">Men Product</option>
          <option value="women">Women Product</option>
          <option value="children">Kid Product</option>
          <option value="all">All Products</option>
{/* comment */}
        </select>
</div>
        {
filteredData.map((values)=>{
return(
  <div style={{ display:"inline-block"}}>
  <Card  image={values.src} ptitle={values.title} pPrice={values.productPrice} ptxt={values.prodDes} btn={values.btnTxt}  />
  </div>
)
}) 
  }

</div>
  
    )}

export default App;
