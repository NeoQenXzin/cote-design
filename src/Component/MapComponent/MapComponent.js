import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Importer Leaflet et les composants de la carte dynamiquement avec SSR désactivé
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const MapComponent = ({ position }) => {
    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        setMapReady(true);

        // Si nécessaire, configurer les options par défaut de l'icône ici après le chargement de Leaflet
        if (typeof window !== 'undefined' && typeof L !== 'undefined') {
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: '/assets/icones/marker-icon-2x.png',
                iconUrl: '/assets/icones/marker-icon-2x.png',
                shadowUrl: '/assets/icones/marker-shadow.png'
            });
        }
    }, []);

    if (!mapReady) {
        return <p>Chargement de la carte...</p>;
    }

    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: '100%', width: '100%', zIndex: '1' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={position} >
                <Popup>Côté Design</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
