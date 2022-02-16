import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {

    const {register,handleSubmit,formState: { errors },} = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="email">email</label>
        <input id="email" {...register("email", {required: "required",
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"}})
        }
        type="email"/>
        {errors.email && <span role="alert">{errors.email.message}</span>}


      <label htmlFor="password">password</label>
      <input id="password" {...register("password", {required: "required",
          minLength: {
            value: 5,
            message: "min length is 5"
          }
        })}
        type="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}

      <label htmlFor="Confirm">password Confirm</label>
      <input id="Confirm" {...register("Confirm", {required: "required",
          minLength: {
            value: 5,
            message: "min length is 5"
          }
        })}
        type="password"
      />
      {errors.Confirm && <span role="alert">{errors.Confirm.message}</span>}



      <button type="submit">SUBMIT</button>

          <style jsx>{`
              form{
                  display:flex;
                  flex-direction:column;
                  width:100%;
                  margin:2rem auto;
               
              }
              input{
                  margin:1rem 0;
                  width:20%;
              }
              
              `}

          </style>
        </form>
      );

};

export default Form;
