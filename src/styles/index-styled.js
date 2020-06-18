import styled from 'styled-components'

export const Scrollwrap = styled.div`
    height: calc(100% - .5rem);
    overflow-y: scroll;
    
`

export const Headerstyle = styled.div `
    height : .5rem;
    position: relative;
    margin-bottom: .08rem; 
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAAkCAMAAAANSQDNAAAAeFBMVEUAAAAuLi4zMzMzMzMzMzMvLy8zMzMzMzMzMzMzMzMzMzMzMzMyMjIyMjIzMzMyMjIyMjIyMjIzMzMxMTEzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzMyMjIzMzMyMjIzMzMzMzMyMjIzMzMyMjIxMTEzMzMzMzMzMzPxsTxtAAAAJ3RSTlMACPdhww7PeUzsQeFYLOU9GjOOIGiRcPOGUkjWN62XvKDapoAVJ7Tgr40KAAAEtklEQVRYw92Yaf+iIBCABxSv1A7NsrLDI77/N1wYQXQ9ttp/+2KfF/3ATB9hZsBAEnDBFpY5UkECPWzxqxj+goO4wBUmITvf3zOAM5/CAYA8DMOj7LghcgIW9mGgwJP+mfidCwoAd1bcGR2LBv1oJL7RyJ/6XY98KE4GQAvjSAKknB3xt8VXfBLrE/ERG0ASc/MoDzWZzxFagcCK/yjOAkGJdkHA3K+L60A4E5DUN0fgskqdf9ODSaRKwRgrjLhHCAm0+Jb3uJD7PxBvHOGtBQPKBepsJ4eOp+jLbl9cdNdaHG59cYDNOhiz+Uy8WA8goCCXCwGNxTX2CQxMXGBFxuJBJ14XtCcu2UhXBgyVv1BVNOUD0bencUsAEldPtD0Uz3rJSTZYUVOsHmoOfAZEZqr9LXFUmgTHnfki3oUasTDyW/HK8zJ5XcoGAZnqqMOOLkrhD4s3rmKzKF6IQKllQCPZsKoUoNhgtwKErfARJVc59A28zsXvwMn3e5xBYgwuKB67Aiwzrptldy2eCe8EtLhDBuJxAooA+yVIyE2eydp2IevWG2G+5vP40HIdiDvdIabn+IQB/qz19bBpxA93LaTX3geOt/S2a53+e9FbRT8qDqnt/0mcn3NAmzzPvQRNmAZgUDLVTy9nuXYR6PBW4hld8o74zhpho3iHZcT9u+CMgVuWpa3E15C4c0Rg8PUys6b8cE2gD7Hsti6dvEVYJ+7BiPuM+CQnsy9YXAzN4vmEbeUxIuiskdqTT/ngiwSfidOV4DAWh+sL4ke9AtR6P4vmelXN1c2/Im5iPGqaJjPixHXiEUNxEitvftSJugZkQ2UWExW/3xIfJ+ccbCie6zmgh1oF1xWQalDtr/9UPKSCZkmcOJximiQpd1Ws0Bq/8QcDQI6HD8WJI+NvOjmppGuYG55kc78kbom2epFwj/oXsgFpu4c3sGg7i6kq+/Q3MkyV21tVBRg+xMoZ0B0iALXPK1DikOh9PhUtFqvU/JmVM5yuKmcBzqxsxCiu43QBIe7J0dXiZgPwVAdt8kPiezCkRvwMgt1UcpLdH8Qr0OKDLEwjKgckgne4rKZ5PAeB7y6Kb0ERubv9GFuJExiJsxWuDLhlg29wXxKPCSySKXEYi8NWl4+CwDc4L4mH8Lk4eFTvg79Bo5J1Sty3YJ7E8siyOHNUbf57VMQSL70MVzKbhFmWoWeQCYg0yxlIVnRMCYEIhBtZEk8cjhw8eA/iXe3H47Y/EVDktJTtSGaMaEkaMZ2+jMMa5tjzMQWgVbggHvpojUWMvaOdSj1klRKQpBQXM9J+4epXLL/B/HfsSXJg9pQ4arlSnIIRN/+QFbLjh+yOBq8P+kbdzXnaVHx6jK2fvC2pJ448VEA/IrD4NLoEB9bvBFDKL7dS/NYX9wnefY95Wdb49oMeJ3iNZ6uN/+u5lBuuEHIkbncUdyZrOZ3zzmAGVtDYwuQM+uKVvGpBcVaiwdw/3BpeoPF7K2107kR2DBLzt4JVrAFJst0UVbQUjFgOaQo98ac8GMsCVTW9M0N8FAsWMTlNN+aV7+bTw6OwWFfw/Ah+AKvcmk52s3Ckbtd0dHHmVc/81ezczd7OfpQN/O/8Aii4Y+8B3jZYAAAAAElFTkSuQmCC) no-repeat 50%;
    background-color: #fff; 
    background-size: .92rem .18rem;
    .type_position{
        position: absolute;
        font-size: .125rem;
        top: 50%;
        transform: translateY(-50%);
        left: .38rem
    }
    .mine{
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAMAAABAUVr7AAAAYFBMVEUAAAD4dHT4dHT4cnIzMzMyMjIuLi4yMjIyMjIyMjIzMzMwMDAzMzMzMzMyMjIzMzMzMzMzMzM0NDQzMzMzMzMzMzMzMzMzMzM1NTU1NTU0NDQqKio0NDQxMTEzMzP3dHRzOdf+AAAAHnRSTlMA8K0m8GQH0oV3QS3dfEvi+cnGwbWpn5QkHRYMWTkxLwKcAAAAuElEQVQ4y73S2Q6DIBBA0UFxYXPfbcf//8sa0hCpDC9tet6MNzAQICJNGEvSaMGOE/tolrLgvJgX+5EcVuIVokGrKeHEDotdixKdOZxUePEIblTghQ6Nq9DzDBw6Q08GdwI9AjzxVchZFDjEiQpwqHuREGTQMUDIOFo8A9Im+lr3YoPv5KtSa07+lWbQaOnByHsnJ44ePkn/SloMaCsX7CMSxv09RIekLndPllTapMaI2iYY9b/kR16tDjkWKfWkiQAAAABJRU5ErkJggg==) no-repeat 50%;
        background-size: cover;
        position: absolute;
        right: .15rem;
        width: .16rem;
        height: .16rem;
        top: 50%;
        transform: translateY(-50%);
    }
`
export const Swiperstyle = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: .8rem;
    margin-bottom:.08rem;
    .slieder-img{
        display: block; 
        height:100%;
        width:100%;
        img{
            width:100%;
            height: 100%;
        }
    }
