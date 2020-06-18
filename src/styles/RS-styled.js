import styled from 'styled-components'

export const RSHeaderstyle = styled.div`
    width:100%;
    .top{
        width:100%;
        height:.5rem;
        background:#54b143;
        .logo{
            width: 1rem;
            height: .25rem;
            padding-top: .12rem;
            padding-left: .12rem;
            img{
                width:100%;
                height:100%;
            }
        }
    }
` 
export const RSTitlestyle = styled.div`
    width:100%;
    height: .44rem;
    border-bottom: 1px solid #dedfe0;
    background: #fff;
    line-height: .44rem;
    color: gray;
    padding-left: 15px;
    box-sizing:border-box;
    span{
        font-size:.1rem
    }
`

export const RSMainstyle = styled.div`
    width:100%;
    background: #fff;
    height:100%;
    .school-wrap{
        overflow-y:scroll;
        height:calc(100% - .95rem);
        .schools{
            height:auto;
            .school-detail{
                box-sizing:border-box;
                padding: 15px;
                border-bottom: solid 1px #efefef;
                display:flex;
                justify-content:space-between;
                .school-img{
                    width: 31.8%;
                    height: .75rem;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .school-text{
                    display: inline-block;
                    vertical-align: top;
                    margin-left: 1%;
                    height: .75rem;
                    width: 64.2%;
                    .line1{
                        margin-bottom: 10px;
                        display:flex;
                        justify-content:space-between;
                        .school-name{
                            font-weight: bold;
                            font-size:.1rem;
                        }
                        i{
                            height: 20px;
                            width: 20px;
                            background: url(http://j2.58cdn.com.cn/jxedt/m/list/images/v_tuijian.png) 0 0 no-repeat;
                            background-size: 20px 45px;
                        }
                    }
                    .line2{
                        margin-bottom: 10px;
                        display:flex;
                        justify-content:space-between;
                        .school-star{
                            display: inline-block;
                            width: 100px;
                            height: 25px;
                            vertical-align: middle;
                        }
                        .star-5{
                            background: url(http://j2.58cdn.com.cn/jxedt/m/list/images/star.png) 0 0 no-repeat;
                            background-size: 210px 50px;
                        }
                        
                        .star-4{
                            background: url(http://j2.58cdn.com.cn/jxedt/m/list/images/star.png) -22px 0 no-repeat;
                            background-size: 210px 50px;
                        }
                        .star-3{
                            background: url(http://j2.58cdn.com.cn/jxedt/m/list/images/star.png) -42px 0 no-repeat;
                            background-size: 210px 50px;
                        }
                        .star-2{
                            background: url(http://j2.58cdn.com.cn/jxedt/m/list/images/star.png) -64px 0 no-repeat;
                            background-size: 210px 50px;
                        }
                        .star-1{
                            background: url(http://j2.58cdn.com.cn/jxedt/m/list/images/star.png) -82px 0 no-repeat;
                            background-size: 210px 50px;
                        }
                        .star-0{
                            background: url(http://j2.58cdn.com.cn/jxedt/m/list/images/star.png) -104px -26px no-repeat;
                            background-size: 210px 50px;
                        }
                        .school-price{
                            color: #d5d5d5;
                            font-size:.1rem;
                            span{
                                color: #54b143;
                                font-size: .12rem;
                                font-style: normal;
                                margin-right: 5px;
                                font-weight: 600;
                            }
                        }
                    }
                    .line3{
                        color: #c5c5c5;
                        font-size: 0.1rem;
                        
                        
                    }
                }
            }
        }
    }
`