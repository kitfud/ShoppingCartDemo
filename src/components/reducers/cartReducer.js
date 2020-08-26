import Item1 from '../images/micro1.jpg'
import Item2 from '../images/micro2.jpg'
import Item3 from '../images/micro3.jpeg'
import Item4 from '../images/micro4.jpeg'
import Item5 from '../images/micro5.jpg'
import Item6 from '../images/micro5.jpg'


const initState = {
    items: [
        {id:1,title:'Green Microgreens', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Basil Microgreens', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Beet Microgreens', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'Swiss Chard Microgreens', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Test Microgreens', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Test2 Microgreens', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    
    return state;

}
export default cartReducer;