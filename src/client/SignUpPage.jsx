import { Link } from 'react-router-dom'
import Header from './Header.jsx'
import { SignupForm } from '@wasp/auth/forms/Signup'

const appearance = {
  colors: {
    brand: '#5EC269', // green
    brandAccent: '#3C7E44', // dark green
    submitButtonText: 'white',
  },
}

const SignupPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-1/2 py-4">
        <main className="p-6 max-w-md w-full bg-white shadow-md rounded-md">
          <Header />
          <SignupForm appearance={appearance} />
          <br />
          <span>
            I already have an account (<Link to="/login">go to login</Link>).
          </span>
        </main>
      </div>
    </>
  )
}

export default SignupPage