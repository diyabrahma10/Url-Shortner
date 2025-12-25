import { getUserByEmail, verifyPassword } from "../services/auth.services.js";
import { loginSchema } from "../validators/auth.validator.js";
import jwt from "jsonwebtoken";

export const getLoginController = (req, res) => {
  res.render("login");
};

export const postLoginController = async (req, res) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    const errorMessages = result.error.issues.map((issue) => issue.message);
    res.locals.errors = errorMessages;
    return res.render("login"); //res.redirect will not contain the locals.error only render can render the locals
  }

  const userDetail = await getUserByEmail(result.data.email);
  if (!userDetail) {
    //user dont exist
    res.locals.errors.push("User do not exists!! Try another email");
    return res.render("login");
  }

  const verified = await verifyPassword(
    userDetail.passwordhash,
    result.data.password
  );

  if (!verified) {
    res.locals.errors.push("Invalid Password");
    return res.render("login");
  }

  const token = jwt.sign(
    {
      id: userDetail.id,
      name: userDetail.name,
      email: userDetail.email,
    },
    process.env.SECRET_KEY, 
    { expiresIn: "1D" }
  );

  res.cookie("access_token", token);
  return res.redirect('/');
};

export const logoutUser = (req, res) => {
    res.clearCookie("access_token");
    return res.redirect('/');
}
