import React from 'react';

import './index.css'
import axios from 'axios';

const CategoryList = (props) => {
  console.log(props)
  const {updateProductData} = props
 
  const onSelectCategory = (cat) =>{
    console.log(cat)
    axios.post('/getcategories',{'category':cat})
    .then(res=>updateProductData(res.data.categoryData))
  }
  return (
    <nav>
      
      <div className="category-container">
      <button className="category-link" onClick={()=>onSelectCategory('all')}>
          <img
            alt=""
            src="https://i.ibb.co/VjXz8Wz/allp.png"
            className="category-image"
          />
           <div className="category-text">All Products</div>
        </button>
        <button className="category-link" onClick={()=>onSelectCategory('Mens Wear')}>
          <img
            alt=""
            src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Newseason/revamp/halo/C/v1/Men_s_clothing._SS300_QL85_FMpng_.png"
            className="category-image"
          />
          <div className="category-text">Men's Wear</div>
        </button>
        <button onClick={()=>onSelectCategory('Womens Wear')}  className="category-link">
          <img
            alt=""
            src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Newseason/revamp/halo/C/v1/Women_s_clothing._SS300_QL85_FMpng_.png"
            className="category-image"
          />
          <div className="category-text">Women's Wear</div>
        </button>

        <button onClick={()=>onSelectCategory('Mens Footwear')} className="category-link">
          <img
            alt=""
            src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Newseason/revamp/halo/C/v1/mens-footwear._SS300_QL85_FMpng_.png"
            className="category-image"
          />
          <div className="category-text">Men's Footwear</div>
        </button>
        <button onClick={()=>onSelectCategory('Womens FootWear')} className="category-link">
          <img
            alt=""
            src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Newseason/revamp/halo/C/v1/womens-footwear._SS300_QL85_FMpng_.png"
            className="category-image"
          />
          <div className="category-text">Women's Footwear</div>
        </button>
        <button onClick={()=>onSelectCategory('Luggage Bags')} className="category-link">
          <img
            alt=""
            src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Newseason/revamp/halo/C/v1/Luggage._SS300_QL85_FMpng_.png"
            className="category-image"
          />
          <div className="category-text">Luggage Bags</div>
        </button>
        <button  onClick={()=>onSelectCategory('Accessories')} className="category-link">
          <img
            alt=""
            src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Newseason/revamp/halo/C/v1/Watches._SS300_QL85_FMpng_.png"
            className="category-image"
          />
          <div className="category-text">Accessories</div>
        </button>
        <button onClick={()=>onSelectCategory('Kids Wear')} className="category-link">
          <img
            alt=""
            src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Newseason/revamp/halo/C/v1/03-Kids._SS300_QL85_FMpng_.png"
            className="category-image"
          />
          <div className="category-text">Kids Wear</div>
        </button>
        
      </div>
    </nav>
  );
}

export default CategoryList;
