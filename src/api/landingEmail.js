import emailjs from 'emailjs-com';

export default function sendEmail(form) {

    return emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE, form.current, process.env.REACT_APP_EMAIL_JS_USER_ID)
        .then((result) => {
            console.log(result.text);
            return result.text
        }, (error) => {
            console.log(error.text);
        });

};