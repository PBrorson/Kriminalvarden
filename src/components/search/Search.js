import React from 'react'
import './SearchStyles.css'
import Krimpoäng from '../../assets/krimpoäng.png'


function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                    <div className="Appen">
                    <h2>Gör som majoriteten av våra klienter!</h2>
                    <h2>Skaffa KriminalvårdsAppen<br></br> och samla KriminalVårdsPoäng!</h2>
                    </div>
               
            
                    <div className="points">
                        <img src={Krimpoäng} alt="/"/>
                        <div className="text">
                        <li>
                            <ul>Du kan få 10 % rabatt till familjemedlem</ul> 
                        </li>
                        <li>
                            <ul>Få en bonusnatt* för var tionde natt du bor</ul>
                        
                        </li>
                        <li>
                            <ul>Tillgång till ett extra telefonsamtal.</ul>
                        </li>
                        </div>
                        
                    </div>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                          
                               
                                
                            </div>
                            <div>
                
                            </div>
                        </div>
                        <div className="box">
                            
                        </div>
                    </div>
                </div>
                <div className="right">
                
                 
                </div>
            </div>
        
    )
}

export default Search
