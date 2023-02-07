import { useEffect, useState } from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const AddUserForm = ({ addUser }) => {
  const [users, setUsers] = useState();

  const initialValues = {
    title: "",
    firstName: "",
    lastName: "",
    gender: "male",
    age: "",
    email: "",
    
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Please select a title."),
    firstName: Yup.string()
      .required("Please enter a first name.")
      .min(2, "Please enter a valid first name."),
    lastName: Yup.string()
      .required("Please enter a first name.")
      .min(2, "Please enter a valid first name."),
    gender: Yup.string().required("Please select a gender."),
    age: Yup.number()
      .required("Please enter your age.")
      .min(18, "User must be 18 and over.")
      .max(100, "User cannot be over 100."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email address is required."),
    
  });

  const onSubmit = ({
    title,
    firstName,
    lastName,
    gender,
    age,
    email,
    
  }) => {
    const user = {
      id: uuidv4(),
      title,
      firstName,
      lastName,
      gender,
      age,
      email,
     
    };

    addUser(user);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="border rounded p-4 text-light my-4">
      <Form className="p-5" onSubmit={formik.handleSubmit}>
        <Stack gap={5}>
          <Stack>
            <h1 className="title">Add User Form</h1>
            <hr />
          </Stack>

          <Stack gap={3}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Select
                name="title"
                id="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled>
                  Select title
                </option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                
              </Form.Select>

              {formik.touched.title && formik.errors.title && (
                <Form.Text className="text-danger">
                  {formik.errors.title}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.firstName && formik.errors.firstName && (
                <Form.Text className="text-danger">
                  {formik.errors.firstName}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.lastName && formik.errors.lastName && (
                <Form.Text className="text-danger">
                  {formik.errors.lastName}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Check
                label="Male"
                name="gender"
                type="radio"
                value="male"
                checked={formik.values.gender === "male"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Form.Check
                label="Female"
                name="gender"
                type="radio"
                value="female"
                checked={formik.values.gender === "female"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.gender && formik.errors.gender && (
                <Form.Text className="text-danger">
                  {formik.errors.gender}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                id="age"
                placeholder="Enter your profile image url"
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.age && formik.errors.age && (
                <Form.Text className="text-danger">
                  {formik.errors.age}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.email && formik.errors.email && (
                <Form.Text className="text-danger">
                  {formik.errors.email}
                </Form.Text>
              )}
            </Form.Group>

          </Stack>

          <Stack className="d-grid gap-2 col-6 mx-auto">
            <Button variant="success" type="submit" >
              Create User
            </Button>
          </Stack>
        </Stack>
      </Form>
    </Container>
  );
};
