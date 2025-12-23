import express from 'express';
import { authLoginRouter} from './routes/authRoutes/login.js';
import { authRegisterRouter } from './routes/authRoutes/register.js';

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");


app.use('/auth', authLoginRouter);
app.use('/auth', authRegisterRouter);

app.listen(3000, () => {
    console.log(`Server running of http://localhost:${3000}`);
})