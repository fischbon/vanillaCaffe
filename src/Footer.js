import "./css/Footer.css"

export default function Footer (){
    return(
        <div className="footer">
            <div className="footerLogo">
                <img id="footerLogo" src={require("./components/logo/logo_noTxt.png")} alt="vanilla caffe logo"></img>
            </div>
            <div className="social">
            <a href="https://www.facebook.com/Fischuuu"><img id="fbLogo" src={require("./components/img/fb.png")} alt="facebook logo"></img></a>
            <a href="https://www.linkedin.com/in/jakub-fischbach-764a7621a/"><img id="liLogo" src={require("./components/img/li.png")} alt="linkedin logo"></img></a>
            <a href="https://twitter.com/fischu___"><img id="ttLogo" src={require("./components/img/tt.png")} alt="twitter logo"></img></a>
            </div>
            <div className="copyrights">
                © Copyright Vanilla caffe
            </div>
        </div>
    )
}