import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../../components/config/firebase";
import "./_login.scss"; // Import SCSS
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import GoogleButton from "react-google-button";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/homepage");
  }, [user, loading, navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const { email, password } = values;
      await logInWithEmailAndPassword(email, password);
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Không để trống")
        .email("Email không hợp lệ"),
      password: Yup.string().required("Không để trống"),
    }),
  });

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="mb-3">
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #aaa 30%, #434343 90%)",
              border: 0,
              borderRadius: 15,
              boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
              color: "white",
              height: 48,
              padding: "0 30px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(45deg, #434343  30%, #aaa  90%)",
              },
            }}
          >
            Login
          </Button>
          <div className="login__or">
            <h2>Hoặc</h2>
          </div>
          <div className="login__google-container">
            <GoogleButton onClick={signInWithGoogle} />
          </div>
          <div className="link">
            <Link to="/reset" className="switch_link">
              Forgot Password
            </Link>
          </div>
          <div className="link">
            Do not have an account?{" "}
            <Link to="/register" className="switch_link">
              Register
            </Link>{" "}
            now.
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
