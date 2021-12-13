import CatalogueComponent from './CatalogueComponent'
import FilterComponent from './FilterComponent'
import './content.css'
import { useRef, useState } from 'react'

let sArray = [];
// eslint-disable-next-line
const fillArray = (()=> {
    for(let i = 35; i < 50; i++) {
        sArray.push([i,"sizeOff"]);
    }

})();
sArray.push(['S',"sizeOff"],['M',"sizeOff"],['L',"sizeOff"])

function Content() {
    // let [cnt,setCnt] = useState(0)
    let [choiceArr,setChoiceArr] = useState([]);
    let [minValue,setMinValue] = useState(()=> 0);
    let [maxValue,setMaxValue] = useState(1500);
    let [shoeSize,setShoeSize] = useState([]);
    let [filterMenuHam,setFilterMenuHam] = useState(()=>false);
    let sizesArray = useRef(sArray);

    // ---- PASSING HAMBURGER FUNCTION TO CHILD COMPONENTS TO TRIGGER 
    // HAMBURGER-MENU (FILTER MENU EVENTS) FOR SMALL DEVICES ----
    function hamFunction() {
        setFilterMenuHam((prev)=> (
            prev = !prev
        ))
    }
    
    // -----TO HIGHLIGHT AVAILABLE SIZED UPON CLICKING ANY SHOE ITEM ----- 
    function sizeHighlight(sizes) {
        setShoeSize((prv)=> prv = sizes);     
    }

    // --- FUNCTION TO SET CHOICES OF CATEGORY-FILTER AND DISPLAY RESULTS ACCORDINGLY ----
     function settingChoice(arr) {
         let flag = true;
        for(let item of choiceArr) {
            if(item === arr) {
                flag = false;
                setChoiceArr((prev)=> (
                     prev.filter(e=> e!== arr)
                ))
            }
        }
        if(flag) {

            setChoiceArr(()=> (
                choiceArr = [...choiceArr,arr] 
            ))
        }
    }

    // ---- DISPLAY SHOES ACORDING TO THE RANGE SELECTED BY TRIGERRING PRICE RANGE FILTERING EVENTS --
    function settingMinValue(min) {
        setMinValue(min);
    }
    function settingMaxValue(max) {
        setMaxValue(max);
    }
    
    // ---------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------

    return (
        <div className="content">
            <FilterComponent 
                settingChoice={settingChoice} 
                settingMinValue={settingMinValue}
                settingMaxValue={settingMaxValue}
                minValue={minValue}
                maxValue={maxValue}
                shoeSize={shoeSize}
                sizeArray={sizesArray.current}
                filterMenuHam={filterMenuHam}
                hamFunction={hamFunction}
            />
            <CatalogueComponent 
                choiceArr={choiceArr}
                sizeHighlight={sizeHighlight}
                min={minValue}
                max={maxValue}
                hamFunction={hamFunction}
            />
        </div>
    )
}

export default Content
