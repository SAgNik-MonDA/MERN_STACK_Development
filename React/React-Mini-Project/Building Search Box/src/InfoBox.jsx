import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1628525805814-cf9fe2582727?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
    

const HOT_URL="https://images.unsplash.com/photo-1534250441079-1b355ffbab76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171";
const COLD_URL="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169";
const RAIN_URL="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";


 
    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
       
        image={info.humidity > 80 ? RAIN_URL : info.temp >15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city.toUpperCase()} &nbsp;&nbsp;{
                info.humidity > 80 
                ? <ThunderstormIcon/> 
                : info.temp >15
                ? <SunnyIcon />
                : <AcUnitIcon/>
                 }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary'}}component={"span"}>
                <p>Temperature={info.temp}&deg;C</p>
                 <p>Humidity={info.humidity}</p>
                 <p>Min Temp = {info.tempMin}&deg;C</p>
                 <p>Max Temp = {info.tempMax}&deg;C</p>
                 <p>The weather can be described as <b>{info.weather}</b> and Feels Like = <b>{info.feelsLike}</b>&deg;C</p>
                </Typography>
            </CardContent>
        </Card>
        </div>
        </div>
    );
}