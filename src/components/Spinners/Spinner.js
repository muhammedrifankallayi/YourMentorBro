import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Spinner() {
  return (
    <TailSpin
    height="20"
    width="20"
    color="#ffff"
    ariaLabel="tail-spin-loading"
    radius="3"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  )
}

export default Spinner