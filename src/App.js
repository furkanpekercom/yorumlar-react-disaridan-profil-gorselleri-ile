import React from "react";
import Comment from "./Comment"
import Card from "./Card"
import {faker} from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui comments" style={{paddingTop:"20px", paddingLeft:"20px",}}>


        <Comment name="Furkan Peker" gun="1 Gün Önce" yorum="Canım istedi bu kodu da attım." star="5" avatar={faker.image.avatar()}/>
   

      
        <Comment name="Persephone Jack" gun="3 Gün Önce" yorum="Helel len sana." star="5" avatar={faker.image.avatar()}/>
      

    </div>
  ); 
};

export default App;
