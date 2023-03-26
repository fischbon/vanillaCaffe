import "./css/AboutUs.css"
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./css/Menu.css";

function AboutUs (){
    return(
        <div className="about">
            <div className="CardAbout">
                <Card className="cardAboutx" sx={{ maxWidth: "60vw", backgroundColor: "#C19051"}}>
                     <CardMedia
                        id="cardPhotoAbout"
                        component="img"
                        sx={{ height: "300px", width: "300px", borderRadius:"150px" }}
                        img src={require("./components/img/profile.jpg")}
                        title="Kuba"
                    />
                    <CardContent id="cardContentAbout">
                        <Typography variant="h5" component="div" id='cardTitleAbout'>
                            Kuba
                        </Typography>
                        <Typography variant="body2" color="text.secondary" id="cardDescriptionAbout">
                            Vanilla Caffe's main barista is a skilled and passionate coffee connoisseur, with a deep understanding of the art and science of brewing the perfect cup of coffee. With years of experience and training under their belt, this barista has honed their craft to a level of expertise that is truly exceptional.

                            When you step into Vanilla Caffe, you can expect to be greeted by a warm smile and a friendly demeanor from this barista, who is always eager to share their knowledge and enthusiasm for coffee with customers. They take the time to get to know each customer's preferences and make personalized recommendations based on their taste and mood.
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div className="CardAbout">
                <Card className="cardAboutx" sx={{ maxWidth: "60vw", backgroundColor: "#C19051"}}>
                    <CardMedia
                        id="cardPhotoAbout"
                        component="img"
                        sx={{ height: "300px", width: "300px", borderRadius:"150px" }}
                        img src={require("./components/img/Paulina.jpg")}
                        title="Paulina"
                    />
                    <CardContent id="cardContentAbout">
                        <Typography variant="h5" component="div" id='cardTitleAbout'>
                            Paulina
                        </Typography>
                        <Typography variant="body2" color="text.secondary" id="cardDescriptionAbout">
                        Paulina is one of Vanilla Caffe's top baristas, known for her exceptional customer service, attention to detail, and mastery of the art of coffee-making. With years of experience under her belt, Paulina has developed a reputation as one of the most skilled baristas in the area, and customers flock to Vanilla Caffe specifically to enjoy her expertly-crafted coffee creations.

                        When you order a drink from Paulina, you can expect to be greeted with a warm smile and a genuine enthusiasm for coffee that is infectious. She takes the time to get to know each customer, asking about their preferences and making personalized recommendations based on their tastes. Her knowledge of coffee is vast and impressive, and she is always eager to share her expertise with anyone who is interested.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default AboutUs;