import React, { FC, useState } from 'react';
import styles from './products.module.scss';

interface Product {
  id: string,
  name: string,
  img: string,
  price: string
}

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

const Products: FC = () => {
  
  const [cart, setCart] = useState<Product[]>([])
  const [page, setPage] = useState(PAGE_PRODUCTS)

  const products = [
    {
      id: '1',
      name: "Notebook",
      img: "https://picsum.photos/id/0/250/250",
      price: '1000.00'
    },
    {
      id: '2',
      name: "Сamera",
      img: "https://picsum.photos/id/250/250/250",
      price: '500.00'
    },
    {
      id: '3',
      name: "Clock",
      img: "https://picsum.photos/id/175/250/250",
      price: '30.00'
    },
    {
      id: '4',
      name: "Cup",
      img: "https://picsum.photos/id/30/250/250",
      price: '10.00'
    }
  ]

  const addToCart = (product: Product) => {
    setCart([...cart, { ...product }])
  }  
  
  const removeFromCart = (productsToRemove: Product) => {
    setCart(cart.filter((product) => product !== productsToRemove))
  }

  const navigateTo = (nextPage: React.SetStateAction<string>) => {
    setPage(nextPage)
  }

  const renderProducts = () => {
    return (
      <>
      <h1 className={styles.heading}>Products</h1>
      <div className={styles.products}>
        {products.map((product, index) => {
          return (
            <div className={styles.product} key={index}>
              <h2 className={styles.name}>{product.name}</h2>
              <img className={styles.image} src={product.img} alt={product.name} />
              <h3 className={styles.price}>€ {product.price}</h3>
              <button
                onClick={() => addToCart(product)}
                className={styles.addtocart}>
                Add to Cart
          </button>
            </div>
          )
        })}
      </div>
      </>
    )
  }

  const renderCart = () => {
    return (
      <>
      <h1 className={styles.heading}>Cart</h1>
      <div className={styles.products}>
        {cart.map((product, index) => {
          return (
            <div className={styles.product} key={index}>
              <h2 className={styles.name}>{product.name}</h2>
              <img className={styles.image} src={product.img} alt={product.name} />
              <h3 className={styles.price}>€ {product.price}</h3>
              <button
                onClick={() => removeFromCart(product)}
                className={styles.addtocart}>
                Remove from Cart
              </button>
            </div>
          )
        })}
      </div>
      </>
    )
  }  
  
  let sum = (cart.reduce(function (accumulator, currentValue) {
      return accumulator + parseFloat(currentValue.price)}, 0)).toFixed(2)      

  return (
    <div>
      <div className={styles.gotocart}>        
        <button 
          className={styles.gotocartbtn}
          onClick={()=>navigateTo(PAGE_PRODUCTS)}
        >
          Products
        </button>
        <button 
          className={styles.gotocartbtn}
          onClick={()=>navigateTo(PAGE_CART)}
        >
          Cart ({cart.length}) (€ {sum})
        </button>
      </div>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
};

export default Products;