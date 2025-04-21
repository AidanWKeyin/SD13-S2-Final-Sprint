import { React, useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { Display } from '../Components/Display/Display';
import { Box } from '../Components/Box/Box';
import { Products } from '../Components/Products/Products';






export const Product = () => {
  const { all_product} = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId)) 

  return (

   
      
  <div>
    <Breadcrum product={product}/>
    <Display product={product}/>
    <Box/> {/*product={product}/> */}
    <Products/> {/*product={product}/> */}


  </div>



);

}
