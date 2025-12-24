export const getHomePage = (req,res) => {
    const urls=null;
    // console.log(urls);
    
    return res.render("home", {urls});
}