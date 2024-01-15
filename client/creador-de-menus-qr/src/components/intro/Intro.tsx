import React from 'react'
import styles from './intro.module.scss'

const Intro = () => {
  return (
    <div className={styles.introMain}>
        <h1>Crea tu propio menu QR para tu restaurante</h1>
        <h2>
            MenusQR es una herramienta que te permite crear un menu QR para tu restaurante de manera facil y rapida
        </h2>
        <div>
            <button>
                Crea un menu
            </button>
            <button>
                Ver menu real
            </button>
        </div>

        <section>
            
        </section>
    </div>
  )
}

export default Intro