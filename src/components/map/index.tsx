import * as React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
}

const AnyReactComponent: React.FC<any> = ({ text }) => <div>{text}</div>

interface MapProps {
  location: {
    lat: number
    lng: number
    text: string
  }
}

const Map: React.FC<MapProps> = ({ location }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GMAP_API_KEY }}
      defaultCenter={location}
      defaultZoom={defaultProps.zoom}
    />
  )
}

export default Map
