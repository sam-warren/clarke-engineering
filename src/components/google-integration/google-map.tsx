import { useCallback, memo, useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import type { LoadScriptProps } from '@react-google-maps/api'

interface GoogleMapComponentProps {
  height?: string
  className?: string
  showMarker?: boolean
  address?: string
}

const containerStyle = {
  width: '100%',
  height: '100%',
}

// Default center (Victoria, BC) - will be updated by geocoding
const defaultCenter = {
  lat: 48.4284,
  lng: -123.3656,
}

// Consistent loader configuration
const loaderOptions: LoadScriptProps = {
  id: 'google-map-script',
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  libraries: ['places'],
}

const GoogleMapComponent = memo(
  ({
    height = '300px',
    className = '',
    showMarker = true,
    address = '3364 Burns Ave, Victoria, BC V8Z 3P2',
  }: GoogleMapComponentProps) => {
    const [center, setCenter] = useState(defaultCenter)
    const { isLoaded } = useJsApiLoader(loaderOptions)

    useEffect(() => {
      if (isLoaded && address && window.google) {
        const geocoder = new window.google.maps.Geocoder()
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const location = results[0].geometry.location
            setCenter({
              lat: location.lat(),
              lng: location.lng(),
            })
          }
        })
      }
    }, [isLoaded, address])

    const onLoad = useCallback(function callback(map: google.maps.Map) {
      map.setOptions({
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
      })
    }, [])

    const onUnmount = useCallback(function callback() {
      // Clean up if needed
    }, [])

    if (!isLoaded) {
      return (
        <div
          className={`bg-gray-200 rounded-md flex items-center justify-center ${className}`}
          style={{ height }}
        >
          <p className="text-gray-500">Loading map...</p>
        </div>
      )
    }

    if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY) {
      return (
        <div
          className={`bg-gray-200 rounded-md flex items-center justify-center ${className}`}
          style={{ height }}
        >
          <div className="text-center text-gray-500">
            <p>Map unavailable</p>
            <p className="text-sm">Google Maps API key not configured</p>
          </div>
        </div>
      )
    }

    return (
      <div className={className} style={{ height }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            styles: [
              // Optional: Add custom map styling here
            ],
          }}
        >
          {showMarker && (
            <Marker
              position={center}
              title={address}
              animation={google.maps.Animation.DROP}
            />
          )}
        </GoogleMap>
      </div>
    )
  },
)

GoogleMapComponent.displayName = 'GoogleMapComponent'

export { GoogleMapComponent }
