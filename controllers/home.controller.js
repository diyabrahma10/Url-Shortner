import { createShortcode, getUrlByShortcode, getUrlsofUser } from "../services/url.services.js";
import { createUrlSchema } from "../validators/url.validator.js";

export const getHomePage = async(req,res) => {
    // return res.send("you found ");
    if(!req.user){
        return res.redirect('/auth/login');
    }
    const geturls = await getUrlsofUser(req.user.id);
    res.locals.urls = geturls;
    return res.render("home");
}

export const postUrl = async(req,res) => {
    const result = createUrlSchema.safeParse(req.body);

    
    if(!result.success){
        const errorMsgs = result.error.issues.map(issue => issue.message);
        res.locals.errors = errorMsgs;
        return res.render('home');
    }
    
    const url = await getUrlByShortcode(result.data.shortCode);
    console.log(url);
    
    if(url){
        res.locals.errors = ["Shortcode is already in use. Try another shortcode"];
        return res.render("home");
    }

    try {
        const entry = await createShortcode(result.data.originalUrl, result.data.shortCode, req.user.id);
        return res.redirect('/');
    } catch (error) {
        res.locals.errors.push(error);
        return res.render("home");
    }

    
    
}