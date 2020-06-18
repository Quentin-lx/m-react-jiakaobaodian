import styled from 'styled-components'


export const PTPstyle = styled.div`
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
    .cities-wrap{
        overflow-y:scroll;
        height:calc(100% - .5rem);
        h2{
            display: block;
            font-size: .16rem;
            font-weight: bold;
            height: 20px;
        }
        .nowcity{
            background: #fff;
            margin-top: 10px;
            padding: 15px;
            
            .city-name{
                height: 45px;
                line-height: 40px;
                font-size: 14px;
                color: #808080;
                .success{
                    display: inline-block;
                    position: relative;
                    padding-left: 20px;
                }
                .success::before{
                    content: "";
                    position: absolute;
                    background: url(http://j2.58cdn.com.cn/jxedt/m/list/images/position.png) 0 0 no-repeat;
                    background-size: 20px 20px;
                    height: 20px;
                    width: 20px;
                    left: -3px;
                    top: 10px;
                }
            }
            
        }
        .hot-cities{
            background: #fff;
            margin-top: 10px;
            padding: 15px;
            .cities-name{
                overflow: hidden;
                width: 100%;
                display:flex;
                flex-wrap:wrap;
                li{
                    list-style: none;
                    width: 33.3%;
                    height: 45px;
                    line-height: 40px;
                    font-size: 14px;
                    color: #808080;
                    text-align: center;
                }
            }
        }
        .all-cities{
            background: #fff;
            margin-top: 10px;
            padding: 15px;
            .cities-name{
                overflow: hidden;
                width: 100%;
                display:flex;
                flex-wrap:wrap;
                li{
                    list-style: none;
                    width: 33.3%;
                    height: 45px;
                    line-height: 40px;
                    font-size: 14px;
                    color: #808080;
                    text-align: center;
                }
            }
        }
    }
`