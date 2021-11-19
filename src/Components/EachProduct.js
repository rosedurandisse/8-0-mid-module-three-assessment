

const EachProduct = (props) => {
    const formatPrice = (price) => `$${price.toFixed(2)}`;
    const updatedPrice = formatPrice(props.eachProduct.price)

    // let updatedPrice = formatPrice(eachProduct.price)
    return (
        <div className='eachProduct'>
            <h3>{props.eachProduct.name}</h3>
            <p>Price: {updatedPrice}</p>
            <button name={props.eachProduct.name} value={props.eachProduct.price} type='submit' onClick={(event) => props.handleAddToCartClick(event)}>Add To Cart</button>
            <img src={props.eachProduct.img} />
            <p>{props.eachProduct.description}</p>
        </div>
    )
}

export default EachProduct;