`
export const Projectstyle14 = styled.div`
    :nth-of-type(3){
        margin-bottom:.08rem;
    }
    width:100%;
    height:1.62rem;
    background:#fff;
    .module-title{
        width:100%;
        height:.62rem;
        box-sizing:border-box;
        padding: 0.23rem 0.15rem 0.15rem;
        display:flex;
        justify-content:space-between;
        h2{
            color:#000;
            font-size:.18rem;
            font-family: PingFangSC,思源黑体,微软雅黑,"microsoft yahei";
        }
        span{
            font-size: 0.13rem;
            color: #A9A9A9;
        }
    }
    .project-detail{
        width:100%;
        height:1rem;
        display:flex;
       
        .details{
            width:25%;
            height:100%;
            display:flex;
            flex-direction:column;
            .detail-icon{
                width: .4rem;
                height: .4rem;
                margin-top: .15rem;
                margin-bottom: .1rem;
                align-self: center;
            }
            .icon1{
                background:url(http://j1.58cdn.com.cn/dist/jxedt/h5/m_new/img/img.b49ebea.png) no-repeat;
                background-size: 40px 1016px !important;
                background-position: 0 -892px;
            }
            .icon2{
                background:url(http://j1.58cdn.com.cn/dist/jxedt/h5/m_new/img/img.b49ebea.png) no-repeat;
                background-size: 40px 1016px !important;
                background-position: 0 -932px;
            }
            .icon3{
                background:url(http://j1.58cdn.com.cn/dist/jxedt/h5/m_new/img/img.b49ebea.png) no-repeat;
                background-size: 40px 1016px !important;
                background-position: 0 -852px;
            }
            .icon4{
                background:url(data:image/png;base64,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) no-repeat;
                background-size: 40px 40px !important;
            }
            .detail-title{
                text-align:center;
                font-size:.14rem;
                color:#555;
                margin-bottom:.15rem
            }
        }

    }

`
export const Projectstyle23 = styled.div`
    :nth-of-type(5){
        margin-bottom:.08rem;
    }
    height:auto;
    width:100%;
    background:#fff;
    .module-title{
        width:100%;
        height:.49rem;
        box-sizing:border-box;
        padding: 0.13rem 0 0.12rem 0.15rem;
        display:flex;
        justify-content:flex-start;
        h2{
            color:#000;
            font-size:.18rem;
            font-family: PingFangSC,思源黑体,微软雅黑,"microsoft yahei";
        }
    }
    .project-detail{
        overflow: hidden;
        width:100%;
        height:1.25rem;
        display:flex;
        box-sizing:border-box;
        padding: .15rem;
        justify-content: space-around;
        .details{
            width:48%;
            position:relative;
            height:100%;
            img{
                width:100%;
                height:100%;
                
            }
            .detail-title{
                width:100%;
                height:.3rem;
                line-height:.3rem;
                position:absolute;
                bottom:0;
                text-align:center;
                color:#fff;
                background: rgba(0, 0, 0, .4);
            }
        }

    }

`
export const RecommendSchoolstyle = styled.div`
    width:100%;
    
    background:#fff;
    .module-title{
        width:100%;
        height:.62rem;
        box-sizing:border-box;
        padding: 0.23rem 0.15rem 0.15rem;
        display:flex;
        justify-content:space-between;
        h2{
            color:#000;
            font-size:.18rem;
            font-family: PingFangSC,思源黑体,微软雅黑,"microsoft yahei";
        }
        span{
            font-size: 0.13rem;
            color: #A9A9A9;
            font-size:.15rem;
        }
    }
    .recommend-detail{
        width:100%;
        height:auto;
        overflow: hidden;
        .recommend-school{
            
            padding: 0.18rem 0 0.145rem;
            height: .69rem;
            margin:0 .15rem 0 .15rem;
            display:flex;
            border-top:solid #f2f2f2 1px;
            img{
                width: .92rem;
                height: .69rem;
                display: block;
                margin-right: 0.15rem;
            }
            .school-detail{
                display:flex;
                flex-direction:column;
                flex:1;
                justify-content:space-between;
                .school-title_star{
                    height:.36rem;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    .school-title{
                        font-size: 0.16rem;
                        line-height: 0.16rem;
                        color: #333;
                        display: block;
                        max-width: 2rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .school-recstar{
                        height: 12px;
                        background: url(http://j2.58cdn.com.cn/dist/jxedt/h5/products/m/images/did-star.png) no-repeat;
                        background-size: cover;
                        width: 80px !important;
                    }
                }
                .school-price_comment{
                    height: 0.16rem;
                    line-height: 0.16rem;
                    display: flex;
                    justify-content: space-between;
                    .school-price{
                        display: block;
                        color: #FFA630;
                        font-size: 0.12rem;
                        line-height: 0.12rem;
                        span{
                            font-size:.16rem;
                        }
                    }
                    .school-comment{
                            color:#000;
                        font-size:.12rem;
                        span{
                            color:#FFA630;
                        }
                    }
                }
            }
        }
    }
    

`
export const Enterserverstyle = styled.div`
    width:100;
    height:auto;
    margin-bottom:.08rem;
    .module-title{
        padding: 0.18rem 0 0 0.15rem;
        font-size: 0.18rem;
        color: #333;
        font-weight: bold;
        background: #fff;
        display:flex;
        justify-content:flex-start;
        h2{
            color:#000;
            font-size:.18rem;
            font-family: PingFangSC,思源黑体,微软雅黑,"microsoft yahei";
        }
    }
    .servers{
        background:#fff;
        display:flex;
        .server-detail{
            width:25%;
            display:flex;
            flex-direction:column;
            .server-icon{
                display: block;
                width: 0.36rem;
                height: 0.36rem;
                margin: 0.15rem 0 0.05rem;
                background:url(http://j1.58cdn.com.cn/dist/jxedt/h5/m_new/img/img.b49ebea.png) no-repeat;
                background-size: 40px 1016px !important;
                align-self:center;
            }
            .icon1{
                background-position: 0 -817px;
            }
            .icon2{
                background-position: 0 -638px;
            }
            .icon3{
                background-position: 0 -509px;
            }
            .icon4{
                background-position: 0 -545px;
            }
            .server-name{
                text-align:center;
                margin-bottom: 0.18rem;
                font-size:.14rem;
                color:#555;
            }
        }
    }

`