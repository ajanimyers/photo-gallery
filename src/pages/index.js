import React, { useState } from "react"
import Header from "./../components/header"
import Dancing1 from "./../assets/img/dancing-1.jpeg"
import Dancing2 from "./../assets/img/dancing-2.jpeg"
import Dancing3 from "./../assets/img/dancing-3.jpeg"
import Dancing4 from "./../assets/img/dancing-4.jpeg"
import Dancing5 from "./../assets/img/dancing-5.jpeg"
import Dancing6 from "./../assets/img/dancing-6.jpeg"
import Afro1 from "./../assets/img/afro-1.jpeg"
import Afro2 from "./../assets/img/afro-2.jpeg"
import Afro3 from "./../assets/img/afro-3.jpeg"
import Afro4 from "./../assets/img/afro-4.jpeg"
import Afro5 from "./../assets/img/afro-5.jpeg"
import Afro6 from "./../assets/img/afro-6.jpeg"

export default function Home() {
  const [allPhotos, setAllPhotos] = useState(true)
  const [filterPhotoBy, setFilterPhotoBy] = useState("")
  const photos = [
    [Dancing1, "dancing"],
    [Dancing2, "dancing"],
    [Dancing3, "dancing"],
    [Dancing4, "dancing"],
    [Dancing5, "dancing"],
    [Dancing6, "dancing"],
    [Afro1, "afro"],
    [Afro2, "afro"],
    [Afro3, "afro"],
    [Afro4, "afro"],
    [Afro5, "afro"],
    [Afro6, "afro"],
  ]
  const handleClick = e => {
    console.log("Clicked", e.target.textContent.toLowerCase())
    setFilterPhotoBy(e.target.textContent.toLowerCase())
    setAllPhotos(false)
    if (e.target.textContent.toLowerCase() === "all") {
      setAllPhotos(true)
      setFilterPhotoBy("")
    }
  }
  return (
    <div className="site-content">
      <a href="#top"></a>
      <Header handleClick={handleClick} />

      <main className="container">
        {allPhotos ? (
          <p>All Photos</p>
        ) : (
          <p>{filterPhotoBy[0].toUpperCase() + filterPhotoBy.slice(1)}</p>
        )}
        <div className="card-list">
          {allPhotos
            ? photos.map((photo, index) => {
                return (
                  <div className={`card ${photo[1]}`} key={index}>
                    <img src={photo[0]} alt="" />
                  </div>
                )
              })
            : photos.map((photo, index) => {
                if (photo[1] === filterPhotoBy) {
                  return (
                    <div className={`card ${photo[1]}`} key={index}>
                      <img src={photo[0]} alt="" />
                      {console.log(photo[0])}
                    </div>
                  )
                }
              })}
        </div>
      </main>
      <footer className="footer container">
        <small>Photo Gallery made with ❤️</small>
      </footer>
    </div>
  )
}
