import React from 'react'
import classes from './Home.module.css'

export const Home = () => (
        <div className={classes.home} style={{background: 'url(../../img/Layer.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
          <div className="container">
            <div className={classes.headerTitle}>
              <h1>Shopy</h1>
              <p>Главная страница сайта-шаблона react-shopy</p>
            </div>
          </div>
        </div>
)
