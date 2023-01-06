import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
      <form onSubmit={handleSubmit}>
          <div>
              <Field name={"email"} placeholder={"E-mail"}
                     validate={[required]} component={Input}/>
          </div>
          <div>
              <Field name={"password"} placeholder={"Password"}
                     type={"password"} validate={[required]}
                     component={Input}/>
          </div>
          <div>
              <Field name={"rememberMe"} component={Input}
                     validate={[required]} type={"checkbox"}/> Remember me
          </div>
          {error && <div className={s.formSummaryError}>
              {error}
          </div>
          }
          <div>
              <button>Login</button>
          </div>
      </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to="/profile/"/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);