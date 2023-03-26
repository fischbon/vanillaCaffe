import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./css/Menu.css";

export default function Menu(){
    return(
        <div className="menu">
            <div className="cardContainer">
                <div className="Card">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            id="cardPhoto"
                            component="img"
                            sx={{ height: 200 }}
                            img src={require("./components/img/caffe/manhattan_star.jpg")}
                            title="manhattan star"
                        />
                        <CardContent id="cardContent">
                        <Typography gutterBottom variant="h5" component="div" id='cardTitle'>
                            manhattan star
                        </Typography>
                        <Typography variant="body2" color="text.secondary" id="cardDescription">
                        Savor the bold and smooth taste of Manhattan Star, a classic Americano-style coffee that's sure to fuel your day.
                        </Typography>
                        </CardContent>
                        <CardActions id="price">
                            15.00$
                        </CardActions>
                    </Card>
                </div>

                <div className="Card">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            id="cardPhoto"
                            component="img"
                            sx={{ height: 200 }}
                            img src={require("./components/img/caffe/latte.jpg")}
                            title="caffe latte"
                        />
                        <CardContent id="cardContent">
                        <Typography gutterBottom variant="h5" component="div" id='cardTitle'>
                            caffe latte
                        </Typography>
                        <Typography variant="body2" color="text.secondary" id="cardDescription">
                        Caffe Latte is a rich and creamy coffee drink that is perfect for indulging in a moment of pure comfort and luxury.
                        </Typography>
                        </CardContent>
                        <CardActions id="price">
                            10.00$
                        </CardActions>
                    </Card>
                </div>

                <div className="Card">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            id="cardPhoto"
                            component="img"
                            sx={{ height: 200 }}
                            img src={require("./components/img/caffe/mocha.jpg")}
                            title="caffe mocha"
                        />
                        <CardContent id="cardContent">
                        <Typography gutterBottom variant="h5" component="div" id='cardTitle'>
                            caffe mocha
                        </Typography>
                        <Typography variant="body2" color="text.secondary" id="cardDescription">
                        Caffe Mocha is a delicious and decadent coffee beverage that combines the rich, smooth taste of espresso with the sweetness of chocolate for a truly indulgent experience.
                        </Typography>
                        </CardContent>
                        <CardActions id="price">
                            12.00$
                        </CardActions>
                    </Card>
                </div>

                <div className="Card">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            id="cardPhoto"
                            component="img"
                            sx={{ height: 200 }}
                            img src={require("./components/img/caffe/choco.jpg")}
                            title="hot chocolate"
                        />
                        <CardContent id="cardContent">
                        <Typography gutterBottom variant="h5" component="div" id='cardTitle'>
                            hot chocolate
                        </Typography>
                        <Typography variant="body2" color="text.secondary" id="cardDescription">
                        Indulge in the decadent taste of hot chocolate infused with the warmth of cinnamon.
                        </Typography>
                        </CardContent>
                        <CardActions id="price">
                            10.00$
                        </CardActions>
                    </Card>
                </div>

                <div className="Card">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            id="cardPhoto"
                            component="img"
                            sx={{ height: 200 }}
                            img src={require("./components/img/caffe/tea.jpg")}
                            title="spiced tea"
                        />
                        <CardContent id="cardContent">
                        <Typography gutterBottom variant="h5" component="div" id='cardTitle'>
                            spiced tea
                        </Typography>
                        <Typography variant="body2" color="text.secondary" id="cardDescription">
                        Experience a burst of flavor with every sip of our spiced tea, packed with aromatic spices and herbs.
                        </Typography>
                        </CardContent>
                        <CardActions id="price">
                            12.00$
                        </CardActions>
                    </Card>
                </div>

                <div className="Card">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            id="cardPhoto"
                            component="img"
                            sx={{ height: 200 }}
                            img src={require("./components/img/caffe/matcha.jpg")}
                            title="matcha"
                        />
                        <CardContent id="cardContent">
                        <Typography gutterBottom variant="h5" component="div" id='cardTitle'>
                            matcha tea
                        </Typography>
                        <Typography variant="body2" color="text.secondary" id="cardDescription">
                        Discover the vibrant taste and health benefits of our finely ground, antioxidant-rich matcha powder
                        </Typography>
                        </CardContent>
                        <CardActions id="price">
                            15.00$
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    )
}