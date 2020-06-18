import React, { Component } from 'react'
import { Spstyle } from 'styles/p1-sp-styled.js'
import { get } from 'utils/http.js'

export default class P1Sequentialpractice extends Component {
    // constructor(){
    //     super()


    // }
    state = {
        questions: [],
        id: 1,
        showexplain: false,
    }
    // async componentDidUpdate(){
    //     console.log(1)

    //     this.state.questions.push(result.data)
    //     console.log(this.state.questions)
    //     // this.setState({

    //     // })

    // }
    async componentDidMount() {
        let result = await get({
            url: '/api/mnksnew/g.asp',
            params: {
                id: this.state.id
            }
        })

        let questions = []
        questions.push(result.data)

        this.setState({
            questions: questions
        })

    }
    async handlenext() {
        let id = this.state.id + 1
        let result = await get({
            url: '/api/mnksnew/g.asp',
            params: {
                id: id,
            }
        })
        // let questions = this.state.questions
        // let questions = []
        // questions.push(result.data)
        // this.setState({
        //     id: this.state.id + 1,
        //     questions: [...this.state.questions, ...questions],
        //     showexplain: false
        // })
        // console.log(this.state);

        // this.state.questions.forEach(item => {
        //     console.log(item);
        //     if (item.id === result.data.id){
                
        //     }
        //         console.log(result.data);
        // })
        this.setState((state) => (
            {
                id: state.id + 1,
                questions: [...state.questions, result.data],
                showexplain: false
            }
        ))


        // this.setState((state, props) => {
        //     // console.log(questions,"------------------");
        //     // console.log(state.questions);
        //     // console.log(state.questions,"++++++++++++++++++")
        //     console.log(questions);
        //     return {
        //         id: state.id + 1,
        //         questions: [...state.questions,...questions],
        //         showexplain: false
        //     }
        // })
        // this.setState((preState, props) => {
        //     // preState.id = preState.id+1
        //     // preState.questions=preState.questions.push(result.data)
        //     // console.log(preState,props)


        //     console.log(preState.questions.push(result.data));
        //     return {
        //         id: preState.id + 1,
        //         questions: preState.questions.push(result.data),
        //         showexplain: false
        //     }
        // })
        // this.setState((prestate,props) =>({
        //     id:prestate.id,
        //     questions:prestate.questions.push(result.data)
        // }))

    }
    handleprev() {
        // console.log(this)
        if (this.state.id === 1) {
            alert("已经是第一题了")
        } else {
            let id = this.state.id - 1
            this.setState({
                id: id,
                showexplain: false
            })
        }
    }
    choicethis(anid, e) {

        // console.log(this.state.questions[this.state.id-1].answertrue)
        // console.log(anid)
        if (this.state.questions[this.state.id - 1].answertrue == anid) {
            let rightNode = document.getElementsByClassName("option")[this.state.questions[this.state.id - 1].answertrue - 1]

            rightNode.children[0].classList.add('trueclass1')
            rightNode.children[0].innerHTML = ""
            rightNode.children[1].classList.add('trueclass2')

            setTimeout(() => {
                this.handlenext()
            }, 1000)
            console.log("回答正确")
        } else {
            setTimeout(() => {
                this.setState({
                    showexplain: true
                })
            }, 1110)

            let rightNode = document.getElementsByClassName("option")[this.state.questions[this.state.id - 1].answertrue - 1]
            // console.log(rightNode)
            rightNode.children[0].classList.add('trueclass1')
            rightNode.children[0].innerHTML = ""
            rightNode.children[1].classList.add('trueclass2')
            if (e.target.children.length) {
                e.target.children[0].classList.add('falseclass1')
                e.target.children[0].innerHTML = ""
                e.target.children[1].classList.add('falseclass2')
            } else if (e.target.className === 'choice-detail') {
                e.target.classList.add('falseclass2')
                e.target.previousSibling.classList.add('falseclass1')
                e.target.previousSibling.innerHTML = ""
            } else if (e.target.className === 'option-choice') {
                e.target.classList.add('falseclass1')
                e.target.nextSibling.classList.add('falseclass2')
                e.target.innerHTML = ""
            }

        }

    }

    backto() {
        this.props.history.goBack()
    }
    render() {

        let choiceitem = ["正确", "错误"]
        let items = this.state.questions
        let index = this.state.id
        let item = items[index - 1] === undefined ? '' : Object.values(items[index - 1]).slice(2, 6)
        let panduan_keys = items[index - 1] === undefined ? '' : this.state.questions[index - 1].bestanswerid
        return (
            <Spstyle>
                <div className="sp-header">
                    <div onClick={this.backto.bind(this)} className="icon iconfont">&#xe743;</div>
                    顺序练习
                    </div>
                {
                    items.length !== 0
                    &&

                    (<div className="question">


                        <div className="question-title">
                            {
                                items[index - 1].an3 === ""
                                    ?
                                    <span className="question-type">判断</span>
                                    :
                                    <span className="question-type">单选</span>
                            }

                            <span className="question-detail">{items[index - 1].question}</span>
                        </div>
                        <div className="question-options">

                            {

                                items[index - 1].an3 === ""
                                    ?
                                    <div>
                                        {
                                            choiceitem.map((value, index) => {
                                                let arr1 = ["A", "B"]
                                                // let time = Date.now()
                                                // console.log(Date.now())
                                                return (
                                                    <div className="option" onClick={this.choicethis.bind(this, index + 1)} key={panduan_keys + index + value}>
                                                        <div className="option-choice">{arr1[index]}</div>
                                                        <div className="choice-detail">{value}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* <div className="option" onClick={this.choicethis.bind(this,1)} key={Date().now}>
                                            <div className="option-choice">A</div>
                                            <div className="choice-detail">正确</div>
                                        </div>
                                        <div className="option" onClick={this.choicethis.bind(this,2)} key={Date().now}>
                                            <div className="option-choice">B</div>
                                            <div className="choice-detail">错误</div>
                                        </div> */}
                                    </div>
                                    :
                                    <div>
                                        {
                                            item.map((value, index) => {
                                                let arr = ["A", "B", "C", "D"]
                                                return (
                                                    <div className="option" onClick={this.choicethis.bind(this, index + 1)} key={index + value}>
                                                        <div className="option-choice">{arr[index]}</div>
                                                        <div className="choice-detail">{value}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            }

                        </div>

                    </div>)
                }
                {
                    items.length !== 0 && this.state.showexplain
                    &&
                    <div>
                        <div className="explain">
                            <div className="explain-title">
                                <span className="title-name">官方解释</span>
                                <span className="bck">权威</span>
                            </div>
                            <div className="explain-detail" dangerouslySetInnerHTML={{ __html: items[index - 1].explain }} />
                        </div>
                    </div>

                }
                <div className="btns">
                    <div onClick={this.handleprev.bind(this)} className={`prev-btn ${index > 1 ? 'hasprev' : ''}`}>上一题</div>
                    <div onClick={this.handlenext.bind(this)} className="next-btn">下一题</div>
                </div>


            </Spstyle>
        )
    }
}
