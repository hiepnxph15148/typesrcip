import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';

type TypeInputs = {
  name: string,
  email: string,
  password: string
}

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TypeInputs> = data => {
    signup(data);
    navigate("/signin");
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"></img>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email-address" className="sr-only">Name</label>
          <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"  {...register('name')} />
          <label htmlFor="email-address" className="sr-only">Email</label>
          <input type="email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"  {...register('email')} />
          <label htmlFor="email-address" className="sr-only">Password</label>
          <input type="password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"  {...register('password')} />
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></input>
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>
          <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng ký</button>
        </form>
      </div>
    </div>
  )
}

export default Signup