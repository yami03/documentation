export default `import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log("Submit event", e);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
      <button type="submit">Submit</button>
    </form>
  );
}`
