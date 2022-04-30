import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGV2bWlyemEiLCJhIjoiY2wyaHBzZjNyMGdidDNobDVsbGtwc2p1eiJ9.DTeDEPF-0EasKeYpHSNNeg'

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })
  })
  return <div className={style.wrapper} id="map" />
}

export default Map
