import styled from 'styled-components'

export const Spstyle = styled.div`
    width:100%;
    background:#FFF;
    height:100%;
    
    .sp-header{
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
    }
    .question{
        width:100%;
        
        
        .question-title{
            padding: 15px 15px 0;
            .question-type{
                background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAiCAMAAADYiy+9AAAANlBMVEUAAAAkwn0kw30kwnwkwn0kw30ixH4jxH0hwXwkwnwkw34lwnwhwH0jxH0jw3wkw34lwn4kwn06OdIGAAAAEXRSTlMA+rPz62FaIRagy309PMuAoG3ulrYAAACeSURBVEjHpdVJDgIxDETRsjOnB6j7Xxah3nQEQiT19vXlnXFT07NH408Wz5Yqvtnd+Cfz/WNenFO8YJADJ4WMmwcXbMNeKmQuyte+BC4KBW/OZQ4ABwXHdYB0QjUKrCJRktAoaTgp6YiURBglpgaIqAa6GmhqIKmBamIArgYONQBXAyWIAWQ1gE0JqIXhtQkBFOea4b1rAaCm1uNs5QVeB4LE5MsVVQAAAABJRU5ErkJggg==) no-repeat 50%;
                background-size: 100%;
                margin-right: 4px;
                vertical-align: text-bottom;
                transform: scale(.83);
                width: 39px;
                height: 21px;
                text-align: center;
                line-height: 21px;
                display: inline-block;
                color: #fff;
                font-size: 12px;
            }
            .question-detail{
                color: #333;
                font-size: .2rem;
                line-height: .28rem;
            }
            
        }
        .question-options{
            width:100%;
            display:flex;
            flex-direction:column;
            margin-top: .12rem;
            .option{
                padding: .12rem .15rem;
                line-height: .2rem;
                display: block;
                display:flex;
                justify-content:flex-start;
                .option-choice{
                    
                    width: .24rem;
                    height: .24rem;
                    line-height: .24rem;
                    border: 1px solid #d4d4d4;
                    text-align: center;
                    color: #5c5c5c;
                    border-radius: 50%;
                    background: #fff;
                }
                .trueclass1{
                    background: url(//j2.58cdn.com.cn/jxedt/m/kaoshi/images/lx_item_state_right.png) no-repeat!important;
                    background-size: 26px!important;
                    
                }
                .trueclass2{
                    color: #18bc80!important;
                }
                .falseclass1{
                    background: url(//j2.58cdn.com.cn/jxedt/m/kaoshi/images/lx_item_state_wrong.png) no-repeat!important;
                    background-size: 26px!important;
                    
                }
                .falseclass2{
                    color: #ff4848!important;
                }
                .choice-detail{
                    line-height: .2rem;
                    color: #000;
                    font-size: .16rem;
                    margin-left: .12rem;
                    margin-top: 3px;
                }
            }
        }
    }
    .btns{
        position: fixed;
        width:1.75rem;
        height:.3rem;
        bottom: .76rem;
        right: .15rem;
        .prev-btn{
            float:left;
            margin-right: 25px;
            background: #d6d6d6;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
            width: 75px;
            height: 30px;
            /* background: #24c27d; */
            color: #fff;
            font-size: 13px;
            line-height: 30px;
            text-align: center;
            /* box-shadow: 0 2px 4px 0 rgba(36,194,125,.2); */
            border-radius: 15px;
        }
        .hasprev{
            background: #24c27d;
            box-shadow: 0 2px 4px 0 rgba(36,194,125,.2);
        }
        .next-btn{
            
            /* background: #d6d6d6;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.15); */
            width: 75px;
            height: 30px;
            background: #24c27d;
            color: #fff;
            font-size: 13px;
            line-height: 30px;
            text-align: center;
            box-shadow: 0 2px 4px 0 rgba(36,194,125,.2);
            border-radius: 15px;
            float:left;
        }
    }
    .explain{
        padding: 15px 0 30px;
        font-size: 14px;
        .explain-title{
            color: #333;
            height: .5rem;
            border-bottom: 1px solid #e6e6e6;
            .title-name{
                font-size: .16rem;
                font-weight: 900;
                position: relative;
                margin-left: .27rem;
                height: 100%;
                line-height: .50rem;
            }
            .title-name::before{
                display: block;
                position: absolute;
                content: " ";
                width: 4px;
                height: 14px;
                background: #24c27e;
                left: -12px;
                top: 50%;
                transform: translateY(-50%);
                border-radius: 2px;
            }
            .bck{
                width: 51px;
                height: 21px;
                line-height: 21px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAiBAMAAAAzPuMuAAAAMFBMVEUAAAAkw30kwn0jw30nvHkkwn0kwn0kwn0jwn4kxXwhyHokw34mxHwjxYAkwX4kwn3iZzRYAAAAD3RSTlMA9+KaCerIxlcjF4hKLIi9OEQ8AAAAlElEQVQ4y43KrQ3CUBiG0TdBUQ36LgApigRFUJCgmADBABg8Bk+TLtAh6pt0hG5y2/RH9WtyF7jP0UfiaovZvn4KUovzp1CN8CWuNha42p7XtsDVPrzOvPpMRh143fA68drxOvDa8+rl8NWT1zevZ17/vF54XfG6driq4vXKa5LiqobX5Iur7g5X5eS2Cm7HR7TuxC21d/svkxUsNAAAAABJRU5ErkJggg==) no-repeat 50%;
                display: inline-block;
                background-size: 100%;
                font-size: 12px;
                text-align: center;
                color: #fff;
                margin-left: 6px;
                transform: scale(.83);
            }
        }
        .explain-detail{
            color: #333;
            font-size: .16rem;
            line-height: .27rem;
            padding: .15rem .2rem;
        }
    }

    .show{
        display:block;
    }
    .hidden{
        display:none;
    }
`