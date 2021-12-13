import './catalogueComponent.css'
import CatalogueItem from './CatalogueItem'
import shoes from '../../data'
import { useEffect, useState } from 'react';

function CatalogueComponent(props) {

    let [sortDisplay,setSortDisplay] = useState(()=>false); // TOGGLE SORT-BY-PRICE MENU
    let [sortCHoice,setSortChoice] = useState(()=>null);    // SETTING SORT CHOICE -> ASC/DESC
    let [windowSize,setWinSize] = useState(()=> window.innerWidth);  //KEEPING TRACK OF THE WINDOW SIZE 


    
    useEffect(()=> {
        let currentWindow =  window.innerWidth
        function handleResizeWindow() {
            
            currentWindow = window.innerWidth;
            if(currentWindow <= 500) {
                setWinSize((prev)=> (
                    prev = window.innerWidth
                ))
            }
            else {
                setWinSize((prev)=>(
                     prev = window.innerWidth
                ))
            }
            

        }
        window.addEventListener('resize', handleResizeWindow)
        // console.log(currentWindow);     
        // return (
        //     window.removeEventListener('resize', handleResizeWindow)
        // )
    },[windowSize])

    // ------------------------------------------------------------------------------------- 
    // FUNCTION HANDLERS: 

    // FOR GETTING THE HAMBURGER MENU AND CALLING THE PASSED FUNCTION FROM THE CONTENT COMPONENT
    function hamburgerHandler() {
        props.hamFunction();
    }

    // SORT DISPLAY TOGGLE FUNCTION HANDLER
    function sortHandler(e) {
        setSortDisplay((prev)=> (
            prev = !prev
        ))
    }

    // SETTING THE SORT-BY-PRICE CHOICE
    function sortChoiceHandler(e) {
        // console.log(e.target.value)
        if(e.target.value === 'inc') {
            setSortChoice((prev)=> (
                
            prev = 'inc'

            ))
        }
        else if(e.target.value === 'dec') {
            setSortChoice((prev)=> (
                prev = 'dec'
            ))
        }
        
    }

    //FILTERING THE SHOES BASED ON CHOICES
    let filteredShoes = shoes;
    if(props.choiceArr.length > 0) {
        // eslint-disable-next-line
        filteredShoes = shoes.filter((eachShoe)=> {

            for(let item of props.choiceArr) {
                if(eachShoe.category === item )
                {
                    return eachShoe;
                    
                }
            }
        })
    }

    // FUNCTION FOR FILTERING THE SHOES BASED ON SORT-BY-PRICE
    function funcFiltSortPrice(filteredShoes) {
            if(sortCHoice === 'inc') {
                filteredShoes.sort((a,b)=> a.price - b.price);
            }
            else if(sortCHoice === 'dec') {
                filteredShoes.sort((a,b)=> b.price - a.price)
            }
            
            return filteredShoes
    }

    let sortByPriceArr = funcFiltSortPrice(filteredShoes);


    return (
        <div className="catalogueComponent">
            <div className="catalogue-header">
                <div className="catalogue-tag">
                    {windowSize < 500 ? 
                    <i className="fas fa-bars hamburger" onClick={hamburgerHandler} /> : 
                    null
                    }
                    <h1>New Arrivals</h1>
                </div>
                <div className="catalogue-price-sort" onClick={sortHandler}>
                    <h3>Sort by price</h3>
                    <i className={sortDisplay ? 'fas fa-chevron-down' : 'fas fa-chevron-up'}/>
                </div>
                {sortDisplay && 
                    (<div className="sort-div">
                        <div className=" sort-option">
                            <input type="radio" name="sorting" value="inc" onClick={sortChoiceHandler}/>
                            <h4>Low to high</h4>
                        </div>
                        <div className="sort-option">
                            <input type="radio" name="sorting" value="dec" onClick={sortChoiceHandler}/>
                            <h4>High to low</h4>
                        </div>
                    </div>
                )}
            </div>
            <div className="catalogue-item-container">
                   
                    {   sortByPriceArr.map((elem,id)=> (
                        (elem.price >= props.min && elem.price <= props.max) ?
                            <CatalogueItem 
                                key={elem.model} 
                                shoe={elem} 
                                sizeHighlight={props.sizeHighlight}
                            /> : null
                        
                    ))
                    }
                    
                    

            </div>
            
        </div>
    )
}

export default CatalogueComponent
