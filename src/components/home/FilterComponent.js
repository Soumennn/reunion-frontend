import { useState, React } from 'react';
import './filterComponent.css'


function FilterComponent(props) {

    // console.log("--- render ---")

    let [categoryDisplay, setCategoryDisplay] = useState(false); // TOGGLE CATEGORY

    // HAMBURGER-MENU FOR SMALL DEVICES - TRIGGERING EVENT 
    function slideBackHandler() {
        props.hamFunction()
    }

    // finding whether element of props.sizeArray exists in props.shoeSize
        const findSize = ((e)=> {
            if(props.shoeSize.includes(e) ) 
            return true;
        })
    
    // FILTERING THE SHOE ELEMENT'S SIZE BASED ON AVAILABLE SIZES
    let filteredSizeArray = props.sizeArray.map((element)=> {

        if( findSize(element[0])) {
            element[1] = "switchOn"
        }
        else {
            element[1] = "sizeOff"
        }

        return element

        
    })

    // --- Filtering shoes according to category -----
        function catChoiceHandler(e) {

            props.settingChoice(e.target.value);
            
        }
    // --- Filtering shoes according to category -----

    // ----- Category show/hide mechanism -----
        function catDisHandler() {

            setCategoryDisplay((prevValue)=> {
                prevValue = !prevValue;
                return prevValue;
            })
            // console.log(categoryDisplay)
        }
    // ----- Category show/hide mechanism -----



    // ------ Price Range interaction-----
        const minBtn = ((e)=> {
            // console.log(e.target.value);
            // setMinValue(e.target.value);
            props.settingMinValue(e.target.value);
        })
        const maxBtn = ((e)=> {
            // console.log(e.target.value);
            // setMaxValue(e.target.value)
            props.settingMaxValue(e.target.value)
        })
    // -----------------------------------

    


    return (
        <div className={props.filterMenuHam ? "filterComponent hamBurgerOn" : "filterComponent"}>
            <div className="plain-div">
                {props.filterMenuHam ?
                 <i class="fas fa-caret-left" onClick={slideBackHandler}/> : 
                 null
                }
            </div>
            <div className="category-div-header" onClick={catDisHandler}>
                <h3>Categories</h3>
                <i  className={categoryDisplay ? 'fas fa-chevron-down' : 'fas fa-chevron-up'}/>
            </div>
            
            { categoryDisplay && (
                <div className="categories">
                    <div className="sneakers">
                        <input type="checkbox" id="category-options" name="category-options" value="Sneakers" onClick={catChoiceHandler}/>
                        <h3>Sneakers</h3>
                    </div>       
                    <div className="slides">
                        <input type="checkbox" id="category-options" name="category-options" value="Slides" onClick={catChoiceHandler}/>
                        <h3>Slides</h3>
                    </div>       
                    <div className="accessories">
                        <input type="checkbox" id="category-options" name="category-options" value="Accessories" onClick={catChoiceHandler}/>
                        <h3>Accessories</h3>
                    </div>       
                </div>
            )}
                    

            <div className="price-range-div">
                <h3> Price Range</h3> <span> ( In USD )</span>
                <input id="typeinp" type="range" min={props.minValue} max={1500} 
                    value={props.maxValue} 
                    onChange={maxBtn}
                step="1"/>

                <div className="range-values">

                    <input className="min" value= {props.minValue} onChange={minBtn}/> 
                    <input className="max" value={props.maxValue} readOnly /> 
                    
                </div>

               
            </div>

            <div className="size-div">
                <h3>Size</h3>
                <div className="size-table-container">
                <div className="size-table">
                    {filteredSizeArray.map((e,id)=> (   
                        
                        <p className={e[1]} key={id}>{e[0]} </p>

                    ))}            
                </div>
                </div>
            </div>

        </div>
    )
}

export default FilterComponent
