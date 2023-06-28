import React from 'react'

export default function HomePage() {
  return (
    <>
    <main className='App-container'>
        <div className='App-container-dark'>
        <div className='App-container-wrapper'>
            <div className='Title'>
                <h1>Добро пожаловать в <span>Weather<span style={{paddingLeft: 4,}}>App</span>!</span></h1>
                <h3>Здесь вы сможете посмотреть информацию о погоде в любом городе земного шара !</h3>
                <a href='/weather' style={{textDecoration: 'none'}}>
                    <div id='Button'>Перейти</div>
                </a>
            </div>
        </div>
        </div>
    </main>
    <footer className='App-footer'>
        <div className='footer-info-1'>
            <div className='footer-col-1'>
                <h2>Weather<span style={{paddingLeft: 4,}}>App</span></h2>
                <a href='/about'>Обратная связь</a>
            </div>
            <div className='footer-col-2'>
                <h2>Weather<span style={{paddingLeft: 4,}}>App</span></h2>
                <a href='/about'>Обратная связь</a>
            </div>
        </div>
        <div className='footer-info-2'>
            <div className='footer-col-1'>
                <h2>Weather<span style={{paddingLeft: 4,}}>App</span></h2>
                <a href='/about'>Обратная связь</a>
            </div>
            <div className='footer-col-2'>
                <h2>Weather<span style={{paddingLeft: 4,}}>App</span></h2>
                <a href='/about'>Обратная связь</a>
            </div>
        </div>
    </footer>
    </>
  
  )
}
