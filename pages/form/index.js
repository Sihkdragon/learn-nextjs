import { useForm } from "react-hook-form";
import TopItems from "../../components/molecules/TopItems";
import Header from "../../components/organism/Header";
const index = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  let today = new Date();
  return (
    <>
      <Header title="Form" />
      <TopItems bigTitleContent="Form" />
      <h3 className="text-lg text-indigo-600 my-5">Biodata Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2">
          {/* register your input into the hook by invoking the "register" function */}
          <label htmlFor="nama" className="label-input">
            Nama Lengkap
          </label>
          <input
            id="nama"
            defaultValue=""
            {...register("nama")}
            className="input-text"
          />

          <label htmlFor="ttl" className="label-input">
            Tempat Tanggal Lahir
          </label>
          <input
            type={"date"}
            id="ttl"
            defaultValue={today}
            {...register("ttl", { required: true })}
            className="input-text"
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" className="btn" />
        </div>
      </form>
    </>
  );
};

export default index;
