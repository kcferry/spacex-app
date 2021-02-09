import ReactPlayer from 'react-player/youtube'

const Webcast = ({ link }) => {
    const last = 'fe6HBw1y6bA&t=928s'
    const stream = `https://www.youtube.com/watch?v=${last}`

    return (
        <div className='container'>
            <div className="player-wrapper">
                <ReactPlayer 
                className='react-player'
                url={stream}
                    config={{
                        youtube: {
                            playerVars: {
                                controls: true
                            }
                        }
                    }}
                width='100%'
                height='100%'
                />

            </div>
        </div>
    )
}

export default Webcast
