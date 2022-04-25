import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.username == "admin" || data.password == "admin") {
      router.push("/");
    }
  };
  return (
    <div className="w-full min-h-screen bg-indigo-900 flex justify-center items-center">
      <section className="max-w-lg rounded-md bg-white max-h-fit p-8 shadow-lg">
        <h1 className="font-bold text-2xl text-slate-700 text-center">
          Welcome To Learn Next JS
        </h1>
        <p className="text-md text-center mb-5 text-indigo-400">
          Please Login To Continue
        </p>

        {/* Username */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5"
        >
          <label htmlFor="username" className="label-input">
            Username
          </label>
          <div className="input-group">
            <input
              id="username"
              defaultValue=""
              {...register("username", { required: true })}
              placeholder="Username"
              className="input-text-sign"
            />

            {errors.username && (
              <span className="error-text-sign">This field is required</span>
            )}
          </div>

          {/* Password  */}

          <label htmlFor="password" className="label-input">
            Pasword
          </label>
          <div className="input-group">
            <input
              type="password"
              id="password"
              defaultValue=""
              {...register("password", { required: true })}
              placeholder="password"
              className="input-text-sign"
            />
            {errors.username && (
              <span className="error-text-sign">This field is required</span>
            )}
          </div>

          <input type="submit" value="Log In" className="btn bg-lime-500" />
          <input type="reset" value="Reset" className="btn bg-rose-500" />
          <a
            href="/forgot-password"
            className="text-center hover:underline hover:text-indigo-300"
          >
            Forgot Password ?
          </a>
          <span className="text-center  hover:underline hover:text-indigo-300">
            Get <a href="/login-help"> Help</a>
          </span>
        </form>
      </section>
    </div>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
