import React, { useState } from "react"
import { useModalLike } from "./async"



function PageHome() {
  const modal = useModalLike()
  

  return (
    <div>
      {modal.render(<div>1111</div>)}

      <button onClick={() => {modal.open()}}>111, {modal.visible ? 1 : 0}</button>
      <button onClick={() => {modal.reject('???')}}>close</button>
    </div>
  )
}

export default PageHome
