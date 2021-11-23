export default function SignIn(email, password) {

  if (email === 'grey@whiteboard.cl' && password === '12345678') {
    return {
      success: true,
      user: {
        email: 'grey@whiteboard.cl'
      }
    }
  } else {
    return {
      success: false,
      user: {}
    }
  }

}