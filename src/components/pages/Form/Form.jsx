import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import formStyle from "./form.module.css";

const Form = () => {
    const [emailValue, setEmailValue] = useState(``);
    const [passValue, setPassValue] = useState(``);
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passDirty, setPassDirty] = useState(false);
    const [emailError, setEmailError] = useState(`Email не может быть пустым`);
    const [passError, setPassError] = useState(`Пароль не может быть пустым`);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passError || checkboxValue === false) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passError, checkboxValue])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case `email`: {
                setEmailDirty(true);
                break;
            }
            case `password`: {
                setPassDirty(true);
                break;
            }
            default: {
                setEmailDirty(emailDirty);
                setPassDirty(passDirty);
            }
        }
    }

    const emailHandler = (e) => {
        setEmailValue(e.target.value);
    
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if (e.target.value?.length === 0) {
            setEmailError(`Email не может быть пустым`);
        } else if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError(`email введен не корректно`);
        } else {
            setEmailError(``);
        }
    };

    const passHandler = (e) => {
        setPassValue(e.target.value);

        if (e.target.value?.length === 0) {
            setPassError(`Пароль не может быть пустым`);
        } else if (passValue.length < 6) {
            setPassError(`Минимальное количество символом должно быть равно 6`);
        } else {
            setPassError(``);
        }
    }

    const checkboxHandler = (e) => {
        setCheckboxValue(!checkboxValue);
    }
    return (
        <div className={formStyle["container-form"]}>
            <form className={formStyle["form"]} method="post">
                <h1 className={formStyle["form__heading"]}>вход</h1> 
                <div className={formStyle["form__wrapper"]}>

                    <input value={emailValue} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="email" name="email" className={formStyle["form__input"] + " " + formStyle["form__input-email"]} placeholder="E-mail"/>
                    {(emailDirty && emailError) &&  
                        <span className={formStyle["form__error"] + " "+ formStyle["form__email-error"]}>{emailError}</span>
                    }
                    
                    <input value={passValue} onChange={e => passHandler(e)} onBlur={e => blurHandler(e)} type="password" name="password"  className={formStyle["form__input"] + " " + formStyle["form__input-pass"]} placeholder="Пароль"/>
                    {(passDirty && passError) &&
                        <span className={formStyle["form__error"] + " " + formStyle["form__password-error"]}>{passError}</span>
                    }
                    <div className={formStyle["form__checkbox"]}>
                        <input onChange={e => checkboxHandler(e)} type="checkbox" name="inp_check" id="input-checkbox" className={formStyle["form__input-checkbox"]} />
                        <div className={formStyle["form__checkbox-mark"]}></div>
                        <label htmlFor="input-checkbox" className={formStyle["form__checkbox-label"]}>Я согласен получать обновления на почту</label>
                    </div>

                    {(checkboxValue === false) && 
                        <span className={formStyle["form__error"] + " " +  formStyle["form__checkbox-error"]}>Поле обязательно для заполнения</span>
                    }
                </div>

                <Link to='/main'>
                    <button disabled={!formValid} className={formStyle["form__button"]}>Войти</button>
                </Link> 

            </form>
        </div>
    )
}

export default Form;