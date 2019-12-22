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
        };
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
        if (userName !== ''){
            let jwt_token = localStorage.jwtToken;
            let url = this.state.url;
            axios.get(url+'/user/'+userName).then((response) => {
                console.log(response);
            }).catch((error)=>{
                    console.log(error);
                }
            );
        }
    }


    handleEditPreference(event){
        event.preventDefault();
        let taste = event.target[0].value;
        let taboo = event.target[1].value;
        let disease = event.target[2].value;
        let region = event.target[3].value;
        let description = event.target[4].value;

        let url = this.state.url;
        let jwt_token = localStorage.jwtToken;
        let userName = localStorage.userName;

        {/*axios.put(url+'/user', {
            age: age,
            weight: weight,
            height: height,
            email: email,
            phone: phone,
            userName: userName
        }, {
            headers: `JWT `+jwt_token
        }).then((response)=>{

        }).catch((error)=>{

        });*/}

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

    handleEditInfo(event){
        event.preventDefault();

        let age = event.target[0].value;
        let weight = event.target[1].value;
        let height = event.target[2].value;
        let email = event.target[3].value;
        let phoneNumber = event.target[4].value;

        let userName = localStorage.userName;
        let url = this.state.url;
        axios.put(url + '/user',{
            user:{
                userName: userName,
                age: age,
                weight: weight,
                height: height,
                eMail: email,
                phoneNumber: phoneNumber
            }
        }).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
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
                        <h1 className="contact-title">{userName}</h1>
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
                                    <input type="text" value="spicy" name="diseases" id="diseases" placeholder="Diseases *"/>
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
                    {/*<div className="contact-address pt-110 pb-5">
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
                    </div>*/}
                    <div className="contact-address pt-110 pb-100">
                        <h1 className="contact-title">PERSONAL INFO</h1>
                        {alertSign1 === '1'? <div className="alert alert-info" role="alert">You successfully edit the personal infomation!</div>:''}
                        <div className="contact-list-wrapper">
                            <form id="profile-form" method="post" onSubmit={handleEditInfo.bind(this)}>
                                <div className="contact-list">
                                    <span>Age</span>
                                    <input type="number" step="1" name="age" id="ageInput"/>
                                </div>
                                <div className="contact-list">
                                    <span>Weight</span>
                                    <input type="number" step="1" name="weight" id="weightInput"/>
                                </div>
                                <div className="contact-list">
                                    <span>Height</span>
                                    <input type="number" step="1" name="height" id="heightInput"/>
                                </div>
                                <div className="contact-list">
                                    <span>E-mail</span>
                                    <input type="email" name="email" id="emailInput"/>
                                </div>
                                <div className="contact-list">
                                    <span>Phone Number</span>
                                    <input type="text" name="phone" id="phoneInput"/>
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