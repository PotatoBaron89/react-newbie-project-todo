import React from 'react'

class CONTAINER_CREATOR {
    genBannerHalf() {
            const header_styles = {
                display: 'grid',
                'grid-gap': '0.3rem',
                'grid-template-columns': '1fr',

                'min-height': '30vh',
                width: '90%',
                left: '0',
                background: 'linear-gradient(to right, #3399f3, #2e8adb, #F1F1EF)',
                'align-self': 'center',
                'box-shadow': '13px 13px rgba(0, 0, 0, 0.38)',
                transform: 'translateX(5%)',
            }
        return  <div style={header_styles} >
                     <h2 className="title">Todo List</h2>
                </div>
    }
}


export { CONTAINER_CREATOR }
