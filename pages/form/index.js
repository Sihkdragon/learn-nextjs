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

  // console.log(watch("example")); // watch input value by passing the name of it
  let today = new Date();
  return (
    <>
      <Header title="Form" />
      <TopItems
        bigTitleContent="Form"
        button={true}
        destination="formvariant"
      />
      <h3 className="text-lg text-indigo-600 my-5">Biodata Form</h3>
      <div className="grid grid-cols-2 gap-x-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="nama" className="label-input">
              Nama Lengkap
            </label>
            <input
              id="nama"
              defaultValue=""
              {...register("nama", { required: true })}
              placeholder="Name"
              className="input-text"
            />
            {errors.nama && (
              <span className="error-text">This field is required</span>
            )}

            <label htmlFor="email" className="label-input">
              E-mail
            </label>
            <input
              id="email"
              defaultValue=""
              {...register("email", { required: true })}
              className="input-text"
              placeholder="example@domain.com"
            />
            {errors.email && (
              <span className="error-text">This field is required</span>
            )}

            <label htmlFor="address" className="label-input">
              Address
            </label>
            <input
              id="address"
              defaultValue=""
              {...register("address", { required: true })}
              className="input-text"
              placeholder="Street Name No. X"
            />
            {errors.address && (
              <span className="error-text">This field is required</span>
            )}

            <label htmlFor="phone" className="label-input">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              defaultValue=""
              {...register("phone", { required: true })}
              className="input-text"
              placeholder="08xxxxxxxx"
            />
            {errors.phone && (
              <span className="error-text">This field is required</span>
            )}

            <label htmlFor="website" className="label-input">
              Website
            </label>
            <input
              id="website"
              defaultValue=""
              {...register("website", { required: true })}
              className="input-text"
              placeholder="yourwebsite.com"
            />
            {errors.website && (
              <span className="error-text">This field is required</span>
            )}

            <div className="button-form-group">
              <input
                type="submit"
                className="btn bg-indigo-500  hover:bg-indigo-400"
              />
              <input
                type="reset"
                className="btn reset bg-rose-600 hover:bg-rose-400"
              />
            </div>
          </div>
        </form>
        <div className=" w-full h-fit">
          <h3 className="text-lg text-rose-500">Nama Lengkap :</h3>
          <div className="output">{watch("nama")}</div>
          <h3 className="text-lg text-rose-500">E-mail :</h3>
          <div className="output">{watch("email")}</div>
          <h3 className="text-lg text-rose-500">Address :</h3>
          <div className="output">{watch("address")}</div>
          <h3 className="text-lg text-rose-500">Phone :</h3>
          <div className="output">{watch("phone")}</div>
          <h3 className="text-lg text-rose-500">Website :</h3>
          <div className="output">{watch("website")}</div>
        </div>
      </div>
    </>
  );
};

export default index;
