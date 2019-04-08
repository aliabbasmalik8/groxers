import React, { Component } from 'react'
const main_to_sub_category_map = {
    'Electronics': ['hair accessories', 'juicer blender & grinder', 'irons', 'shavers & trimmers',
                    'kettles & coffee makers', 'vacuum cleaners', 'fryers', 'fans', 'e mixer',
                    'toaster & sandwich maker', 'insect killers', 'medical accessories',
                    'scales', 'humidifier', 'choppers', 'emergency lights', 'bbq grills'],
    "Men's Clothing": ['mens'],
    "Women's Clothing": ['unstitched', 'stitched', 'bottoms', 'girls', 'tops', 'dresses'],
    'Accessories': ['bags', 'shawls/stoles', 'socks', 'undergarments', 'other accessories'],
    'Decoration': ['tissue box', 'bowls', 'ashtray', 'trays', 'candle stands',
                   'mirrors', 'bath decor', 'flowers', 'vase', 'mix decoration items',
                   'photo frame & album decor', 'jewellery box'],
    'Toys': ['video games', 'educational toys', 'activity toys'] ,
    'Grocery': ['dairy', 'pantry', 'beverages', 'frozen food', 'deli',
                'snacks', 'home baking', 'diet and nutrition', 'fruits & vegetables'],
    'Health and Beauty': ['toiletries', 'hair care', 'personal care', 'skin care', 'cosmetic', 'perfume'],
    'Household Essentials': ['insecticides', 'kitchen ware', 'laundry', 'cleaners', 'kitchen items',
                             'electric goods', 'plastic & paper goods', 'home goods', 'car care'],
    'Baby Care': ['baby products', 'baby feeding', 'diapers'],
    'Pet Food': ['dog food', 'feed', 'cat food',],
}

class Filter extends Component{
    constructor(props){
        super(props);
        this.state={
            subCatagories: []
        }
    }
    componentDidMount(){
        let { catagory } = this.props;
        this.setState({
            subCatagories: [...main_to_sub_category_map[catagory]]
        })
    }
    render(){
        let { filterProducts } = this.props;
        return(
            <div className="sub_catagory_filter_parent">
                <div className="sub_catagory_filter">
                {
                    this.state.subCatagories.map((catagory, index) =>{
                        return <SingleCatagory key={index} name={catagory} filterProducts={filterProducts}/>
                    })
                }
                </div>
            </div>
        )
    }
}
class SingleCatagory extends Component{
    render(){
        const { name, filterProducts } = this.props;
        return(
            <div className="single_catagory" onClick={()=>filterProducts(name)}>
                <div className="content">{''+name}</div>
            </div>
        )
    }
}
export default Filter;