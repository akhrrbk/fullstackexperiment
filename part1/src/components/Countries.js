import React from "react";
import Note from './Note'

const Countries = ({countriestoshow}) => {

    if(countriestoshow.length > 20  && countriestoshow.length !== 0){
        return (
            <div>
                <p>
                  too many matches. please be more specific
                </p>
            </div>
        )
    } else if(countriestoshow.length === 1){
        return (
            <div>
                <h2>{countriestoshow[0].name.common}</h2>
                <p>Capital City: {countriestoshow[0].capital}</p>
                <p>Population: {countriestoshow[0].population}</p>
                <h3>Languages section is not available for now</h3>
                {/* <ul>
                    {countriestoshow[0].languages.map((axror) => { <li key={axror.name}>{axror.name}</li>})}
                </ul> */}
                <img src={countriestoshow[0].flags.png} alt="" />
            </div>
        )
    } else {
        return (
           <div>
               <ul>
                    {countriestoshow.map((note, i) => <Note key={i} note={note} /> )}
                </ul>
           </div> 
        )
    }
}

export default Countries