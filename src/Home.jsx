import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Form from "./Form"
function Home()
{
    return(
        <>
        <Navbar/>
        <Carousel/>
        




        <div style={{height:"350px",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <div  style={{height:"350px",width:"250px",backgroundImage:'url("https://www.minecraft.net/content/dam/games/minecraft/key-art/MC_The-Wild-Update_540x300.jpg")', paddingTop:"230px", backgroundSize:"cover",color:"white"}}>
            <h3>Available for $29.95</h3>
            <a className="btn btn-primary" href="https://www.minecraft.net/en-us">Get here</a>

          </div>
          <div  style={{height:"350px",width:"250px",backgroundImage:'url("https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg")', paddingTop:"230px", backgroundSize:"cover",color:"white"}}>
            <h3>Available for free</h3>
            <a className="btn btn-primary" href="https://www.roblox.com/">Get here</a>
          </div>
          <div  style={{height:"350px",width:"250px",backgroundImage:'url("https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1618856444")',  paddingTop:"230px", backgroundSize:"cover",color:"white"}}>
            <h3>Available for PS5 and XBOX Series</h3>
            <a className="btn btn-primary" href="https://www.rockstargames.com/gta-v">Get here</a>
          </div>
          <div  style={{height:"350px",width:"250px",backgroundImage:'url("https://dl.dir.freefiremobile.com/common/web_event/hash/f5e5dc286ea66e7b252c0cc399e2920djpg")', paddingTop:"230px", backgroundSize:"cover",color:"white"}}>
            <h3>Available for free in mobile</h3>
            <a className="btn btn-primary" href="https://ff.garena.com/">Get here</a>
          </div>
        </div>
        </>
    );
}
export default Home;
