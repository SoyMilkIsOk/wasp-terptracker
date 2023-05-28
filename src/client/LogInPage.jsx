import { Link } from 'react-router-dom'
import Header from './Header.jsx'
import { LoginForm } from '@wasp/auth/forms/Login'

const appearance = {
  colors: {
    brand: '#5EC269', // green
    brandAccent: '#3C7E44', // dark green
    submitButtonText: 'white',
  },
}

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-1/2 my-16">
        <main className="p-6 max-w-md w-full bg-white shadow-md rounded-md">
          <Header />
          <LoginForm appearance={appearance} />
          <br />
          <span>
            I don't have an account yet (<Link to="/signup">go to signup</Link>).
          </span>
        </main>
      </div>
    </>
  )
}

export default LoginPage