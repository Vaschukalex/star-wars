import React, { useState, useEffect, useRef } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import popUpImg from '../../img/pop-up-1.jpeg';

const Contact = () => {
    const maxTextLineLength: number = 250;
    const [code, setCode] = useState('');
    const inputCode:any = useRef();
    const [phone, setPhone] = useState('');
    const inputPhone:any = useRef();
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [checked, setChecked] = useState(false);

    const handleSubmit = (ev:any) => {

        ev.preventDefault();
        setOpen(!open);
        setName("");
        setLastName("");
        setEmail("");
        setMsg("");
        setChecked(!checked);
        inputCode.current.value = "";
        inputPhone.current.value = "";
        setTimeout(() => closeModal(), 5000);

    }

    const phoneMask = () => {
        const phoneValue = inputPhone.current.value
            .replace(/\D/g, '')
            .match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
        inputPhone.current.value = !phoneValue[2]
            ? phoneValue[1]
            : `${phoneValue[1]}-${phoneValue[2]}${`${phoneValue[3] ? `-${phoneValue[3]}` : ''
            }`}${`${phoneValue[4] ? `-${phoneValue[4]}` : ''}`}`;
        const numbers = inputPhone.current.value.replace(/(\D)/g, '');
        setPhone(numbers);
    };

    const codeMask = () => {
        const codeValue = inputCode.current.value
            .replace(/\D/g, '')
            .match(/(\d{0,2})(\d{0,3})/);
        inputCode.current.value = !codeValue[2]
            ? codeValue[1]
            : `${codeValue[1]}-${codeValue[2]}`;
        const numbers = inputCode.current.value.replace(/(\D)/g, '');
        setCode(numbers);
    };

    useEffect(() => {
        phoneMask();
        codeMask();
    }, [phone,code]);




    return (

        <div className="contact_wrapper">
            <div className="container contact_form_wrapper">
                <div className="row">
                    <div className="col">
                        <div className="card card_contact">
                            <h5 className="card-title card_title_contact">Contact Form</h5>
                            <div className="card-body">
                                <form onSubmit={handleSubmit} >

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">First Name</label>
                                            <input type="text" value={name} className="form-control" id="inputEmail4" placeholder="Mateusz" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Last Name</label>
                                            <input type="text" value={lastName} className="form-control" id="inputPassword4" placeholder="Wszelaki" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setLastName(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label htmlFor="inputCity">Phone</label>
                                            <input type="phone" className="form-control" id="inputCity" placeholder="094-345-543" ref={inputPhone} onChange={phoneMask} required />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputZip">Postal code</label>
                                            <input type="text" className="form-control" id="inputZip" placeholder="01-233" ref={inputCode} onChange={codeMask} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">Email</label>
                                        <input type="Email" value={email} className="form-control" id="inputAddress" placeholder="example@gmail.com" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" value={msg} id="exampleFormControlTextarea1" maxLength={maxTextLineLength} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setMsg(e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" checked={checked}
                                                onChange={(e) => { setChecked(!checked) }} />
                                            <label className="form-check-label agree_text" htmlFor="gridCheck">
                                                I agree to the Terms and Conditions.
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form_btn"><button type="submit" className="btn btn-warning btn-lg btn-block" disabled={!checked}>Submit</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="stars"></div>
            <div id="stars2"></div>

            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img className="popup_img" src={popUpImg} alt="Star Wars Banne"></img>
                        </div>
                        <div className="col-sm">
                            <h2 className="popup_title">Thank you for your message!</h2>
                            <p className="popup_desc">Your message was successfully delivered. We will contact you shortly</p>
                        </div>
                    </div>
                </div>

            </Popup>
        </div>
    )
}
export default Contact;