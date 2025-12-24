import z from 'zod';

// export const registerSchema = z.object(
//     {,
//     email : z.string().trim().email({error :"PLease enter a valid email address"}),
//     password : z.string().min(4, {error: "Password must be atleast of 4 characters"}),}
// )

export const loginSchema = z.object(
    {
        email : z.string().trim().email({message :"PLease enter a valid email address"}),
        password : z.string().min(4, {message: "Password must be atleast of 4 characters"}),
    }
);

export const registerSchema= loginSchema.extend(
    {
        name : z.string().trim().max(100, {message : " Name must be less than 100 characters"})
    }
);