import Product from "./Product.jsx";
function ProductTab(){
    return(
        <>
        <Product title="Phone" price={3000}/>
        <Product title="Laptop"  price={4000}/>
        <Product title="pen" price={10}/>
        </>
    );
}
export default ProductTab;