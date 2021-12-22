import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCurrentUserAtom from "../state/currentUserAtom";
interface RegisterData {
  username: string;
  email: string;
  password: string;
}

function Register() {
  // https://react-hook-form.com/

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const { register: signUp } = useCurrentUserAtom();

  const navigate = useNavigate();
  function onSubmit(data: RegisterData) {
    signUp({
      ...data,
      bio: null,
      image: "https://api.realworld.io/images/smiley-cyrus.jpeg",
      token: "test",
    });
    navigate("/");
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <a className="" href="#login">
                Have an account?
              </a>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    required={true}
                    {...register("username", { required: true })}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    required={true}
                    {...register("email", { required: true })}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    required={true}
                    minLength={10}
                    {...register("password", { min: 10, required: true })}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign up
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
