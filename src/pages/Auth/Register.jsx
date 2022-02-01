import React from "react";
import Layout from "../../components/layout/auth";
import Button from "../../components/templates/Button";
import Input from "../../components/templates/Input";
import Label from "../../components/templates/Label";
import ErrorMessage from "../../components/templates/ErrorMessage";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authRegister } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Wajib di Isi"),
  email: Yup.string().email().required("Wajib di isi"),
  password: Yup.string()
    .min(8, "Password minimal 8 Karakter")
    .required("wajib di isi"),
  passwordConfirmation: Yup.string()
    .min(8, "Password minimal 8 Karakter")
    .oneOf([Yup.ref("password")], "Password dan Konfirmasi Password wajib sama")
    .required("wajib di isi"),
});

export default function Register() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    const result = await dispatch(authRegister(values));
    if (result.status === "Success") return navigate("/dashboard");

    console.log("hasil", result);
  };
  return (
    <Layout>
      <div className="w-3/4 px-10">
        <h1 className="text-xl text-gray-700 font-bold  mb-10">
          Register Page
        </h1>

        <Formik
          initialValues={initialState}
          validationSchema={RegisterSchema}
          enableReinitialize
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting,
          }) => (
            <form className="grid gri-cols-1 gap-5" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="name"
                  error={errors.name && touched.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  disabled={isSubmitting}
                ></Input>
                {errors.name && touched.name && (
                  <ErrorMessage>{errors.name}</ErrorMessage>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="email"
                  error={errors.email && touched.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  disabled={isSubmitting}
                ></Input>
                {errors.email && touched.email && (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                )}
              </div>
              <div>
                <Label htmlFor="password">password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="password"
                  error={errors.password && touched.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  disabled={isSubmitting}
                ></Input>
                {errors.password && touched.password && (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                )}
              </div>
              <div className="justify-between">
                <div className=" w-2/6 bg-white rounded-lg shadow-md p-1 ">
                  <form action="">
                    <p>jenis Kelamin :</p>
                    <input
                      type="radio"
                      id="lk"
                      name=""
                      value="Laki - Laki"
                    />
                    <label htmlFor="lk">Laki - Laki</label>
                    <br />
                    <input type="radio" id="pr" name="" value="Perempuan" />
                    <label htmlFor="pr">Perempuan</label>
                  </form>

                  
                </div>
                <br />
                <div className=" w-2/6 bg-white rounded-lg shadow-md p-1 justify-between">
                <form action="">
                  <p>Status :</p>
                  <input type="radio" id="Active" name="" value="At" />
                  <label htmlFor="Active">Active</label>
                  <br />
                  <input type="radio" id="Non Active" name="" value="nAt" />
                  <label htmlFor="Non Active">Non Active</label>
                  <br />
                </form>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="py-4 bg-blue-500 w-full text-white text-2xl font-bold rounded-lg"
                >
                  Klik
                </button>
                {/* <Button block variant="solid" htmlType="submit" color="red">
                  Klik
                </Button> */}
              </div>
            </form>
          )}
        </Formik>
        <div className="py-8 ">
          <Link to="/register" className="text-blue-700 ">
            Register
          </Link>
          <Link to="/dashboard" className="text-blue-700  px-4">
            Dashboard
          </Link>
        </div>
      </div>
    </Layout>
  );
}
