import styled from 'styled-components'

export const P1Headerstyle = styled.div`
    width:100%;
    height:.5rem;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #e6e6e6;
    line-height: 50px;
    color: #333;
    text-align:center;
    font-size:.15rem;
    .icon{
        position: absolute;
        left: 15px;
        line-height:.5rem;
        color:#333;
        font-weight:100;
        
    }
`
export const P1Bannerstyle = styled.div`
    background: #fff;
    margin-bottom: 10px;
    background-size: 78.6px 70px;
    background-color: #FFF;
    border-bottom: 3px #333333;
    position: relative;
    img{
        width:100%;
    }
`
export const P1Practicestyle = styled.div`
    background: #fff;
    .p1-title{
        border-bottom: 1px solid #e6e6e6;
        height: .5rem;
        padding-left: .15rem;
        font-size: .18rem;
        h2{
            line-height:.5rem;
            color:#333;
            font-weight:normal;
        }
    }
    .exam_practice{
        display:flex;
        justify-content:space-around;
        height: 1.5rem;
        border-bottom: 1px solid #e6e6e6;
        .mockexam{
            width: 1.05rem;
            height: 1.05rem;
            background: linear-gradient(180deg, rgba(125, 218, 255, .2), rgba(95, 141, 236, .2));
            border-radius: 50%;
            position: relative;
            align-self:center;
            display:flex;
            justify-content:center;
            .exam{
                align-self:center;
                text-align:center;
                display: block;
                width: .98rem;
                height: .98rem;
                color: #fff;
                font-size: .18rem;
                text-align: center;
                line-height: .98rem;
                background: linear-gradient(180deg, #7ddaff, #5f8dec);
                border-radius: 50%;
                z-index: 3;
            }
        }
        .mockexam::before{
            content: " ";
            position: absolute;
            width: 1.13rem;
            height: 1.13rem;
            background: linear-gradient(180deg, rgba(125, 218, 255, .1), rgba(95, 141, 236, .1));
            border-radius: 50%;
            left: -4px;
            top: -4px;
        }
        .Sequentialpractice{
            width: 1.05rem;
            height: 1.05rem;
            background: linear-gradient(180deg, rgba(125, 218, 255, .2), rgba(95, 141, 236, .2));
            border-radius: 50%;
            position: relative;
            align-self:center;
            display:flex;
            justify-content:center;
            .practice{
                align-self:center;
                text-align:center;
                display: block;
                width: .98rem;
                height: .98rem;
                color: #fff;
                font-size: .18rem;
                text-align: center;
                line-height: .98rem;
                background: linear-gradient(180deg, #00f8b6, #24c293);
                border-radius: 50%;
                z-index: 3;
            }
        }
        .Sequentialpractice::before{
            content: " ";
            position: absolute;
            width: 113px;
            height: 113px;
            background: linear-gradient(180deg, rgba(0, 248, 182, .1), rgba(36, 194, 147, .1));
            border-radius: 50%;
            left: -4px;
            top: -4px;
        }
    }
    .practices{
        display:flex;
        height:.98rem;
        border-bottom: 1px solid #e6e6e6;
        .practice-detail{
            width:25%;
            height:100%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            
            >div{
                align-self:center;
            }
            .img-btn{
                background:url(http://j1.58cdn.com.cn/dist/jxedt/h5/m_new/img/km14.2a68af5.png) no-repeat;
                background-size: 40px 320px !important;
                width: .4rem;
                height: .4rem;
                margin-bottom: 8px;
            }
            .img-btn2{
                background-position: 0 -120px;
            }
            .img-btn3{
                background-position: 0 -80px;
            }
            .img-btn4{
                background:url(data:image/png;base64,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);
                background-size: 40px 40px !important;
                width: .4rem;
                height: .4rem;
                margin-bottom: 8px;
            }


        }
    }
`

export const P1Reviewstyle = styled.div`
    background: #fff;
    .p1-title{
        border-bottom: 1px solid #e6e6e6;
        height: .5rem;
        padding-left: .15rem;
        font-size: .18rem;
        h2{
            line-height:.5rem;
            color:#333;
            font-weight:normal;
        }
    }
    .practices{
        display:flex;
        height:.98rem;
        border-bottom: 1px solid #e6e6e6;
        .practice-detail{
            width:25%;
            height:100%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            
            >div{
                align-self:center;
            }
            .img-btn{
                background:url(http://j1.58cdn.com.cn/dist/jxedt/h5/m_new/img/km14.2a68af5.png) no-repeat;
                background-size: 40px 320px !important;
                width: .4rem;
                height: .4rem;
                margin-bottom: 8px;
                
            }
            .img-btn1{
                background-position: 0 -160px;
            }
            
            .img-btn2{
                background-position: 0 -40px;
            }
        }
    }

`

export const P1Keyanalysistyle = styled.div`
    background: #fff;
    .p1-title{
        border-bottom: 1px solid #e6e6e6;
        height: .5rem;
        padding-left: .15rem;
        font-size: .18rem;
        h2{
            line-height:.5rem;
            color:#333;
            font-weight:normal;
        }
    }
    .practices{
        display:flex;
        height:.98rem;
        border-bottom: 1px solid #e6e6e6;
        .practice-detail{
            width:25%;
            height:100%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            
            >div{
                align-self:center;
            }
            .img-btn{
                background:url(http://j1.58cdn.com.cn/dist/jxedt/h5/m_new/img/km14.2a68af5.png) no-repeat;
                background-size: 40px 320px !important;
                width: .4rem;
                height: .4rem;
                margin-bottom: 8px;
                
            }
            .img-btn1{
                background-position: 0 -240px;
            }
            
            .img-btn2{
                background-position: 0 0;
            }
            .img-btn3{
                background-position: 0 -280px;
            }
        }
    }

`