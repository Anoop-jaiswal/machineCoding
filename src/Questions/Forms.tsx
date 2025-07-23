import { useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [errors, setErrors] = useState<{ username?: string; email?: string }>(
    {}
  );

  const validate = () => {
    let tempErrors: { username?: string; email?: string } = {};

    if (!formData.username.trim()) {
      tempErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    }

    setErrors(tempErrors);

    // Only return true if no error messages
    return Object.values(tempErrors).every((msg) => msg === undefined);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
      console.log(formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
