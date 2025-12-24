import { createUser, getUserByEmail } from "../services/auth.services.js";
import { registerSchema } from "../validators/auth.validator.js";

export const getRegisterController = async (req, res) => {
  res.render("register");
};

export const postRegisterController = async (req, res) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    const errorMessages = result.error.issues.map((issue) => issue.message);
    res.locals.errors = errorMessages;
    return res.render("register");
  }
  else{
    const user = await getUserByEmail(result.data.email);
    if(user){
        res.locals.errors.push("Email already exists");
        return res.render('register');
    }
    else{
        const newUser = await createUser(result.data.name, result.data.email, result.data.password);
        console.log(newUser);
        res.locals.success.push("User created Successfully");
        return res.render('login');
        
        
    }
  }
  
};
