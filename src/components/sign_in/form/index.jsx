import SimpleInput from "../../inputs/simple";
import PrincipalButton from "../../buttons/principal";
import RememberAndForgotPassword from "../remember_and_forgot_password";
import {Formik} from 'formik';
import validate from "./validate";
import defaultValues from "./defaultValues";
import network from "../../../network";
import {useToasts} from 'react-toast-notifications';
import {bindActionCreators} from "redux";
import {signInUser} from "../../../actions/userActions";
import {connect} from "react-redux";
import generateJwt from "../../../utils/generateJwt";
import {useCookies} from "react-cookie";
import {COOKIE_NAME} from "../../../utils/constants";

function SignInForm(props) {
  const [cookie, setCookie] = useCookies([COOKIE_NAME])

  const {addToast} = useToasts()

  const _onSubmit = async (setSubmitting, values) => {

    try {
      let response = await network.auth().sign_in(values.email, values.password)
      if (response.success) {
        showToast('Has iniciado sesión', 'success');
        setCookie(COOKIE_NAME, generateJwt({user: {email: values.email}}))
        props.signInUser({email: 'demoa@gmail.com'});
      } else {
        showToast('Email o contraseña inválidos', 'error')
      }
    } catch (e) {
      console.log(e, "ERROR")
      showToast('Ha ocurrido un error al iniciar sesión', 'error')
    }
    setSubmitting(false);
  }

  const showToast = (message, type) => {
    addToast(message, {
      appearance: type,
      autoDismiss: true,
    })
  }

  return (
    <Formik
      initialValues={
        defaultValues()
      }
      validate={(values) => validate(values)}
      onSubmit={(values, {setSubmitting}) => {
        _onSubmit(setSubmitting, values);
      }}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
        <form
          onSubmit={handleSubmit}
          className='flex bg-white px-6 py-10 rounded shadow-lg space-y-5 flex-wrap'>
          <SimpleInput
            error={errors.email && touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type={'text'}
            id={'email'}
            value={values.email}
            placeholder={'batman@gmail.com'}
            label={'Dirección de Correo'}
            name={'email'}/>

          <SimpleInput
            error={errors.password && touched.password && errors.password}
            type={'password'}
            id={'password'}
            value={values.password}
            placeholder={'********'}
            label={'Contraseña'}
            onChange={handleChange}
            onBlur={handleBlur}
            name={'password'}/>

          <RememberAndForgotPassword/>

          <PrincipalButton
            type={"submit"}
            disabled={isSubmitting}
            text={isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
          />

        </form>
      )}
    </Formik>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInUser: bindActionCreators(signInUser, dispatch),
  }
};

export default connect(null, mapDispatchToProps)(SignInForm);


