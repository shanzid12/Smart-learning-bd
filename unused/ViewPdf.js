import React from 'react';
//Custom hooks
import useLocationLevel from '../src/hooks/useLocationLevel';
export default function ViewPdf() {
    const link = useLocationLevel(3);
    const title = useLocationLevel(4);
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 24px 0px 24px',
            width: '100%',
            height: '100vh'
        }}>
            <div style={{
                paddingBottom: 8,
                fontFamily: 'Poppins',
                fontSize: 20,
                textAlign: 'center',
            }}>
                {title}
            </div>
            <iframe
                src={`https://drive.google.com/file/d/${link}/preview`}
                allow='autoplay'
                style={{ border: 'none', width: '100%', height: '100vh' }} />
        </div>
    )
}