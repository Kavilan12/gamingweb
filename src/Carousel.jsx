import React from "react";
function Carousel()
{
    return(
        <>
           <div id="care" className="carousel slide" data-bs-ride="carousel">

  
<div class="carousel-indicators">
  <button type="button" data-bs-target="#care" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#care" data-bs-slide-to="1" className="active"></button>
  <button type="button" data-bs-target="#care" data-bs-slide-to="2" className="active"></button>
</div>


<div className="carousel-inner">
  <div className="carousel-item active">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg" alt="Los Angeles" class="d-block w-100" height="600" width="100%" />
  </div>
  <div className="carousel-item">
    <img src="https://media.cntraveler.com/photos/61e865ea62e14c3f706eea5c/16:9/w_2580,c_limit/Chicago_GettyImages-1180689542.jpg" alt="Chicago" class="d-block w-100"  height="600" width="100%" />
  </div>
  <div className="carousel-item">
    <img src="https://cf.bstatic.com/xdata/images/hotel/max500/263858373.jpg?k=1818a9f40dbf631c2870111510af6d1eee39fd366d246da6a0b0875f1c87066a&o=&hp=1" alt="Las Vegas" class="d-block w-100"  height="600" width="100%" />
  </div>
</div>


<button className="carousel-control-prev" type="button" data-bs-target="#care" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#care" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
<br/><br/>

        </>
    )
}
export default Carousel