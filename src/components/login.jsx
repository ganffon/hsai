import React, { Component } from 'react';
import '../styles/login.css';
import leftImg from "../img/ai.jpg"
import logoImg from "../img/human2.png"

class Login extends Component {
    
    factoryRef = React.createRef()
    chkRef = React.createRef()
    idRef = React.createRef()
    passwordRef = React.createRef()

    handleLogin = e =>{
        e.preventDefault();

        console.log("공장 : " + this.factoryRef.current.value)
        console.log("체크 : " + this.chkRef.current.checked)
        console.log("아이디 : " + this.idRef.current.value)
        console.log("비밀번호 : " + this.passwordRef.current.value)

    }

    render() { 
        return (
            <main>
                <div className="left pannel">
                    <img className="left-Img" src={leftImg} alt="" />
                </div>
                <div className="right pannel">
                    <form className="form-Login">
                        <img className="logo-Img" src={logoImg} alt="" />
                        <section className="login-Box">
                            <article className="login-Box__Up">
                                <label>공장</label>
                                <select ref={this.factoryRef}>    
                                    <option value="factory_1">공장_1</option>
                                    <option value="factory_2">공장_2</option>
                                    <option value="factory_3">공장_3</option>
                                </select>
                                <label className="id-Save" for="chk">아이디 저장</label>
                                <input ref={this.chkRef} className="checkBox" type="checkbox" id="chk"/>
                            </article>                                
                            <article className="login-Box__Down">
                                <label>아이디</label>
                                <input ref={this.idRef} type="text" placeholder='아이디를 입력하세요'/>
                                <label>비밀번호</label>
                                <input ref={this.passwordRef} type="password" placeholder='비밀번호를 입력하세요'/>
                                <button onClick={this.handleLogin}>로그인</button>
                            </article>
                        </section>
                    </form>
                </div>
            </main> 
        );
    }
}

export default Login;