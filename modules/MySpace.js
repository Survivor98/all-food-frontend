import React, {Component} from "react";
import axios from "axios/index";
import {hashHistory} from 'react-router';

export default class MySpace extends Component {

    constructor(props){
        super(props);
        this.state={
            userName:'',
            alertSign: '0',
            alertSign1: '0',
            url: 'http://10.21.38.20:5000'
        }
        this.handleEditPreference = this.handleEditPreference.bind(this);
        this.handleEditInfo = this.handleEditInfo.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.fetchUserData = this.fetchUserData.bind(this);
    }

    componentWillMount(){
        if(localStorage.jwtToken === "undefined"){
            hashHistory.push('/');
            window.alert('You need to login before going to your homepage!');
        }
    }

    componentDidMount() {
        let userName = localStorage.userName;
        this.setState({
            userName: userName
        });
        this.fetchUserData()
    }

    fetchUserData(){
        let userName = this.state.userName;
        let jwt_token = localStorage.jwtToken;
        let url = this.state.url;
        axios.get(url+'/user/'+userName,
            {
                headers: {"Authorization" : `Bearer`+jwt_token},
            }).then((response) => {
            console.log(response);
        }).catch((error)=>{
                console.log(error);
            }
        );

    }


    handleEditInfo(event){
        event.preventDefault();
        let age = event.target[0].value;
        let weight = event.target[1].value;
        let height = event.target[2].value;
        let email = event.target[3].value;
        let phone = event.target[4].value;

        this.setState({
            alertSign1: '1'
        }, ()=>{
            setTimeout(()=>{
                this.setState({
                    alertSign1: '0'
                })
            },5000)
        })
    }

    handleEditPreference(event){
        event.preventDefault();
        this.setState({
            alertSign: '1'
        }, ()=>{
            setTimeout(()=>{
                this.setState({
                    alertSign: '0'
                })
            },5000)
        })
    }

    handlePwdChange(event){
        event.preventDefault();
        console.log('OriPwd:'+ event.target[0].value);
        console.log('NewPwd'+ event.target[1].value);
    }

    render() {
        const userName = localStorage.userName;
        let alertSign = this.state.alertSign;
        let alertSign1 = this.state.alertSign1;
        const handleEditPreference = this.handleEditPreference;
        const handleEditInfo = this.handleEditInfo;
        const handlePwdChange = this.handlePwdChange;

        return (
            <div>
                {/*<!-- Breadcrumb Area Start -->*/}
                <div className="breadcrumb-area bg-myspace text-center">
                    <div className="container">
                        <h1>My Space</h1>
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">My Space</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/*<!-- Breadcrumb Area End -->*/}
                {/*<!-- Contact Area Start -->*/}
                <div className="contact-area fix mb-95">
                    <div className="contact-form pt-110">
                        <h1 className="contact-title">Cloud</h1>
                        <h3>Your Preference</h3>
                        {alertSign === '1'? <div className="alert alert-info" role="alert">You successfully edit the preference!</div>:''}
                        <form id="contact-form" method="post">
                            <div className="row">
                                {/*<!--<div className="col-md-6">
                                    <input type="text" name="name" id="name" placeholder="First Name *">
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="l_name" id="l_name" placeholder="Last Name *">
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="email" id="email" placeholder="Email *">
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="user_id" id="user_id" placeholder="User ID *">
                                </div>-->*/}
                                <div className="col-md-6">
                                    <input type="text" name="tastes" id="tastes" placeholder="Tastes *"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="tastes" id="taboo" placeholder="Taboo *"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" value="spicy" name="tastes" id="diseases" placeholder="Diseases *"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" value="Jiangxi" name="tastes" id="regions" placeholder="Regions *"/>
                                </div>
                            </div>
                            <textarea name="description" id="description" placeholder="Description *"/>
                            <button type="submit" className="submit-btn default-btn"  onClick={handleEditPreference.bind(this)}>
                                <span>Edit Tags</span>
                            </button>
                            <p className="form-message"></p>
                        </form>
                    </div>
                    <div className="contact-address pt-110 pb-5">
                        <form id="pwd-form" method="post" onSubmit={handlePwdChange.bind(this)}>
                            <h1 className="contact-title">PASSWORD</h1>
                            <div className="row">
                                <div className="col-10">
                                    <input type="password" name="oriPwd" id="oriPwd" placeholder="Original Password"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-10">
                                    <input type="password" name="newPwd" id="newPwd" placeholder="New Password"/>
                                </div>
                            </div>
                            <button type="submit" className="submit-btn default-btn">Change Password</button>
                        </form>
                    </div>
                    <div className="contact-address pb-100">
                        <h1 className="contact-title">PERSONAL INFO</h1>
                        {alertSign1 === '1'? <div className="alert alert-info" role="alert">You successfully edit the personal infomation!</div>:''}
                        <div className="contact-list-wrapper">
                            <form id="profile-form" method="post" onSubmit={handleEditInfo.bind(this)}>
                                <div className="contact-list">
                                    <span>Age</span>
                                    <input type="number" step="1" name="age" id="ageInput" value="22"/>
                                </div>
                                <div className="contact-list">
                                    <span>Weight</span>
                                    <input type="number" step="1" name="weight" id="weightInput" value="170"/>
                                </div>
                                <div className="contact-list">
                                    <span>Height</span>
                                    <input type="number" step="1" name="height" id="heightInput" value="180"/>
                                </div>
                                <div className="contact-list">
                                    <span>E-mail</span>
                                    <input type="email" name="email" id="emailInput" value="773774280@qq.com"/>
                                </div>
                                <div className="contact-list">
                                    <span>Phone Number</span>
                                    <input type="text" name="phone" id="phoneInput" value="13926217613"/>
                                </div>
                                <button type="submit" className="submit-btn default-btn">Change Profile</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/*<!-- Contact Area End -->*/}

            </div>
        )
    }
}