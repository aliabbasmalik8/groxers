import React, { Component } from 'react'
class PageHeader extends Component{
    render(){
        return(
            <div className="page_header">
                <div className="panel_warpper">
                    <div className="create_account">CREATE AN ACCOUNT</div>
                    <div className="sign_up">SIGN IN</div>
                </div>
                <nav className="header_wrapper_content">
                    <div className="header_content">
                        <div className="logo_parent">
                            <img src="/images/444.png" alt=""/>
                        </div>
                        <div className="cart_image_parent">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="header_wrapper_bottom">
                        <div className="inner_header">
                            Hello world
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default PageHeader