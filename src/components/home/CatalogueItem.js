import { useState } from 'react'
import './catalogueItem.css'

// COMPONENT FOR EACH CATALOGUE ITEM

function CatalogueItem({shoe, sizeHighlight}) {

    let [picTile,setPicTile] = useState(()=> (shoe.pictures.image1)) // PIC MENU IN THE BOTTOM SECTION

    // FUNCTION FOR HANDLING PIC MENU IN THE BOTTOM
    const tileHandler = (e)=> {
        // console.log(e.target.src);
        setPicTile(e.target.src);
    }

    function sizeHandler() {
        // console.log('clicked');
        sizeHighlight(shoe.size);
        // console.log(shoe.size);
    }



    return (
        <div className="catalogueItem" onClick={sizeHandler}>
         <div className="header">
            <p> {shoe.model}</p>
            <h4> {shoe.brand.toUpperCase()} </h4>
         </div>


            <div className="img-div">
                <img src={picTile} alt="" />
            </div>
            <div className="bottom-info">
                <div className="price-div">
                    <p>Price</p>
                    <h3>$ {shoe.price}</h3>
                </div>
                <div className="other-images-div">
                    <div className="img-1" onClick={tileHandler} >
                        <img src={shoe.pictures.image1} alt="" />
                    </div>
                    <div className="img-2" onClick={tileHandler} >
                        <img src={shoe.pictures.image2} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CatalogueItem
