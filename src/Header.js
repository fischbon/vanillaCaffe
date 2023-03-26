import "./App.css"

function Header (){
    return(
        <img id="logo" src={require("./components/logo/logo.png")} alt="vanilla caffe logo"></img>        
    );
};

export default Header;