
import ReactDom from 'react-dom'

const Modal = ({ open, onClose, link }) => {
    if (!open) {
        return null
    } else if (!link) {
        return null
    }
    
    const stream = `https://www.youtube.com/embed/${link}`

    return ReactDom.createPortal(

        <>
            <div className='overlay'>
            </div>
            <div className='modal-stlyes'>
                
                <div className='modal-content'>
                <button className='modal-close-btn' onClick={onClose}>X</button>
                    <div className="player-wrapper">
                        <iframe
                            width="560" height="315"
                            src={stream}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen='true'>
                        </iframe>
                    </div>

                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal
