import React from 'react'
import { Carousel } from 'antd-mobile';
import { Swiperstyle } from 'styles/index-styled.js'
export default class Swiper extends React.Component {
  render() {
    return (
        <Swiperstyle>
            <Carousel
            autoplay={true}
            infinite
            >
                <div className="slieder-img">
                    <img src="http://j2.58cdn.com.cn/dist/jxedt/h5/products/m/images/jx_bg.png" alt=""/>
                </div>
                <div className="slieder-img">
                    <img src="http://img.58cdn.com.cn/dist/jxedt/h5/m_new/img/kqmj_til_home.png" alt=""/>
                </div>
            </Carousel>
        </Swiperstyle>
      
    );
  }
}

