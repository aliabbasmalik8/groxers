import React, { Component } from 'react'
import { main_to_sub_category_map } from './../products/constants'
class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            arr1: [],
            arr2: [],
            arr:[],
        }
    }
    componentDidMount(){
        const { catagory } = this.props;
        let arr1 = [];
        let arr2 = [];
        for(let i=0; i< main_to_sub_category_map[catagory].length;i++){
            if(i%2 === 0){
                arr2.push(main_to_sub_category_map[catagory][i])
            }else{
                arr1.push(main_to_sub_category_map[catagory][i])
            }
        }
        this.setState({
            arr1: arr1,
            arr2: arr2,
            arr:main_to_sub_category_map[catagory],
        })

    }
    render(){
        const { catagory } = this.props;
        return(
            <div className="hover_card">
                <div className="card">
                    <div className="row">
                        {
                            this.state.arr.map((catag, index)=>{
                                return <HelperCard key={'arr1'+index} catagory={catagory} subCatagory={catag}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
function HelperCard(props){
    const { catagory, subCatagory } = props;
    return(
        <div className="_col col-12">
            <a href={'/products/'+catagory+'/'+subCatagory+"/all"}>
                {subCatagory}
            </a>
        </div>
    )
}
export default Card;