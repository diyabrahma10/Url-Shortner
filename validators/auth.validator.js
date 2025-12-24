import z from 'zod';

export const registerSchema = z.object(
    {name : z.string().trim().max(100, {error : " Name must be less than 100 characters"}),
    email : z.string().trim().email({error :"PLease enter a valid email address"}),
    password : z.string().min(4, {error: "Password must be atleast of 4 characters"}),}
)