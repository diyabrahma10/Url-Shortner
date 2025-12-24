import express from 'express';
import { authLoginRouter} from './routes/authRoutes/login.route.js';
import { authRegisterRouter } from './routes/authRoutes/register.route.js';
import cookieParser from 'cookie-parser';
import { homeRouter } from './routes/home.route.js';

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(cookieParser())

app.use((req, res, next) => {
    res.locals.errors= [];
    res.locals.success=[];
    next();
})

app.use('/auth', authLoginRouter);
app.use('/auth', authRegisterRouter);
app.use(homeRouter);

app.listen(3000, () => {
    console.log(`Server running of http://localhost:${3000}`);
})