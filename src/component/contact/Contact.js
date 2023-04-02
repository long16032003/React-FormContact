import { useState } from 'react';
import './Contact.css'

function Contact() {

    //check name
    const [answer, setAnswer] = useState(() => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }));

    const [errors, setErrors] = useState(() => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }));

    const handleChange = (field, event) => {
        setAnswer(previousAnswer => {
            let newAnswer = {...previousAnswer};
            newAnswer[field] = event.target.value;

            return newAnswer;
        })
    }

    const check = (obj) => {
        let errors = {};
        if (obj.name === '') {
            errors.name = 'Vui lòng nhập Họ và tên'
        } else if(!/^[a-zA-Z]+ [a-zA-Z]+$/.test(obj.name)) {
            errors.name = 'Vui lòng nhập đúng định dạng'
        }

        if (obj.email === '') {
            errors.email = 'Vui lòng nhập email'
        } else if(! /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(obj.email)) {
            errors.email = 'Vui lòng nhập đúng định dạng'
        }

        if (obj.phone === '') {
            errors.phone = 'Vui lòng nhập phone'
        } else if(!/((09|03|07|08|05)+([0-9]{8})\b)/g.test(obj.phone)) {
            errors.phone = 'Vui lòng nhập đúng định dạng'
        }

        if (obj.message === '') {
            errors.message = 'Vui lòng nhập message'
        }

        return errors;
    }

    const validate = () => {
        let errors = check(answer);

        // dung hien loi
        setErrors(previousErrors => {
            return {...errors};
        })

        return errors;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if(!errors.name
            && !errors.email
            && !errors.phone
            && !errors.message) {
                alert("Bạn đã gửi liên hệ thành công. Chúng tôi sẽ sớm liên hệ lại với Bạn")
            }
        
        console.log(answer);
        console.log(errors);
    }

    return (
        <div className='contact'>
            <div className='contact-form'>
                <h2>Liên hệ</h2>
                <div className="content-contact">
                    <i className="fas fa-location-dot"></i>
                    <p>Địa chỉ: Tầng 1, Tòa nhà C5, Đại học Thủy Lợi, 175 Tây Sơn, Đống Đa, Hà Nội</p>
                </div>
                <div className="content-contact">
                    <i className="fas fa-phone"></i>
                    <p>Tel: 0381 233 142</p>
                </div>
                <div className="content-contact">
                    <i className="fas fa-tty"></i>
                    <p>Hotline: 0908 123 443</p>
                </div>
                <div className="content-contact">
                    <i className="fas fa-envelope-open-text"></i>
                    <p>Email: info@aptech.vn</p>
                </div>
            </div>
            <form className='input-form'>
                <div className='input'>
                    <input 
                        value={answer.name}s
                        className={errors.name ? 'error' : ''}
                        onChange={event => handleChange('name', event)} 
                        // onBlur={validate} 
                        placeholder='Họ và tên'></input>
                    {errors.name && (
                        <div>
                            <span style={{ color: 'red' }}>
                                {errors.name}
                            </span>
                        </div>
                    )}
                </div>

                <div className='input'>
                    <input 
                        value={answer.email} 
                        onChange={event => handleChange('email', event)} 
                        // onBlur={validate} 
                        className={errors.email ? 'error' : ''}
                        placeholder='Email'></input>
                    {errors.email && (
                        <div>
                            <span style={{ color: 'red' }}>
                                {errors.email}
                            </span>
                        </div>
                    )}
                </div>
                <div className='input'>
                    <div className='input-sdt'>
                        <input 
                        value={answer.phone} 
                        onChange={event => handleChange('phone', event)} 
                        // onBlur={validate} 
                        className={errors.phone ? 'error' : ''}
                        placeholder='Số điện thoại'></input>    
                        <div className='quocky'>
                            <img width="100%" src="./img/quoc-ky-viet-nam.jpg"></img>
                        </div>
                    </div>
                    {errors.phone && (
                        <div>
                            <span style={{ color: 'red' }}>
                                {errors.phone}
                            </span>
                        </div>
                    )}
                </div>

                <div className='input'>
                    <textarea cols="20" rows="8" 
                    value={answer.message} 
                    className={errors.message ? 'error' : ''}
                    onChange={event => handleChange('message', event)} 
                    // onBlur={validate} 
                    placeholder='Lời nhắn'></textarea>
                    {errors.message && (
                        <div>
                            <span style={{ color: 'red' }}>
                                {errors.message}
                            </span>
                        </div>
                    )}
                </div>
                <span className='size-textarea'>0/300</span>
                <button type="button" onClick={handleSubmit}>Gửi</button>
            </form>
        </div>
    )
}

export default Contact;