export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Headers />

      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>

      <input type="submit" />
    </form>
  );
}



/* const firstArray = [req.body.title, req.body.content,req.body.idkategori,req.body.iduser];
        const secondArray = [req.file.filename];
        const dataUpload = firstArray.concat(secondArray) */